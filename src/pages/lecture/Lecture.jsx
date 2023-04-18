import React from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./lecture.module.css";
import Details from "./Details";
import { useState } from "react";

const Lecture = () => {
  const [lectures, setLectures] = useState([
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 1." },
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 2." },
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 3." },
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 4." },
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 5." },
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 6." },
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 7." },
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 8." },
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 9." },
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 10." },
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 11." },
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 12." },
  ]);
  const [selectedLec, setSelectedLec] = useState(lectures[0]);

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.header}>
            <h2>{selectedLec.title}</h2>
          </div>
          <div className={styles.video}></div>
          <Details lecture={selectedLec} />
        </div>
        <div className={styles.right}>
          <div className={styles.header}>Lorem ipsum</div>
          <div className={styles.lectureList}>
            {lectures.map((lecture) => (
              <div
                className={`${styles.lectureItem} ${
                  selectedLec === lecture ? styles.selected : ""
                }`}
                onClick={() => {
                  setSelectedLec(lecture);
                }}
              >
                {lecture.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lecture;
