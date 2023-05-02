import React from "react";
import styles from "./lecture.module.css";
import Faq from "../../components/faq/Faq";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Details = ({ lecture, course }) => {
  const options = [
    { name: "Q&A", component: <Faq lecture={lecture} course={course} /> },
    { name: "Resources", component: <Faq /> },
    { name: "Announcements", component: <Faq /> },
    { name: "Reviews", component: <Faq /> },
  ];
  const [open, setOpen] = useState(options[0].name);
  return (
    <div>
      <div className={styles.tabs}>
        <div className={styles.tab}>
          <SearchIcon />
        </div>
        {options.map((option, i) => (
          <div
            key={i}
            className={`${styles.tab} ${
              open === option.name ? styles.open : ""
            }`}
            onClick={() => {
              setOpen(option.name);
            }}
          >
            {option.name}
          </div>
        ))}
      </div>
      <div className={styles.content}>{options[0].component}</div>
    </div>
  );
};

export default Details;
