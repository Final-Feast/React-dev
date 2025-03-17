import React from "react";
import { useLocation } from "react-router-dom";
import DiaryNav from "../../Navigation/DiaryNav";
import CalculatorPageForm from "../../CalculatorPageForm/CalculatorPageForm";
import style from "./CalculatorPage.module.css";
import Background from '../../Background/index.jsx';



const CalculatorPage = () => {
  const location = useLocation();

  return (
    <div className={style.CalculatorPageContainer}>
      <Background />
      <div className={style.diarynav}>  
        <DiaryNav isDiaryPage={location.pathname === "/calculator"} />
      </div>
      <div className={style.diaryform}>
        <CalculatorPageForm  className={style.calculateBox}/>
      </div>
    </div>
  );
};

export default CalculatorPage;
