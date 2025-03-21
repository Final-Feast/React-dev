import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./index.module.css";

const DiaryModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`${style.modal} ${isOpen ? style.open : ""}`}>
      {/* <div className={style.buttonContainer}> */}
      <button 
              type="button" 
              className={`${style.button} ${location.pathname === "/diary" ? style.active : ""}`} 
              onClick={() => navigate("/diary")}>
                DIARY
                </button>
      <button 
              type="button" 
              className={`${style.button} ${location.pathname === "/calculator" ? style.active : ""}`} 
              onClick={() => navigate("/calculator")}>
                CALCULATOR
                </button>
      
      {/* </div> */}
        
    </div>
  );
};

export default DiaryModal;
