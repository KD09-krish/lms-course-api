import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./lecture.module.css";
import Details from "./Details";
import { useState } from "react";
import { getLectureList } from "../../utils/requests";
import { useParams } from "react-router";

const Lecture = () => {
  const { id } = useParams();
  const course = { id: 1 };
  const [lectures, setLectures] = useState();
  const [selectedLec, setSelectedLec] = useState();

  useEffect(() => {
    console.log(id);
    getLectureList(id).then((lectures) => setLectures(lectures));
  }, []);

  useEffect(() => {
    if (!lectures) return;
    setSelectedLec(lectures[0]);
  }, [lectures]);

  if (!lectures || !selectedLec) return <>Loading...</>;

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.header}>
            <h2>{selectedLec.title}</h2>
          </div>
          <div className={styles.video}></div>
          <Details lecture={selectedLec} course={course} />
        </div>
        <div className={styles.rightCont}>
          <div className={styles.right}>
            <div className={styles.header}>Lorem ipsum</div>
            <div className={styles.lectureList}>
              {lectures.map((lecture, i) => (
                <div
                  key={i}
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
      </div>
    </>
  );
};

export default Lecture;
