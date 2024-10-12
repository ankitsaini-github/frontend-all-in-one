import React, { useState } from "react";

import styles from "./Accordian.module.css";

// import data from "./accordianData";


const Accordian = ({data}) => {
  const [selected, setSelected] = useState();
  const [multiSelect, setmultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const toggleHandler = () => {
    setSelected(null)
    setMultiple([])
    setmultiSelect((prev) => !prev)
  }

  const handleSelect = (id) => {
    if (multiSelect) {
      let cpyMutiple = [...multiple];
      const index = cpyMutiple.indexOf(id);

      // console.log(index);
      if (index === -1) cpyMutiple.push(id);
      else cpyMutiple.splice(index, 1);

      setMultiple(cpyMutiple);
    } else {
      setSelected((prev) => {
        return id != prev ? id : null;
      });
    }
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Accordian</h2>
      <button onClick={toggleHandler}>
        {multiSelect ? "Disable Multiselect" : "Enable Multiselect"}
      </button>
      <div className={styles.accordian}>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className={styles.item} key={item.id}>
              <div
                className={styles.title}
                onClick={() => handleSelect(item.id)}
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                <div className={styles.content}>{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found !</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
