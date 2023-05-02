import React from "react";
import styles from "./faq.module.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Question = ({ question, className, questionClassName, onAnswer }) => {
  const [open, setOpen] = useState();
  const [answer, setAnswer] = useState("");
  const ansRef = useRef();

  useEffect(() => {
    if (open) {
      ansRef.current.style.maxHeight = ansRef.current.scrollHeight + 30 + "px";
    } else {
      ansRef.current.style.maxHeight = 0 + "px";
    }
  }, [open]);

  return (
    <div
      className={`${styles.quesCont} ${open ? styles.open : ""} ${className}`}
    >
      <div
        className={styles.question}
        onClick={() => {
          setOpen((old) => !old);
        }}
      >
        <span>{question.question}</span>
        <svg
          width="16"
          height="11"
          viewBox="0 0 16 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.45812 1.20817L14.8748 6.62484C15.5345 7.28456 15.6817 8.03942 15.3165 8.88942C14.9512 9.73942 14.3005 10.1651 13.3644 10.1665L2.63521 10.1665C1.69771 10.1665 1.04632 9.74081 0.681042 8.88942C0.315764 8.03803 0.463679 7.28317 1.12479 6.62484L6.54146 1.20817C6.74979 0.999835 6.97549 0.843589 7.21854 0.739422C7.4616 0.635255 7.72201 0.58317 7.99979 0.58317C8.27757 0.58317 8.53799 0.635255 8.78104 0.739422C9.0241 0.843589 9.24979 0.999835 9.45812 1.20817Z"
            fill="#008D24"
          />
        </svg>
      </div>
      <div className={styles.answers} ref={ansRef}>
        {question.answers.map((ans, j) => (
          <div key={j} className={styles.ansMain}>
            <div className={styles.ansHeader}>
              <span>{ans.user}</span>
              <span>{ans.time}</span>
            </div>
            <div className={styles.ansCont}>{ans.answer}</div>
          </div>
        ))}
        <div className={styles.answer}>
          <textarea
            type="text"
            placeholder="Your Answer ..."
            value={answer}
            onClick={(e) => setAnswer(e.target.value)}
          />
          <button onClick={() => onAnswer(answer)}>Answer</button>
        </div>
      </div>
    </div>
  );
};

export default Question;
