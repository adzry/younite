// API configuration and methods will be implemented here
export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3001';

export const api = {
  // Chat methods
  sendMessage: async (message) => {
    console.log('Sending message:', message);
    // TODO: Implement actual API call
    return { success: true, response: 'This is a mock response' };
  },

  // User methods
  login: async (credentials) => {
    // TODO: Implement login API
    return { success: true, user: { id: 1, name: 'Test User' } };
  },

  // Other API methods will be added here
};
