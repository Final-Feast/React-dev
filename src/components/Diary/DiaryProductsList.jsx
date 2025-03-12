import DiaryProductsListItem from './DiaryProductsListItem';

const DiaryProductsList = ({ products, onDeleteProduct }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <p>Let's add some products!</p>; // ✅ Eğer boşsa hata yerine mesaj göster
  }

  return (
    <ul>
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
