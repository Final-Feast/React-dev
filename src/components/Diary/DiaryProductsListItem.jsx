import styles from './DiaryProductsListItem.module.css';

const DiaryProductsListItem = ({ product, onDelete }) => {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{product.productName}</span>
      <span className={styles.amount}>{product.amount} g</span>
      <span className={styles.dailyRate}>{product.dailyRate}kcal</span>
      <button className={styles.button} onClick={() => onDelete(product.id)}>✖</button>
    </li>
  );
};

export default DiaryProductsListItem;
