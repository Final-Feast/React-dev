import React from "react";
import styles from "./Loading.module.css";
const Loading = ({ size = "lg" }) => {
  return (
    <div className={styles.spinnerContainer}>
      <svg
        className={`${styles.spinner} ${styles[size]}`}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className={styles.spinnerCircle}>
          <circle className={styles.spinnerPath} cx="50" cy="50" r="40" />
        </g>
      </svg>
    </div>
  );
};

export default Loading;
