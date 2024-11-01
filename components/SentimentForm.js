// components/SentimentForm.js
import { useState } from 'react';
import styles from "@/styles/Card.module.css";

const SentimentForm = () => {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [confidence, setConfidence] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/sentiment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    setSentiment(data.sentiment);
    setConfidence(data.confidence);
  };

  return (
    <div className={styles.card}>
      <h1>Sentiment Analysis Tool</h1>
      <div className={styles.inputField}>
        <input 
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)} 
          required />
        <label>Enter text to analyze sentiment</label>
      </div>
      <button onSubmit={handleSubmit}>Analyze Sentiment</button>
      {sentiment && <p>Sentiment: {sentiment}</p>}
      {confidence && <p>Confidence: {(confidence * 100).toFixed(2)}%</p>}
    </div>
  );
};

export default SentimentForm;
