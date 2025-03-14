import DiaryProductsListItem from './DiaryProductsListItem';
import styles from './DiaryProductsList.module.css';

const DiaryProductsList = ({ products, onDeleteProduct }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return;
  }

  return (
    <ul className={styles.productItem}>
      {products.map((product) => (
        <DiaryProductsListItem
          key={product.id}
          product={product}
          onDelete={onDeleteProduct}
        />
      ))}
    </ul>
  );
};

export default DiaryProductsList;
