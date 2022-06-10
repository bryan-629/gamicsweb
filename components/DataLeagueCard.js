import React from "react";
import styles from "../styles/DataLeagueCard.module.css";
function DataLeagueCard({ userData, children }) {
  //userData.data.userDataBrCal.kd
  function formatNumber (n, d = 3) {
    return new Intl.NumberFormat('es-ES',{ maximumSignificantDigits: d, minimumSignificantDigits:2 }).format(n)
    }
    
  return (
    <div className={` p-16 mb-8 radius cardBackground`}>
      <div className="mb-8">
        <p className="overline">{children}</p>
      </div>
      <div className="d-flex al-center jus-center mb-16">
        <div className="p-8">
            <div className={`${styles.league}`}></div>
        </div>
        <div className="jus-center ">
          <h5>{userData.data.userDataBrCal.userLeague}</h5>
        </div>
      </div>
      <div className="d-flex jus-bet">

          <div className="d-flex column w100 pr-8">
            <div className="row jus-bet al-center mb-16">
                <p className="body2 text-mute">KD</p>
                <p>{formatNumber(userData.data.userDataBr.kdRatio)}</p>
            </div>
            <div className="row jus-bet al-center mb-16">
                <p className="body2 text-mute">KILLS</p>
                <p>{formatNumber(userData.data.userDataBr.kills)}</p>
            </div>
            <div className="row jus-bet al-center ">
                <p className="body2 text-mute">DEATHS</p>
                <p>{formatNumber(userData.data.userDataBr.deaths)}</p>
            </div>
          </div>



          <div className="d-flex column w100 pl-8">
            <div className="row jus-bet al-center mb-16">
                <p className="body2 text-mute">WINS</p>
                <p>{formatNumber(userData.data.userDataBr.wins)}</p>
            </div>
            <div className="row jus-bet al-center mb-16">
                <p className="body2 text-mute">TOP 10</p>
                <p>{formatNumber(userData.data.userDataBr.topTen)}</p>
            </div>
            <div className="row jus-bet al-center">
                <p className="body2 text-mute">P/G</p>
                <p>{formatNumber(userData.data.userDataBr.scorePerMinute, 5)}</p>
            </div>
          </div>

      </div>
    </div>
  );
}

export default DataLeagueCard;
