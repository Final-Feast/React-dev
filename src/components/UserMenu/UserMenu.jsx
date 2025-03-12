import style from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div className={style.userMenu}>
      <div className={style.userContainer}>
        <button type="button" className={style.button}>Username</button>
        <button type="button" className={style.button}>Logout</button>
      </div>
    </div>
  );
};

export default UserMenu; 
