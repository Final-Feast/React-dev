import React from "react";
import { useLocation } from "react-router-dom";
import DiaryNav from "../../Navigation/DiaryNav";
import CalculateForm from "../../CalculateForm/CalculateForm";
import style from "./CalculatorPage.module.css";
import DiarySummary from "../../DiaryForm/DiarySummary"; 


const DiaryPage = () => {
  const location = useLocation();

  return (
    <div className={style.PageContainer}>
      <DiaryNav isDiaryPage={location.pathname === "/calculator"} />
        <div className={style.container}>

          <CalculateForm  className={style.calculateBox}/>
          <DiarySummary className={style.summaryContainer} selectedDate={new Date()}  />

        </div>
        
      
      
    </div>
  );
};

export default DiaryPage;
