// test-gemini.js
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config(); 

// Replace with your Gemini API key
const GEMINI_API_KEY = process.env.GOOGLE_API_KEY;



// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Function to test the Gemini API
const testGemini = async () => {
  try {
    // Get the generative model (e.g., 'gemini-pro')
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Send a test prompt
    const prompt = 'Hello, Gemini! Can you tell me a joke?';
    const result = await model.generateContent(prompt);
    const response = await result.response;

    // Log the response
    console.log('Gemini API Response:', response.text());
  } catch (error) {
    console.error('Error testing Gemini API:', error);
  }
};

// Run the test
testGemini();