import React, { Component } from 'react';
import styles from './Constitution.module.css';

const mission = ["To provide a forum to address the needs and concerns of Black women undergraduate students at MIT",
                      "To promote the awareness of Black women's issues in the MIT community through activities designed to increase the visibility of Black women on campus",
                      "To encourage interaction with other campus groups",
                      "To encourage the scholarship of Black women at MIT",
                      "To promote activism, unity, friendship, and community"]  
const missionItems = mission.map((statement) => <li>{statement}</li>);

const membership = ["A general member of the M.I.T.B.W.A. shall be any person pursuing an undergraduate or graduate degree at the Massachusetts Institute of Technology who has expressed an interest in and will work towards fulfilling the mission of the organization.", 
                    "A voting member of the M.I.T.B.W.A. shall be an individual who has met the criteria of a general member as listed in Article I, Section I (A) and who has paid their yearly dues; however, exceptions will be made for students who cannot afford these dues."]
const membershipTypes = membership.map((statement) => <li>{statement}</li>);

const exec = ["Co-Chairpersons", "Social Chair", "Alumni Chair", "Treasurer", "Tech Chair", "Secretary","The Social Committee"]
const execMembershipTypes = exec.map((statement) => <li>{statement}</li>)

const execDuties = ["To aid in determining policy of the M.I.T.B.W.A.",
                    "To ensure that the M.I.T.B.W.A. works efficiently by advising and coordinating all committees.",
                    "To supervise and administer all activities.",
                    "To decide each year whether any committee, other than those provided for in the Constitution shall exist and appoint a chairman for such a committee.",
                    "To report policy decision at the next General Body meeting.",
                    "Serve on C.A.B.S. Event committees.",
                    "Responsible for determining the content of the annual M.I.T.B.W.A. retreat."]
const execDutiesMap = execDuties.map((statement) => <li>{statement}</li>)

const CoChair = ["Responsible for determining the direction of M.I.T.B.W.A.", 
                 "Serve as facilitator at meetings.",
                 "Create an agenda to be sent out at least one day before all meetings.",
                 "Effectively delegate duties and responsibilities, namely making sure that every action plan has an overseer.",
                 "Serve as liaison and main contact person between M.I.T.B.W.A. members and faculty and staff at the Institute. Schedule and meet regularly with M.I.T.B.W.A.’s faculty advisor.",
                 "Responsible for maintaining correspondence with other social and professional organizations at MIT."]
const CoChairMap = CoChair.map((statement) => <li>{statement}</li>)


class Constitution extends Component {
  render() {
    return (
      <div className={styles.body}>
        <div className={styles.text}>CONSTITUTION</div>
        <div className={styles.titleUp}>Black Women's Alliance</div>
        <div className={styles.title}>Massachusetts Institute of Technology</div>
        <div className={styles.title}>Constitution & Operational By-Laws</div>
        <div className={styles.regular}>Approved September 19th, 2013</div>

        <div className={styles.titleUp}>Name</div>
        <div className={styles.regularLeft}>The name of this organization shall be the Massachusetts Institute of Technology Black Women’s Alliance,
          hereafter referred to as the M.I.T.B.W.A.</div>

        <div className={styles.titleUp}>Mission</div>
        <div className={styles.regularLeft}>The mission of this organization is:</div>
        <ul className={styles.missionList}>{missionItems}</ul>

        <div className={styles.titleUp}>Article I: Membership</div>
        <div className={styles.regularLeft}>Section 1- Membership Types</div>
        <ol className={styles.membTypes}>{membershipTypes}</ol>

        

        <div className={styles.regularLeft}>Section 2 - Dues</div>
        <div className={styles.regularLeft}>The dues of the M.I.T.B.W.A. shall be determined by the Executive Committee at the start of each Academic
        Year and may be paid at any point during the school year.</div>

        <div className={styles.regularLeft}>Section 3 - Divisions</div>
        <div className={styles.regularLeft}>The M.I.T.B.W.A. shall have three major divisions. These divisions are the Executive Board, Social
        Committee, and the General Body.</div>

        <div className={styles.regularLeft}>Section 4</div>
        <div className={styles.regularLeft}>Those who fulfill the requirements for general membership under Article I, Section 1, shall be members of
        the General Body.</div>

        <div className={styles.regularLeft}>Section 5</div>
        <div className={styles.regularLeft}>The General Body shall be responsible for providing input for policies and governance of the M.I.T.B.W.A</div>

        <div className={styles.titleUp}>Article II: The Executive Board</div>
        
        <div className={styles.regularLeft}>Section 1 - Membership</div>
        <div className={styles.regularLeft}>The members of the M.I.T.B.W.A. Executive Board shall be:</div>
        <ol className={styles.membTypes}>{execMembershipTypes}</ol>

        <div className={styles.regularLeft}>Section 2</div>
        <div className={styles.regularLeft}>The duties of the Executive Board shall be:</div>
        <ol className={styles.membTypes}>{execDutiesMap}</ol>

        <div className={styles.regularLeft}>Section 3 - Duties</div>
        <div className={styles.regularLeft}>The duties of the specific members of the Executive Board shall be as:</div>

        <div className={styles.regularLeft}>The Co-Chairpersons</div>
        <ol className={styles.membTypes}>{CoChairMap}</ol>
        


    </div>
    )
  }
}
export default Constitution;