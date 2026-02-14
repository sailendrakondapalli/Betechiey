// Simple API to store and retrieve feedbacks
// Using JSONBin.io for shared storage

// Shared storage bin - all users can read/write
const SHARED_BIN_ID = '67b5e8f5ad19ca34f8e6c8a5';
const SHARED_API_KEY = '$2a$10$8vqQYZGZQZGZQZGZQZGZQOeKqYZGZQZGZQZGZQZGZQZGZQZGZQZGZQ';

let feedbackCache = [];

export const getFeedbacks = async () => {
  try {
    // Try to fetch from server
    const response = await fetch(`https://api.jsonbin.io/v3/b/${SHARED_BIN_ID}/latest`, {
      headers: {
        'X-Master-Key': SHARED_API_KEY
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      feedbackCache = data.record.feedbacks || [];
      return feedbackCache;
    }
  } catch (error) {
    console.log('Using local cache');
  }
  
  // Fallback to localStorage
  const local = localStorage.getItem('feedbacks');
  if (local) {
    feedbackCache = JSON.parse(local);
  }
  return feedbackCache;
};

export const addFeedback = async (feedback) => {
  const newFeedback = {
    ...feedback,
    id: Date.now(),
    timestamp: new Date().toISOString()
  };
  
  feedbackCache = [newFeedback, ...feedbackCache];
  
  // Save to localStorage as backup
  localStorage.setItem('feedbacks', JSON.stringify(feedbackCache));
  
  try {
    // Try to save to server
    await fetch(`https://api.jsonbin.io/v3/b/${SHARED_BIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': SHARED_API_KEY
      },
      body: JSON.stringify({ feedbacks: feedbackCache })
    });
  } catch (error) {
    console.log('Saved locally only');
  }
  
  return newFeedback;
};
