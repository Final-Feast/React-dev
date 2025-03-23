import React, { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./DiaryDateCalendar.module.css";

// Takvim SVG ikonu
import CalendarIcon from "../../assets/svg/calendar-1-1.svg";

const DiaryDateCalendar = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const calendarRef = useRef(null); // Ref for detecting clicks outside the calendar

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateChange(newDate);
  };

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  // Date formatting function
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  // Close calendar on pressing 'Esc' or clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.calendarContainer}>
      <p className={styles.selectedDate}>
        <strong>{formatDate(date)}</strong>
      </p>

      <button onClick={toggleCalendarVisibility} className={styles.calendarIcon}>
        <img src={CalendarIcon} alt="Takvim İkonu" width="20" height="20" />
      </button>

      {/* Takvim sadece isCalendarVisible true olduğunda görünür */}
      {isCalendarVisible && (
        <div ref={calendarRef}>
          <Calendar
            onChange={handleDateChange}
            value={date}
            locale="en-GB"
            className={styles.calendar}
          />
        </div>
      )}
    </div>
  );
};

export default DiaryDateCalendar;
