import React, { useContext, useEffect } from "react";
import styles from "./faq.module.css";
import { useState } from "react";
import Question from "./Question";
import { UserContext } from "../../context/UserContext";
import socket, { connect } from "../../utils/socket";

const Faq = () => {
  const { currentUser } = useContext(UserContext);
  const [session, setSession] = useState();

  const [questions, setQuestions] = useState();

  const [newHeading, setNewHeading] = useState("");
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    setQuestions([
      {
        question:
          "1. Lorem ipsum dolor sit amet, consectetur adipiscing el. Lorem ipsum dolor sit amet, consectetur adipiscing el.",
        answers: [
          {
            user: "John",
            time: "15/04/23",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
          },
          {
            user: "Doe",
            time: "13/04/23",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
          },
        ],
      },
      {
        question:
          "1. Lorem ipsum dolor sit amet, consectetur adipiscing el. Lorem ipsum dolor sit amet, consectetur adipiscing el.",
        answers: [
          {
            user: "John",
            time: "15/04/23",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
          },
          {
            user: "Doe",
            time: "13/04/23",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
          },
        ],
      },
      {
        question:
          "1. Lorem ipsum dolor sit amet, consectetur adipiscing el. Lorem ipsum dolor sit amet, consectetur adipiscing el.",
        answers: [
          {
            user: "John",
            time: "15/04/23",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
          },
          {
            user: "Doe",
            time: "13/04/23",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
          },
        ],
      },
    ]);
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    // store session and user id
    socket.on("session", (session) => {
      console.log(session);
      setSession(session);
      // sessionID, userID
    });

    socket.on("user_connected", (user) => {
      console.log("User connected: " + user.username);
    });

    socket.on("doubt", (doubt) => {
      console("New Doubt added");
    });

    if (currentUser) {
      connect(currentUser.username);
    }
  }, [currentUser]);

  return (
    <div className={styles.container}>
      <h2>FAQ</h2>
      <div className={styles.selection}>
        <input type="text" placeholder="Search for a question..." />
        <select>
          <option value="recent">Recent</option>
          <option value="all">All</option>
        </select>
        <select>
          <option value="recent">Current Lecture</option>
          <option value="all">All Lectures</option>
        </select>
      </div>
      <div className={styles.quesList}>
        {questions ? (
          questions.map((q, i) => <Question question={q} key={i} />)
        ) : (
          <>Loading...</>
        )}
      </div>
      <form
        className={styles.ask}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <h3>STILL HAVE ANY DOUBT?</h3>
        <input
          type="text"
          placeholder="Write a heading ..."
          value={newHeading}
          onChange={(e) => setNewHeading(e.target.value)}
        />
        <textarea
          placeholder="Write a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Post a Doubt</button>
      </form>
    </div>
  );
};

export default Faq;
