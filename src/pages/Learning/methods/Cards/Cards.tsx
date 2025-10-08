import { type FC, useState } from "react";
import styles from "./Cards.module.scss";

const Cards: FC = () => {
  const [cards, setCards] = useState<
    Array<{ question: string; answer: string }>
  >([
    {
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces.",
    },
    {
      question: "What is a component?",
      answer: "Reusable pieces of UI in React.",
    },
  ]);
  return (
    <div>
      <h2>View all cards</h2>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <p>
            <strong>Q:</strong> {card.question}
          </p>
          <p>
            <strong>A:</strong> {card.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
