import React from "react";
import CalculateForm from "../CalculateForm/CalculateForm";
import style from "./CalculatorPageForm.module.css";
import DiarySummary from "../DiaryForm/DiarySummary"; 


const CalculatorPageForm = () => {

  return (
    <div className={style.PageContainer}>
          <div className={style.calculateBox}>
          <CalculateForm/>
          </div>
          <div className={style.summaryContainer}>
          <DiarySummary selectedDate={new Date()}  />
          </div>

    </div>
  );
};

export default CalculatorPageForm;
