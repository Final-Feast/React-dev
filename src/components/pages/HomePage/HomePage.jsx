import Nav from '../../Navigation/HomeNav.jsx';
import CalculateForm from '../../CalculateForm/CalculateForm.jsx';
import style from './HomePage.module.css';
import Background from '../../Background/index.jsx';

const HomePage = () => {
    return (
        <div className={style.App} id="App">
            
        <Background />

        <Nav />
        <CalculateForm />
        </div>
    );
};
export default HomePage;
