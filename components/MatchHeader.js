import React from "react";
import useUtils from "../services/useUtils";
import styles from "../styles/MatchHeader.module.css";
function MatchHeader({ matches, userData }) {


  const [parseUser,getWeekTime,formatNumber] = useUtils();
  return (
    <div className={` row p-8 cardBackground radius mb-8`}>
      <div className={`column p-8 ml-24 w100`}>
        <div>
          <p className="body2 text-mute mb-8">LAST 20</p>
        </div>

        <div className={`d-flex jus-bet ${styles.winsResponsive}`}>
          <div className="al-center">
            <p className="text-success">3 WINS</p>
          </div>
          <div className={`row jus-bet w-70 ${styles.matchesDataResponsive}`} >
            <div className="row w100 al-center jus-center">
              <div className="mx-8">
                <p className="text-center">{formatNumber(matches.userMatch.data.summary.all.kdRatio)}</p>
                <p className="text-mute text-center body2">KD</p>
              </div>
              <div>
                {userData.data.userDataBr.kdRatio < matches.userMatch.data.summary.all.kdRatio?(<i className="fa-solid fa-arrow-up radius"></i>):(<i className="fa-solid fa-arrow-down radius"></i>)}
                
              </div>
            </div>
            <div className="row w100 al-center jus-center">
              <div className="mx-8">
                <p className="text-center">{ formatNumber(matches.userMatch.data.summary.all.headshotPercentage * 100)}%</p>
                <p className="text-mute text-center body2">HEADSHOT%</p>
              </div>
              <div>
                {userData.data.userDataBrWeek.headshotPercentage  < matches.userMatch.data.summary.all.headshotPercentage?(<i className="fa-solid fa-arrow-up radius"></i>):(<i className="fa-solid fa-arrow-down radius"></i>)}
              </div>
            </div>
            <div className="w100">
              <p className="text-center">{matches.userMatch.data.summary.all.kills}</p>
              <p className="text-mute text-center body2">KILLS</p>
            </div>
            <div className="w100">
              <p className="text-center">{matches.userMatch.data.summary.all.deaths}</p>
              <p className="text-mute text-center body2">DEATHS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchHeader;
