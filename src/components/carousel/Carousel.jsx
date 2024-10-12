import React, { useEffect, useState } from 'react'

import styles from './Carousel.module.css';

const Carousel = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Carousel</h3>
      <div className={styles.container}>
        <button onClick={handlePrev}>&lt;</button>
        <div className={styles.item}>
          <h4>{data[currentIndex].title}</h4>
          <img src={data[currentIndex].imgUrl} alt="" />
          <p>{data[currentIndex].description}</p>
        </div>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  )
}

export default Carousel