import { useState, useEffect } from "react";
import styles from "./DiaryAddProductForm.module.css";
import DiaryAddProductForm from "./DiaryAddProductForm";
import DiaryAddProductFormMobile from "./DiaryAddProductFormMobile";

const DiaryAddProduct = ({ onAddProduct }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <DiaryAddProductForm />
    </div>
  );
};

export default DiaryAddProduct;
