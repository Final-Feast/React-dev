import React from "react";
import CalculateForm from "../CalculateForm/CalculateForm";
import style from "./CalculatorPageForm.module.css";
import DiarySummary from "../DiaryForm/DiarySummary"; 


const CalculatorPageForm = () => {

  return (
    <div className={style.PageContainer}>
        <div className={style.container}>
          <div className={style.calculateBox}>
          <CalculateForm  className={style.calculate}/>
          </div>
          <div className={style.summaryContainer}>
          <DiarySummary className={style.summary} selectedDate={new Date()}  />
          </div>

        </div>
    </div>
  );
};

export default CalculatorPageForm;
