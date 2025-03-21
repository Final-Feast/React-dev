import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/operations';
import { selectProducts, selectIsLoading, selectError } from '../../redux/products/selectors';

import style from './ProductForm.module.css';
import DiaryNav from '../Navigation/DiaryNav';
import DiaryAddProductForm from '../Diary/DiaryAddProductForm';
import DiaryProductsList from '../Diary/DiaryProductsList';

const ProductForm = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <DiaryNav />
      <DiaryAddProductForm />
      
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      <DiaryProductsList products={products} />
    </div>
  );
};

export default ProductForm;
