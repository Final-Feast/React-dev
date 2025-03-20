import { useState, useEffect } from 'react';
import styles from './DiaryAddProductForm.module.css';
import DiaryAddProductForm from './DiaryAddProductForm';
import DiaryAddProductFormMobile from './DiaryAddProductFormMobile';

const DiaryAddProduct = ({ onAddProduct }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // **Eksik olan handleClose fonksiyonu eklendi**
  const handleClose = () => setIsModalOpen(false);

  return (
    <div>
      {isMobile ? (
        <>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={() => setIsModalOpen(true)}>
              +
            </button>
          </div>

          {isModalOpen && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={handleClose}>
                  X
                </button>
                <DiaryAddProductFormMobile onAddProduct={onAddProduct} onClose={handleClose} />
              </div>
            </div>
          )}
        </>
      ) : (
        <DiaryAddProductForm onAddProduct={onAddProduct} />
      )}
    </div>
  );
};

export default DiaryAddProduct;
