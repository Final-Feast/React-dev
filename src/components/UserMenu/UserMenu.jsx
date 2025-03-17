import style from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div className={style.userMenu}>
      <div className={style.userContainer}>
        <button type="UserName" className={style.button}>Username</button>
        <button type="Logout" className={style.button}>Logout</button>
      </div>
    </div>
  );
};

export default UserMenu; 
