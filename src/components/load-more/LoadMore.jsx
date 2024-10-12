import React, { useEffect, useState } from 'react'

import styles from './LoadMore.module.css'

const apiUrl = 'https://dummyjson.com/products?limit=9&skip='

const Item = ({title,image}) => {
  // console.log('pppppp')
  return(
    <div className={styles.itemcard}>
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  )
}

const LoadMore = () => {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [])

  useEffect(() => {
    if(count>0)
    fetchProducts();
  }, [count])
  

  async function fetchProducts() {
    setLoading(true)
    try {
      const response = await fetch(`${apiUrl}${count===0?0:count*9}`)
      const data = await response.json();
      console.log(data)
      if(data.skip===0){
        setProducts(data.products)
      }else{
        setProducts(prevProducts => [...prevProducts, ...data.products]);
      }
      
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  
  const loadMoreHandler = ()=>{
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Load More Products</h3>
      <div className={styles.container}>
        {
          products && products.length>0 ? products.map((item)=>
            <Item 
              key={item.id}
              title={item.title}
              image={item.thumbnail}
            />
          )
          : <p>No Products!!!</p>
        }
      </div>
      {loading ? (
          <p>Loading...</p>
        ) : (
      <button onClick={loadMoreHandler}>Load More</button>
        )}
    </div>
  )
}

export default LoadMore