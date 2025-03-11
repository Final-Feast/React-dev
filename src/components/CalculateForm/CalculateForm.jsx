import { useState } from "react";
import style from "./calculateForm.module.css";

const CalculateForm = () => {
    const [formData, setFormData ] = useState({
        height:"",
        age:"",
        currentWeight:"",
        desiredWeight:"",
        // bloodType:"", we dont need that for calcute calories
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });    
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data that sent to backend is:", formData);
    };

    return (
        <div className={style.container}>
            <h2 className={style.title}>Calculate your daily calorie intake right now</h2>
    
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.inputGroup}>
                    <div className={style.column1}>
                        <label className={style.label}>
                            <input
                                type="number"
                                name="height"
                                value={formData.height}
                                onChange={handleChange}
                                className={style.input}
                                placeholder="Height*"
                                required
                                id="height"
                            />
                        </label>
                        <label className={style.label}>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className={style.input}
                                placeholder="Age*"
                                required
                                id="age"
                            />
                        </label>
                        <label className={style.label}>
                            <input
                                type="number"
                                name="currentWeight"
                                value={formData.currentWeight}
                                onChange={handleChange}
                                className={style.input}
                                placeholder="Current weight*"
                                required
                                id="currentWeight"
                            />
                        </label>
                    </div>
    
                    <div className={style.column2}>
                        <label className={style.label}>
                            <input
                                type="number"
                                name="desiredWeight"
                                value={formData.desiredWeight}
                                onChange={handleChange}
                                className={style.input}
                                placeholder="Desired weight*"
                                required
                                id="desiredWeight"
                            />
                        </label>
    
                        <div className={style.bloodTypeGroup}>
                            <p className={style.bloodType}>Blood type*</p>
                            <legend className={style.radioGroup}>
                                {["A", "B", "AB", "O"].map((type) => (
                                    <label key={type} className={style.radioLabel}>
                                        <input
                                            type="radio"
                                            name="bloodType"
                                            value={type}
                                            checked={formData.bloodType === type}
                                            onChange={handleChange}
                                            className={style.radioInput}
                                            required
                                        />
                                        {type}
                                    </label>
                                ))}
                            </legend>
                        </div>
                    </div>
                </div>
            </form>
            
            <button className={style.button} type="submit">
                    Start losing weight
            </button>
        </div>
    );
    
};
export default CalculateForm;
