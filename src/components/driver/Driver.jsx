import React from 'react'
import styles from './Driver.module.css';
import Drive from '../../images/drive.png'

const Driver = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src={Drive} alt="/" />
        </div>
        <div>
            <h2>Find the perfect car <span>to try before you buy</span></h2>
            <p>Make Sure Your To Select Perfect car For Your Journey</p>
            <button>Browse Cars</button>
        </div>
    </div>
  )
}

export default Driver