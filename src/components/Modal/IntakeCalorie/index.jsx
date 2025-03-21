import { useEffect } from "react";
import style from "./index.module.css";
import { useNavigate } from "react-router-dom";
import closeVektor from "../../../assets/svg/close-vektor.svg";
import backButton from "../../../assets/svg/backButton.svg";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../redux/products/productsSelectors";


const Modal = ({ result, onClose, formData }) => {

    const products = useSelector(selectProducts)

  const bloodTypes = {
    0: 4,
    AB: 3,
    B: 2,
    A: 1,
  };

  const isNotAllowed = products?.data.filter(
    (product) => product.groupBloodNotAllowed[bloodTypes[formData.bloodType]]
  );

  console.log(isNotAllowed)

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
    navigate("/diary");
  };

  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <img
          src={closeVektor}
          alt="Close"
          width="12"
          height="12"
          className={style.close}
          onClick={onClose}
        />
        <div className={style.backButton}>
          <img
            src={backButton}
            alt="Back"
            width="12"
            height="12"
            className={style.back}
            onClick={onClose}
          />
        </div>

        <h2 className={style.title}>
          Your recommended daily calorie intake is
        </h2>
        <p className={style.text}>{result} kcal</p>
        <p className={style.list}> {/*  çizgi */} </p>
        <p className={style.listText}>Foods you should not eat</p>

        {/* list */}

        <button
          className={style.button}
          type="submit"
          onClick={handleButtonClick}
        >
          Start losing weight
        </button>
      </div>
    </div>
  );
};

export default Modal;
