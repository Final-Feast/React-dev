
import style from "./ProductForm.module.css";
import DiaryNav from "../Navigation/DiaryNav";
import DiaryAddProductForm from "../Diary/DiaryAddProductForm";

const ProductForm = () => {

  return (
   <div className={style.container}>

            <DiaryNav />
            <DiaryAddProductForm />


    </div>
  );
};

export default ProductForm;
