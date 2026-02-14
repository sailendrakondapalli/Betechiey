// Vercel Serverless Function for Feedbacks with MongoDB
import clientPromise from '../lib/mongodb';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db('betechiey');
    const collection = db.collection('feedbacks');

    if (req.method === 'GET') {
      // Get all feedbacks, sorted by newest first
      const feedbacks = await collection
        .find({})
        .sort({ timestamp: -1 })
        .limit(100)
        .toArray();
      
      res.status(200).json({ feedbacks });
      
    } else if (req.method === 'POST') {
      // Add new feedback
      const { name, comment, rating, date } = req.body;
      
      if (!name || !comment || !rating) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
      }

      const newFeedback = {
        name,
        comment,
        rating: Number(rating),
        date: date || new Date().toLocaleDateString(),
        timestamp: new Date(),
        createdAt: new Date()
      };

      const result = await collection.insertOne(newFeedback);
      
      // Return the inserted feedback with its ID
      const insertedFeedback = {
        ...newFeedback,
        id: result.insertedId.toString(),
        _id: result.insertedId
      };

      res.status(201).json({ 
        feedback: insertedFeedback,
        message: 'Feedback added successfully'
      });
      
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Database error', details: error.message });
  }
}
