import { users, contactSubmissions, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, WithStringOrNumberId } from "@shared/schema";
import mongoose, { Schema, model, type Document } from "mongoose";
import path from "path";
import { google } from "googleapis";
import { fileURLToPath } from 'url';

// Only define __filename and __dirname if not running in Netlify (production)
let __filename: string | undefined = undefined;
let __dirname: string | undefined = undefined;
if (!process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
  // Local development
  const { fileURLToPath } = require('url');
  const path = require('path');
  __filename = fileURLToPath(import.meta.url);
  __dirname = path.dirname(__filename);
}

const GOOGLE_CREDENTIALS_PATH = __dirname ? path.join(__dirname, "google-service-account.json") : undefined;

const MONGO_URI = "mongodb+srv://saw31221:FgRtoJMEw2yvfTzL@contactmessages.uvqhfe0.mongodb.net/?retryWrites=true&w=majority&appName=ContactMessages";
const DB_NAME = "FormSubmissions";
const COLLECTION_NAME = "People";

const GOOGLE_SHEET_ID = "1Pc49EohOyakVsVfn2D02S6lQc1WLg_KpqMI82NKZtR8";
const GOOGLE_SHEET_NAME = "contact form";

// Mongoose schema for contact submissions
const contactSubmissionSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}, { collection: COLLECTION_NAME });

const ContactSubmissionModel = model("ContactSubmission", contactSubmissionSchema);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<WithStringOrNumberId<ContactSubmission>>;
  getContactSubmissions(): Promise<WithStringOrNumberId<ContactSubmission>[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private currentUserId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

function getGoogleAuth() {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    // Running in production (Netlify): use credentials from env var
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    return new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
  } else {
    // Local development: use credentials from file
    return new google.auth.GoogleAuth({
      keyFile: GOOGLE_CREDENTIALS_PATH,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
  }
}

async function appendToGoogleSheet(submission: { name: string; email: string; subject: string; message: string; createdAt: Date }) {
  try {
    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: `${GOOGLE_SHEET_NAME}!A:E`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          submission.name,
          submission.email,
          submission.subject,
          submission.message,
          submission.createdAt.toISOString(),
        ]],
      },
    });
    console.log("[Google Sheets] Successfully appended contact submission.");
  } catch (err) {
    console.error("[Google Sheets] Failed to append contact submission:", err);
    // Do not throw, so MongoDB save still succeeds
  }
}

class MongoStorage implements IStorage {
  constructor() {
    if (!mongoose.connection.readyState) {
      mongoose.connect(MONGO_URI, {
        dbName: DB_NAME,
      });
    }
  }

  async getUser(id: number) {
    return Promise.reject(new Error("Not implemented"));
  }
  async getUserByUsername(username: string) {
    return Promise.reject(new Error("Not implemented"));
  }
  async createUser(user: InsertUser) {
    return Promise.reject(new Error("Not implemented"));
  }

  async createContactSubmission(submission: InsertContactSubmission) {
    const doc = new ContactSubmissionModel(submission);
    await doc.save();
    // Append to Google Sheet
    await appendToGoogleSheet({
      ...submission,
      createdAt: doc.createdAt,
    });
    return {
      ...submission,
      id: doc._id.toString(),
      createdAt: doc.createdAt,
    };
  }

  async getContactSubmissions() {
    const docs = await ContactSubmissionModel.find().sort({ createdAt: -1 });
    return docs.map(doc => ({
      id: doc._id.toString(),
      name: doc.name,
      email: doc.email,
      subject: doc.subject,
      message: doc.message,
      createdAt: doc.createdAt,
    }));
  }
}

// export const storage = new MemStorage();
export const storage = new MongoStorage();
