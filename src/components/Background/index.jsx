// Background.jsx
import strawberry from '../../assets/svg/background/strawberry.svg';
import backshadow from '../../assets/svg/background/backshadow.svg';
import banana from '../../assets/svg/background/banana.svg';
import leaf from '../../assets/svg/background/leaf.svg';
import style from './index.module.css';

const Background = () => {
  return (
    <div className={style.background}>
      <img src={strawberry} alt="strawberry" width="286" height="279" className={style.strawberry} />
      <img src={backshadow} alt="backshadow" width="603" height="816" className={style.backshadow} />
      <img src={banana} alt="banana" width="773" height="552" className={style.banana} />
      <img src={leaf} alt="leaf" width="980" height="820" className={style.leaf} />
    </div>
  );
};

export default Background;
