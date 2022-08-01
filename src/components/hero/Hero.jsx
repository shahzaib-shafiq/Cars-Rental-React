import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <div className={styles.hero}>
      <form action="">
<div className={styles.text}>

    <label htmlFor="">Where Are You</label>
    <input type="text"  placeholder='Search Your Location' />
</div>
<div className={styles.form}>
<span className={styles.border}>

</span>
<label htmlFor="">From</label>
<input type="date" />

</div>
<div className={styles.until}>
<span className={styles.border}>

</span>
<label htmlFor="">To</label>
<input type="date" />

</div>
<div className={styles.search_btn}></div>
      </form>
    </div>
  )
}

export default Hero
