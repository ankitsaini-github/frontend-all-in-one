import React, { useEffect, useState } from 'react'

import styles from './RandomColor.module.css'

const RandomColor = () => {
  const [type, setType] = useState('hex');
  const [color, setColor] = useState('#abcdef')

  useEffect(() => {
    handleRandom()
  }, [type])
  
  const handleRandom = ()=>{
    if(type==='hex'){
      const hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
      let hexcode = '#'
      for(let i=0;i<6;i++){
        hexcode+= hex[Math.floor(Math.random() * hex.length)]
      }
      setColor(hexcode)
      // console.log(hexcode)
    }else
    if(type==='rgb'){
      const red=Math.floor(Math.random() * 255)
      const green=Math.floor(Math.random() * 255)
      const blue=Math.floor(Math.random() * 255)
      
      setColor(`rgb(${red},${green},${blue})`)
    }
  }

  const handleTypeChange = (newType) => {
    setType(newType);
    handleRandom();
  };

  return (
    <div className={`${styles.container}`} style={{background:color}}>
      <h2 className={styles.heading}>Random Color Generator</h2>
      <button onClick={()=>handleTypeChange('hex')}>Generate Random HEX Color</button>
      <button onClick={()=>handleTypeChange('rgb')}>Generate Random RGB Color</button>
      {/* <button onClick={handleRandom}>Generate Random Color</button> */}
      <div className={styles.infobox}>
        <h3>Type : {type}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default RandomColor