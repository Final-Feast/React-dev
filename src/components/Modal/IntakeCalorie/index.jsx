import { useEffect } from "react";
import style from "./index.module.css";
import { useNavigate } from "react-router-dom";
import closeVektor from "../../../assets/svg/close-vektor.svg";
import backButton from "../../../assets/svg/backButton.svg";


const Modal = ({ result, onClose }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose(); 
            }
        };

        document.addEventListener("keydown", handleKeyDown); // Event listener ekle

        return () => {
            document.removeEventListener("keydown", handleKeyDown); 
        };
    }, [onClose]);

    const handleButtonClick = () => {
        navigate("/login");
    };

    return (
        <div className={style.overlay} onClick={onClose}>

            <div className={style.modal} onClick={(e) => e.stopPropagation()}>
            <img src={closeVektor} alt="Close" width="12" height="12" className={style.close} onClick={onClose}/>
            <div className={style.backButton}>
                <img src={backButton} alt="Back" width="12" height="12" className={style.back} onClick={onClose}/> 
            </div>

                
                <h2 className={style.title}>Your recommended daily calorie intake is</h2>
                <p className={style.text}>{result} kcal</p>
                <p className={style.list}> {/*  çizgi */} </p>
                    <p className={style.listText}>Foods you should not eat</p>

                    {/* list */}

                    <button className={style.button} type="submit" onClick={handleButtonClick}>
                                Start losing weight
                            </button>
            </div>
            
            
        </div>
    );
};

export default Modal;
