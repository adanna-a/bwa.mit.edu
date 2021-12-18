import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Image } from 'react-native';
import styles from './Home.module.css';
import instagram from '../Images/instagram_icon.png';
import linkedin from '../Images/linkedin_icon.png';
import mail from '../Images/mail_icon.png';
import mailinglist from '../Images/mailinglist_icon.png';
import twitter from '../Images/twitter_icon.png';

class Home extends Component {
  render() {
    return (
      <div className={styles.full}>
        <div className={styles.clubName}>BLACK WOMEN'S</div>
        <div className={styles.clubName}>ALLIANCE</div>
      
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <div className={styles.nested}>
              <div className={styles.header}>SOCIALS</div>
                <a className={styles.socialGrid} href="https://www.instagram.com/mit_bwa/?hl=enm">
                  <img className={styles.image} src={instagram} />
                  <div className={styles.socials}>@mit_bwa</div>
                </a>
                {/* <a className={styles.socialGrid} href="https://www.linkedin.com/groups/13907779//">
                  <img className={styles.image} src={linkedin} />
                  <div className={styles.socials}>linkedin.com/groups/13907779/</div>
                </a> */}
            </div>
          </div>

          <div className={styles.gridItem}>
            <div className={styles.header}>CONTACT INFO</div>
            <div className={styles.socials}>black-women-request@mit.edu</div>
            {/* <div className={styles.socials}>ketandu@mit.edu</div>
            <div className={styles.socials}>diani@mit.edu</div> */}
          </div>
        </div>

        <div className={styles.donateBox}>
          <a href="https://giving.mit.edu/explore/campus-student-life/affinity-groups">
            <div className={styles.donate}>donate</div>
          </a>
        </div>
      </div>
    );
  }
}
export default Home;