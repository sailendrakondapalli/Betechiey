// API to store and retrieve feedbacks
// Works with Vercel serverless functions

const API_BASE = '/api/feedbacks';

export const getFeedbacks = async () => {
  try {
    const response = await fetch(API_BASE);
    if (response.ok) {
      const data = await response.json();
      return data.feedbacks || [];
    }
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
  }
  
  // Fallback to localStorage for local development
  const local = localStorage.getItem('feedbacks');
  if (local) {
    return JSON.parse(local);
  }
  return [];
};

export const addFeedback = async (feedback) => {
  try {
    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedback)
    });

    if (response.ok) {
      const data = await response.json();
      return data.feedback;
    }
  } catch (error) {
    console.error('Error adding feedback:', error);
  }

  // Fallback to localStorage
  const newFeedback = {
    ...feedback,
    id: Date.now(),
    timestamp: new Date().toISOString()
  };
  
  const local = localStorage.getItem('feedbacks');
  const feedbacks = local ? JSON.parse(local) : [];
  feedbacks.unshift(newFeedback);
  localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  
  return newFeedback;
};
