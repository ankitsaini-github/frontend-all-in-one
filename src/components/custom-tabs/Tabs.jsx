import React, { useState } from 'react'

import styles from './Tabs.module.css'

const Tabs = ({data}) => {
  const [selected, setSelected] = useState(0)
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Custom Tabs</h3>
      <div className={styles.container}>
        <div className={styles.btngroup}>
          {
            data && data.map((item,index)=><button className={styles.tabbtn} style={{backgroundColor: index===selected?'brown':''}} onClick={()=>setSelected(index)}>{item.label}</button>)
          }
        </div>
        <TabItem content={data[selected].content}/>
      </div>
    </div>
  )
}

const TabItem = ({content})=>{

  return(
    <div className={styles.content} dangerouslySetInnerHTML={{__html: content}}></div>
  )
}

export default Tabs