import { users, contactSubmissions, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, WithStringOrNumberId } from "@shared/schema";
import mongoose, { Schema, model, type Document } from "mongoose";

const MONGO_URI = "mongodb+srv://saw31221:FgRtoJMEw2yvfTzL@contactmessages.uvqhfe0.mongodb.net/?retryWrites=true&w=majority&appName=ContactMessages";
const DB_NAME = "FormSubmissions";
const COLLECTION_NAME = "People";

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
