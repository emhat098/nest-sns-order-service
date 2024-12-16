import * as AWS from 'aws-sdk'; // Import the AWS SDK

// Configure the AWS SDK
AWS.config.update({
  region: process.env.AWS_REGION, // AWS region, e.g., "us-east-1"
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Your AWS Access Key ID
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Your AWS Secret Access Key
});

// Initialize the SNS client
export const SNS = new AWS.SNS();
