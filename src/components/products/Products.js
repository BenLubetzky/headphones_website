import React from 'react'
import "./products.css";
import { useSelector } from 'react-redux';
import Product from '../product/Product';

function Products() {

  const products = useSelector(store=>store.products.products);

  return (
    <>
    <div className='productsContainer'>
      {products.map(p=>(
        <Product key={p.id} id={p.id} name={p.name} price={p.price} url={p.url}/>
      ))}   
    </div>
    </>
  )
}

export default Products