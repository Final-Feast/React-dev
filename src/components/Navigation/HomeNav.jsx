import logo from "../../assets/svg/logo/slimMomLogo.svg";
import logoMobile from "../../assets/svg/logo/slimMomLogoMobile.svg";
import logoText from "../../assets/svg/logo/slimMomLogoText.svg";
import style from "./HomeNav.module.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();


  return (
    <div className={style.container} >
        <div className={style.logoContainer}>
            <img src={logoMobile} alt="Slim Mom Logo" width="46" height="44" className={style.logoMobile} onClick={() => navigate("/")}/>
            <img src={logoText} alt="Slim Mom Logo" width="105" height="44" className={style.logoText} onClick={() => navigate("/")}/>
        </div>

      <img src={logo} alt="Slim Mom Logo" width="167" height="66" className={style.logo} onClick={() => navigate("/")}/>

      <div className={style.nav}>
      <button
          type="button"
          className={`${style.loginButton} ${
            location.pathname === "/login" ? style.active : ""
          }`}
          onClick={() => navigate("/login")}
        >
          LOG IN
        </button>
        <button
          type="button"
          className={`${style.loginButton} ${
            location.pathname === "/register" ? style.active : ""
          }`}
          onClick={() => navigate("/register")}
        >
          REGISTRATION
        </button>
       
      </div>
      
    </div>
  );
};

export default Nav;
