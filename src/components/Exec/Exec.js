import React, { Component } from 'react';
import styles from './Exec.module.css';
import Adanna from '../Images/adanna_bwa.JPG';
import Sabrina from '../Images/sabrina_bwa.JPG';
import Bukunmi from '../Images/bukunmi_bwa.JPG';
import Ketandu from '../Images/ketandu_bwa.jpeg';
import Tamea from '../Images/tamea_bwa.jpg';
import Nicole from '../Images/nicole_bwa.jpg';
import Diani from '../Images/diani_bwa.png';
import Demi from '../Images/demi_bwa.jpeg';

class Exec extends Component {
  render() {
    return (
        <div className={styles.grid}>
          <div className={styles.header}>EXECUTIVE BOARD</div>
          <div className={styles.imageGrid}>
            <div className={styles.execBox}>
              <img className={styles.image} src={Diani} />
              <div className={styles.name}>Diani Jones</div>
              <div className={styles.position}>Co Chair</div>
              <div className={styles.position}>2023</div>
            </div>
            <div className={styles.execBox}>
              <img className={styles.image} src={Ketandu} />
              <div className={styles.name}>Ketandu Chiedu</div>
              <div className={styles.position}>Co Chair</div>
              <div className={styles.position}>2023</div>
            </div>
            <div className={styles.execBox}>
              <img className={styles.image} src={Nicole} />
              <div className={styles.name}>Nicole Harris</div>
              <div className={styles.position}>Social Chair</div>
              <div className={styles.position}>2024</div>
            </div>
            <div className={styles.execBox}>
              <img className={styles.image} src={Tamea} />
              <div className={styles.name}>Tamea Cobb</div>
              <div className={styles.position}>Social Chair</div>
              <div className={styles.position}>2024</div>
            </div>
            <div className={styles.execBox}>
              <img className={styles.image} src={Bukunmi} />
              <div className={styles.name}>Bukunmi Shodipo</div>
              <div className={styles.position}>Secretary</div>              
              <div className={styles.position}>2024</div>
            </div>
            <div className={styles.execBox}>
              <img className={styles.image} src={Adanna} />
              <div className={styles.name}>Adanna Abraham-Igwe</div>
              <div className={styles.position}>Tech Chair</div>
              <div className={styles.position}>2024</div>
            </div>
            <div className={styles.execBox}>
              <img className={styles.image} src={Sabrina} />
              <div className={styles.name}>Sabrina Hare</div>
              <div className={styles.position}>Alumni Chair</div>
              <div className={styles.position}>2022</div>
            </div>
            <div className={styles.execBox}>
              <img className={styles.image} src={Demi} /> 
              <div className={styles.name}>Demi Laforest</div>
              <div className={styles.position}>Treasurer</div>
              <div className={styles.position}>2024</div>
            </div>
            
          </div>
        </div>
    )
  }
}
export default Exec;