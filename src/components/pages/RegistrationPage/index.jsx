
import RegistrationForm from "../../auth/RegistrationForm/RegistrationForm";
import Nav from '../../Navigation/HomeNav.jsx';
import Background from "../../Background/index.jsx";
import style from "./index.module.css";


export default function RegistrationPage() {
  return (
      <div  className={style.App}>
      <Background className={style.background}/>
      <Nav />

      <RegistrationForm />
    </div>
  );
}
