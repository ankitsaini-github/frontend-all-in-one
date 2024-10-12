import React, { useState } from 'react'

import styles from './Rating.module.css'

const Rating = ({icon,max}) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState()

  const handleClick = (i)=>{
    setRating(i)
  }
  const handleMouseEnter=(i)=>{
    setHover(i)
  }
  const handleMouseLeave = ()=>{
    setHover(0)
  }
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Rating</h3>
      <div className={styles.container}>
        {
          [...Array(max)].map((_,index)=>{
            index+=1;
            return(
              <span
                key={index}
                className={`${styles.icon} ${index <= Math.max(rating,hover) ? styles.active : styles.inactive}`}
                onClick={() => handleClick(index)}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
              >{icon}</span>
            )
          })
        }
      </div>
      <div className={styles.result}>Rating : {rating}/{max}</div>
    </div>
  )
}

export default Rating