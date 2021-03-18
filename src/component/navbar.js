import React from 'react'
import {Link} from 'gatsby'
import * as styles from'./navbar.module.css'
const Navbar=()=>{


    return(
    <div  className={styles.navba}>
         <Link to="/"><p className={styles.text}>Home</p></Link>
          <Link to="/about"><p className={styles.text}>About</p></Link>
          <Link to="/contact"><p className={styles.text}>Contact</p></Link>
          <Link to="/product"><p className={styles.text}>Product</p></Link>
    </div>
    )
}
export default Navbar