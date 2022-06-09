import React from "react";
import styles from "../styles/Profile.module.css";
function MatchHeader({ matches, userData }) {
  return (
    <div className={` row p-8  ${styles.hr}`}>
      <div className={`column p-8 ml-24 ${styles.position}`}>
        <h6>LAST 20</h6>
        
      </div>
      <div className={` al-center ${styles.matchStats}`}>
        <div className={`${styles.matchMode}`}></div>
        <div className={`row ${styles.matchContent}`}>
          <div className={`jus-center column`}>
            <p className="text-center caption">KILLS</p>
            <h6 className="text-center">{matches.userMatch.data.summary.all.kills}</h6>
          </div>
          <div className={`jus-center column`}>
            <p className="text-center caption">DEATHS</p>
            <h6 className="text-center">{matches.userMatch.data.summary.all.deaths}</h6>
          </div>
          <div className={`jus-center column`}>
            <p className="text-center caption">KD RATIO </p>
            <div className="row jus-center al-center">
              <h6 className="text-center mx-8">
                {Math.round(matches.userMatch.data.summary.all.kdRatio * 100) / 100}
              </h6>
              {Math.round(userData.data.userDataBrAll.kdRatio * 100) / 100 <
              Math.round(matches.userMatch.data.summary.all.kdRatio * 100) / 100 ? (
                <i className="fa-solid fa-arrow-up"></i>
              ) : Math.round(userData.data.userDataBrAll.kdRatio * 100) / 100 ==
                Math.round(matches.userMatch.data.summary.all.kdRatio * 100) / 100 ? (
                <i className="fa-solid fa-grip-lines"></i>
              ) : (
                <i className="fa-solid fa-arrow-down"></i>
              )}
            </div>
          </div>
          <div className={`jus-center column `}>
            <p className="text-center caption">HEADSHOT%</p>
            <div className="row jus-center al-center">
              <h6 className="text-center mx-8">
                {Math.round(matches.userMatch.data.summary.all.headshotPercentage * 10000) / 100}%
              </h6>
              {Math.round(
                userData.data.userDataBrWeek.headshotPercentage * 10000
              ) /
                100 <
              Math.round(matches.userMatch.data.summary.all.headshotPercentage * 10000) / 100 ? (
                <i className="fa-solid fa-arrow-up"></i>
              ) : Math.round(userData.data.userDataBrAll.kdRatio * 100) / 100 ==
                Math.round(matches.userMatch.data.summary.all.kdRatio* 100) / 100 ? (
                <i className="fa-solid fa-grip-lines"></i>
              ) : (
                <i className="fa-solid fa-arrow-down"></i>
              )}
            </div>
          </div>
          <div className={`jus-center column ${styles.toggleVisible}`}>
            <p className="text-center caption">KILLS PER GAME</p>
            <div className="row jus-center al-center">
              <h6 className="text-center mx-8">{matches.userMatch.data.summary.all.killsPerGame}</h6>
              {Math.round(userData.data.userDataBrWeek.killsPerGame * 100) /
                100 <
              Math.round(matches.userMatch.data.summary.all.killsPerGame * 100) / 100 ? (
                <i className="fa-solid fa-arrow-up"></i>
              ) : Math.round(userData.data.userDataBrAll.kdRatio * 100) / 100 ==
                Math.round(matches.userMatch.data.summary.all.kdRatio  * 100) / 100 ? (
                <i className="fa-solid fa-grip-lines"></i>
              ) : (
                <i className="fa-solid fa-arrow-down"></i>
              )}
            </div>
          </div>
          <div className={`jus-center column ${styles.toggleVisible}`}>
            <p className="text-center caption">GULAJ</p>
            <h6 className="text-center">
              {matches.userMatch.data.summary.all.gulagKills}%
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchHeader;
