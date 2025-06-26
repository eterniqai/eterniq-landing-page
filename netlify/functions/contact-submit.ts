import { Handler } from '@netlify/functions';
import { storage } from '../../server/storage';
import { insertContactSubmissionSchema } from '../../shared/schema';
import { z } from 'zod';

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: 'Method not allowed' })
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const validatedData = insertContactSubmissionSchema.parse(body);
    const submission = await storage.createContactSubmission(validatedData);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: submission.id })
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: 'Invalid form data',
          errors: error.errors
        })
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'Failed to submit contact form'
      })
    };
  }
}; 