import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';

import ProductCard from './ProductCard';

const ProductList = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log('products=', products);
    const fetchProducts = async () => {
      const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
      console.log('response=', response.data);
      dispatch(setProducts(response.data));
    }
    useEffect(() => {
      fetchProducts();
    }, []);
  return (
    <div className='ui grid container'>
      <ProductCard/>
    </div>
  )
}

export default ProductList;