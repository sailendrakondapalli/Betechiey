import React, { useState } from 'react';
import './Feedback.css';

const Feedback = ({ feedbacks, addFeedback }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment && rating > 0) {
      addFeedback({
        name,
        comment,
        rating,
        date: new Date().toLocaleDateString()
      });
      setName('');
      setComment('');
      setRating(0);
      alert('Thank you for your feedback!');
    } else {
      alert('Please fill all fields and select a rating');
    }
  };

  const averageRating = feedbacks.length > 0
    ? (feedbacks.reduce((sum, fb) => sum + fb.rating, 0) / feedbacks.length).toFixed(1)
    : 0;

  return (
    <section id="feedback" className="feedback">
      <div className="container">
        <h2>Client Feedback</h2>
        <p className="section-subtitle">
          What our clients say about us
        </p>

        {feedbacks.length > 0 && (
          <div className="rating-summary">
            <div className="average-rating">
              <span className="rating-number">{averageRating}</span>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={star <= Math.round(averageRating) ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <p>Based on {feedbacks.length} review{feedbacks.length !== 1 ? 's' : ''}</p>
            </div>
          </div>
        )}

        <div className="feedback-content">
          <div className="feedback-form-container">
            <h3>Leave Your Feedback</h3>
            <form onSubmit={handleSubmit} className="feedback-form">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <textarea
                placeholder="Your Feedback"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="4"
                required
              />
              <div className="rating-input">
                <label>Rating:</label>
                <div className="stars-input">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={star <= (hoveredRating || rating) ? 'star filled' : 'star'}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <button type="submit" className="submit-button">Submit Feedback</button>
            </form>
          </div>

          <div className="feedback-list">
            <h3>Recent Reviews</h3>
            {feedbacks.length === 0 ? (
              <p className="no-feedback">No feedback yet. Be the first to leave a review!</p>
            ) : (
              <div className="feedback-items">
                {feedbacks.slice().reverse().map((feedback) => (
                  <div key={feedback.id} className="feedback-item">
                    <div className="feedback-header">
                      <strong>{feedback.name}</strong>
                      <span className="feedback-date">{feedback.date}</span>
                    </div>
                    <div className="feedback-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className={star <= feedback.rating ? 'star filled' : 'star'}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="feedback-comment">{feedback.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
