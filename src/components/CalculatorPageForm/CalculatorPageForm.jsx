import React from "react";
import CalculateForm from "../CalculateForm/CalculateForm";
import style from "./CalculatorPageForm.module.css";
import DiarySummary from "../DiaryForm/DiarySummary"; 


const CalculatorPageForm = () => {

  return (
    <div className={style.PageContainer}>
        <div className={style.container}>
          <CalculateForm  className={style.calculateBox}/>
          <DiarySummary className={style.summaryContainer} selectedDate={new Date()}  />
        </div>
    </div>
  );
};

export default CalculatorPageForm;
