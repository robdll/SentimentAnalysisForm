// components/SentimentForm.js
import { useState } from 'react';

const SentimentForm = () => {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');

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
  };

  return (
    <div>
      <h1>Sentiment Analysis Tool</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to analyze sentiment"
        />
        <button type="submit">Analyze Sentiment</button>
      </form>
      {sentiment && <p>Sentiment: {sentiment}</p>}
    </div>
  );
};

export default SentimentForm;
