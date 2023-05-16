import React, { useContext, useEffect } from "react";
import styles from "./faq.module.css";
import { useState } from "react";
import Question from "./Question";
import { UserContext } from "../../context/UserContext";
import socket, { connect } from "../../utils/socket";
import axios from "axios";
import { getFaq } from "../../utils/requests";

const Faq = ({ lecture, course }) => {
  const { currentUser } = useContext(UserContext);
  const [session, setSession] = useState();

  const [questions, setQuestions] = useState();

  const [newHeading, setNewHeading] = useState("");
  // const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    loadFaq(lecture, course);
  }, [lecture, course]);

  const loadFaq = (lecture, course) => {
    getFaq("63bc26feda625a2ab6814d92", lecture.id).then((faq) => {
      setQuestions(faq);
      setNewHeading("");
    });
  };

  const answerHandler = (answer) => {
    console.log("Question Answered: " + answer);
  };

  const newQuesHandler = () => {
    axios.post(process.env.REACT_APP_SOCKET_BACKEND + "/doubt", {
      doubt: {
        course: "63bc26feda625a2ab6814d92",
        question: newHeading,
        lecture: lecture.id,
      },
      session: session,
    });
  };

  // console.log(questions);

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
      console.log("User connected: " + user.email);
    });

    socket.on("new doubt", (doubt) => {
      console.log("New Doubt added: ", doubt);
      loadFaq(lecture, course);
    });

    if (currentUser) {
      console.log(currentUser.email);
      connect(currentUser.email);
    }
  }, [currentUser]);

  // console.log(session);

  return questions ? (
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
          questions.map((q, i) => (
            <Question question={q} key={i} onAnswer={answerHandler} />
          ))
        ) : (
          <>Loading...</>
        )}
      </div>
      <form
        className={styles.ask}
        onSubmit={(e) => {
          e.preventDefault();
          newQuesHandler();
        }}
      >
        <h3>STILL HAVE ANY DOUBT?</h3>
        <input
          type="text"
          placeholder="Write a heading ..."
          value={newHeading}
          onChange={(e) => setNewHeading(e.target.value)}
        />
        <button type="submit">Post a Doubt</button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default Faq;
