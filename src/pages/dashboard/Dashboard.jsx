import React from "react";
import styles from "./dashboard.module.css";
import Navbar from "../../components/navbar/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const fname = window.localStorage.getItem("firstname");
  const courses = [
    {
      title: "Course 1",
      author: "John Doe",
      progress: 0.25,
      rating: 4.3,
      id: 1,
    },
    {
      title: "Course 2",
      author: "John Doe",
      progress: 0.25,
      rating: 4.3,
      id: 2,
    },
    {
      title: "Course 3",
      author: "John Doe",
      progress: 0.25,
      rating: 4.3,
      id: 3,
    },
  ];
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = window.localStorage.getItem("access_token");
    if (!access_token) navigate("/");
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>Dashboard</h1>
          <div className={styles.intro}>
            <h2>Hi {fname}!</h2>
            <p>
              You have complete 5 lesson in last day. Start your learning today
            </p>
          </div>
          <div className={styles.courses}>
            <h2>My Courses</h2>
            <div className={styles.courseList}>
              {courses.map((course) => (
                <div className={styles.course}>
                  <div className={styles.title}>
                    <h3>{course.title}</h3>
                    <span>{course.author}</span>
                  </div>
                  <div className={styles.progress}>
                    {course.progress * 100}%
                    <div className={styles.progressBar}>
                      <div style={{ width: `${course.progress * 100}%` }} />
                    </div>
                  </div>
                  <div className={styles.rating}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    {course.rating}
                  </div>
                  <button
                    onClick={() => {
                      navigate("/course/" + course.id);
                    }}
                  >
                    View Course
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.sidebar}>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
