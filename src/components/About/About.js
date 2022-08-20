import React, { Component } from 'react';
import styles from './About.module.css';
import BWAConstitution from '../Documents/BWAConstitution.pdf';
import retreat_photo from '../Images/bwa_retreat.jpeg'

const mission = ["To provide a forum to address the needs and concerns of Black women undergraduate students at MIT",
                      "To promote the awareness of Black women's issues in the MIT community through activities designed to increase the visibility of Black women on campus",
                      "To encourage interaction with other campus groups",
                      "To encourage the scholarship of Black women at MIT",
                      "To promote activism, unity, friendship, and community"]  
const missionItems = mission.map((statement) => <li>{statement}</li>);

const mission_paragraph = "Our mission as the Black Women’s Alliance is to provide a form to address the needs and concerns of black women undergraduate students at MIT. BWA aims to promote the awareness of black women’s issues in the MIT community through activities designed to increase the visibility of Black women on campus. We strive to encourage interaction with other campus groups and encourage the scholarship of Black women at MIT. We focus on promoting activism, unity, friendship, and community for black women undergraduate students at MIT.";

class About extends Component {
  render() {
    return (
      <div>
      <div className={styles.grid}>
        <div className={styles.title}>BWA</div>
        <div className={styles.subtitle}>EST. 1997</div>
        <div className={styles.missionBox}>
          <div className={styles.ourMission}>OUR MISSION</div>
            <div className={styles.paragraph}>{mission_paragraph}</div>
          {/* <ul className={styles.first}>{missionItems}</ul> */}
        </div>
      </div>

      <div className={styles.groupPhotoContainer}>
        <img className={styles.groupPhoto} src={retreat_photo} />
      </div>

      <div className={styles.grid}>
        <div className={styles.constitutionBox} onClick={() => window.open(BWAConstitution)}>
          <div className={styles.text}>constitution</div>
        </div> 
      </div>
      </div>
    )
  }
}
export default About;