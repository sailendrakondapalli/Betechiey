import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { getFeedbacks, addFeedback } from './api/feedbackAPI';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    loadFeedbacks();
    // Refresh feedbacks every 30 seconds to get new ones
    const interval = setInterval(loadFeedbacks, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadFeedbacks = async () => {
    const data = await getFeedbacks();
    setFeedbacks(data);
  };

  const handleAddFeedback = async (feedback) => {
    await addFeedback(feedback);
    await loadFeedbacks(); // Reload to show new feedback
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Clients />
      <Feedback feedbacks={feedbacks} addFeedback={handleAddFeedback} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
