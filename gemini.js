const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const interpretCommand = async (command) => {
  try {
    const prompt = `Interpret the following command for a notepad application and return the action (add, delete, search, update) along with the title and content (if applicable) in the following format:
    - For add: "add title: \"<title>\" content: \"<content>\""
    - For delete: "delete title: \"<title>\""
    - For search: "search title: \"<title>\""
    - For update: "update title: \"<title>\" content: \"<new content>\""
    
    Command: ${command}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error interpreting command:', error);
    return null;
  }
};

module.exports = { interpretCommand };
