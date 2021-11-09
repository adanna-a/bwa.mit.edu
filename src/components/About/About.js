import React, { Component } from 'react';
import styles from './About.module.css';
import BWAConstitution from '../Documents/BWAConstitution.pdf';

const mission = ["To provide a forum to address the needs and concerns of Black women undergraduate students at MIT",
                      "To promote the awareness of Black women's issues in the MIT community through activities designed to increase the visibility of Black women on campus",
                      "To encourage interaction with other campus groups",
                      "To encourage the scholarship of Black women at MIT",
                      "To promote activism, unity, friendship, and community"]  
const missionItems = mission.map((statement) => <li>{statement}</li>);

class About extends Component {
  render() {
    return (
      <div className={styles.grid}>
        <div className={styles.title}>BWA</div>
        <div className={styles.subtitle}>EST. 1997</div>
        <div className={styles.missionBox}>
          <div className={styles.ourMission}>OUR MISSION</div>
          <ul className={styles.first}>{missionItems}</ul>
          </div>
        <div className={styles.constitutionBox} onClick={() => window.open(BWAConstitution)}>
          <div className={styles.text}>constitution</div>
        </div>
        
      </div>
    )
  }
}
export default About;