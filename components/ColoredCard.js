import styles from "@/styles/Card.module.css";

const ColoredCard = ({ sentiment, confidence }) => {
  const sentimentClass = sentiment.toLowerCase() === 'positive' 
    ? styles.positive : sentiment.toLowerCase() === 'negative' 
    ? styles.negative : styles.neutral;
  return (
    <div className={`${styles.sentiment} ${sentimentClass}`}>
      {sentiment && <p>Sentiment: <span className={sentimentClass}>{sentiment}</span></p>}
      {confidence && <p>Confidence: {confidence}%</p>}
    </div>
  );
};

export default ColoredCard;
