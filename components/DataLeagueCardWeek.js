import React from "react";
import useUtils from "../services/useUtils";

import styles from "../styles/DataLeagueCard.module.css";
function DataLeagueCardWeek({userData,children}) {

  const [parseUser,getWeekTime,formatNumber] = useUtils();

  return (
    <div className={` p-16 mb-8 radius cardBackground`}>
      <div className="mb-8">
        <p className="overline">{children}</p>
      </div>
      
      <div className="row al-center jus-center mb-16">
        <div className="p-8">
          <div className={` al-center ${styles.league}`}></div>
        </div>
        <div className="al-center">
          <h5>{userData.data.userDataBrWeekCal}</h5>
        </div>
      </div>
     
      
      <div className="d-flex jus-bet">
        <div className="d-flex column w100 pr-8">
          <div className="row jus-bet al-center mb-16">
            <p className="body2 text-mute">KD</p>
            <p>{formatNumber(userData.data.userDataBrWeek.kdRatio)}</p>
          </div>
          <div className="row jus-bet al-center mb-16">
            <p className="body2 text-mute">KILLS</p>
            <p>{formatNumber(userData.data.userDataBrWeek.kills)}</p>
          </div>
          <div className="row jus-bet al-center ">
            <p className="body2 text-mute">DEATHS</p>
            <p>{formatNumber(userData.data.userDataBrWeek.deaths)}</p>
          </div>
        </div>

        <div className="d-flex column w100 pl-8">
          <div className="row jus-bet al-center mb-16">
            <p className="body2 text-mute">HEADSHOT%</p>
            <p>{formatNumber(userData.data.userDataBrWeek.headshotPercentage *100)}%</p>
          </div>
          <div className="row jus-bet al-center mb-16">
            <p className="body2 text-mute">KILLS/GAME</p>
            <p>{formatNumber(userData.data.userDataBrWeek.killsPerGame)}</p>
          </div>
          <div className="row jus-bet al-center">
            <p className="body2 text-mute">P/G</p>
            <p>
              {formatNumber(userData.data.userDataBrWeek.scorePerMinute, 5)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataLeagueCardWeek;
