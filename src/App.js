import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const savedFeedbacks = localStorage.getItem('feedbacks');
    if (savedFeedbacks) {
      setFeedbacks(JSON.parse(savedFeedbacks));
    }
  }, []);

  const addFeedback = (feedback) => {
    const newFeedbacks = [...feedbacks, { ...feedback, id: Date.now() }];
    setFeedbacks(newFeedbacks);
    localStorage.setItem('feedbacks', JSON.stringify(newFeedbacks));
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Clients />
      <Feedback feedbacks={feedbacks} addFeedback={addFeedback} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
