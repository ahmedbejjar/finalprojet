import dotenv from 'dotenv';
import path from 'path';

// Construct the absolute path to the .env file
const envPath = path.resolve(__dirname, './models/.env');

// Load environment variables synchronously
const result = dotenv.config({ path: envPath });
if (result.error) {
  console.error('Error loading .env file:', result.error);
  // Handle the error gracefully, e.g., provide default values or terminate the application
  process.exit(1);
}

// Export the variables
export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
};

console.log("db", process.env.MONGODB_URL);
