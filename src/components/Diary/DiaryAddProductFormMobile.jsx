import { useEffect } from "react";


const DiaryAddProductFormModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div  onClick={onClose}>
      <div  onClick={(e) => e.stopPropagation()}>
        <button  onClick={onClose}>
          ✖
          sadas
        </button>
        <div >{children}</div>
      </div>
    </div>
  );
};

export default DiaryAddProductFormModal;
