import style from "./UserMenu.module.css";
import { useSelector } from "react-redux";

const UserMenu = () => {

  const userName = useSelector((state) => state.auth.user.name)

  return (
    <div className={style.userMenu}>
      <div className={style.userContainer}>
        <button type="UserName" className={style.button}>{userName}</button>
        <button type="Logout" className={style.button}>Logout</button>
      </div>
    </div>
  );
};

export default UserMenu; 
