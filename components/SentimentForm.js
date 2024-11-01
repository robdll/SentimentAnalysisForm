// components/SentimentForm.js
import { useState } from 'react';
import styles from "@/styles/Card.module.css";

import ColoredCard from './ColoredCard';

const SentimentForm = () => {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [confidence, setConfidence] = useState(null);

  const handleSubmit = async (e) => {
    setSentiment(null);
    setConfidence(null);
    e.preventDefault();
    const response = await fetch('/api/sentiment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    console.log('data', data);
    setSentiment(data.sentiment);
    setConfidence((data.confidence * 100).toFixed(2));
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
      <button onClick={handleSubmit}>Analyze Sentiment</button>
      {sentiment && (<ColoredCard sentiment={sentiment} confidence={confidence} />)}
    </div>
  );
};

export default SentimentForm;
