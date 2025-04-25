import { useState, useEffect } from "react";
import styles from "./DiaryAddProductForm.module.css";
import DiaryAddProductForm from "./DiaryAddProductForm";
import DiaryAddProductFormMobile from "./DiaryAddProductFormMobile";

const DiaryAddProduct = ({ onAddProduct }) => {

  return (
    <div>
      <DiaryAddProductForm />
    </div>
  );
};

export default DiaryAddProduct;
