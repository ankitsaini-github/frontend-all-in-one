import React, { useState } from 'react'

import styles from './TreeMenu.module.css'

const MenuList = ({list=[]})=>{
  return(
    <ul className={styles.list}>
          {list && list.length>0
            ? list.map((item,index)=> <MenuItem item={item} key={index}/> )
            : <p>No Menu Item Found !</p>
          }
        </ul>
  )
}

const MenuItem = ({item}) => {
  const [displayChildren, setDisplayChildren] = useState({})

  const handleToggleChildren = (label)=>{
    setDisplayChildren({
      ...displayChildren,
      [label]: !displayChildren[label],
    });
  }
  return(
    <li>
      <div className={styles.item}>
        <p>{item.label}</p>
        {item && item.children && item.children.length>0
          ? (<span onClick={() => handleToggleChildren(item.label)}>
              {displayChildren[item.label] ? '-':'+'}
            </span>)
          : null
        }
      </div>
      {
        item && item.children && item.children.length>0 && displayChildren[item.label]
        ? <MenuList list={item.children} />
        : null
      }
    </li>
  )
}
const TreeMenu = ({menuList=[]}) => {

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Tree View Menu</h3>
      <div className={styles.container}>
        <MenuList list={menuList}/>
      </div>
    </div>
  )
}

export default TreeMenu