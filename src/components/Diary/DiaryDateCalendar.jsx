import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./DiaryDateCalendar.module.css";

// Takvim SVG ikonu
import CalendarIcon from "../../assets/svg/calendar-1-1.svg"; 

const DiaryDateCalendar = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateChange(newDate);
  };

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  return (
    <div className={styles.calendarContainer}>
      <p className={styles.selectedDate}>
        <strong>{date.toLocaleDateString()}</strong>
      </p>

      {/* Takvim ikonunu burada kullanıyoruz */}
      <button  onClick={toggleCalendarVisibility} className={styles.calendarIcon}>
        <img src={CalendarIcon} alt="Takvim İkonu" /> {/* SVG ikonu */}
      </button>

      {/* Takvim sadece isCalendarVisible true olduğunda görünür */}
      {isCalendarVisible && (
        <Calendar 
          onChange={handleDateChange} 
          value={date} 
          locale="en-GB"
        />
      )}
    </div>
  );
};

export default DiaryDateCalendar;
