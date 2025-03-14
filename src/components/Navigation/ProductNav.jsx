import logo from "../../assets/svg/slimMomLogo.svg";
import logoMobile from "../../assets/svg/slimMomLogoMobile.svg";
import logoText from "../../assets/svg/slimMomLogoText.svg";
import style from "./ProductNav.module.css";
import { useNavigate } from "react-router-dom";
import modalMenu from "../../assets/svg/modal-menu-vektor.svg";
import UserMenu from "../UserMenu/UserMenu";

const ProductNav = () => {
  const navigate = useNavigate();

  return (
   <div className={style.container}>
             <div className={style.logoContainer}>
                 <div className={style.logoMobileContainer}>
                 <img src={logoMobile} alt="Slim Mom Logo" width="46" height="44" className={style.logoMobile} onClick={() => navigate("/")}/>
                 <img src={logoText} alt="Slim Mom Logo" width="105" height="44" className={style.logoText} onClick={() => navigate("/")}/>
                 </div>

                 <div className={style.userMenuContainer}>
                  <div className={style.userMenuTablet}>
                    <UserMenu />
                  </div>
              <div className={style.modalMenuContainer}>
                <img src={modalMenu} alt="Modal Menu Logo" width="18" height="12" className={style.modal}/>
              </div>
              </div>

              
             </div>
     
      <div className={style.nav}>

      <img src={logo} alt="Slim Mom Logo" width="167" height="66" className={style.logo} onClick={() => navigate("/")}/>


       
      </div>

     
      <div className={style.userMenu}>
            <UserMenu />
        </div>
    </div>
  );
};

export default ProductNav;
