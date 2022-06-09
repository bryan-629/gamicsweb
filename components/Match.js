import React , { useEffect }from "react";
import styles from "../styles/Profile.module.css";
import Link from "next/link";
import useUtils from '../services/useUtils';


function Match({ match,userData,index,id,setMatchId,setUserName,platform }) {

  const [parseUser] = useUtils()
  let date = new Date(match.utcStartSeconds * 1000).toLocaleDateString();
  let mode;
  
  if (match.mode.includes("rebirth")) {
    mode = "REBIRTH "
  }else if(match.mode.includes("plun")){
    mode = "PLUNDER "
  }else{
    mode = "BR "
  }

  if (match.mode.includes("quad")) {
    mode = mode + "SQUADS"
  }else if (match.mode.includes("trios")) {
    mode = mode + "TRIOS"
  }else if (match.mode.includes("duos")) {
    mode = mode + "DUOS"
  }
  const settersToMatchDetails = (matchId, userName) =>{
    setUserName(userName)
    setMatchId(matchId)
    console.log()
  }
  return (
    
    <Link href={`/profile/${platform}/${parseUser(id)}/match/${match.matchID}`} passHref>
      <div className={` row p-8 d-flex cursor containerMa ${index % 2 == 0? ("bg-list1"): ("bg-list2")}`}>
        <div className={`p-8 ml-24 ${styles.position}`}>
          <h4 className={match.playerStats.teamPlacement == 1? "text-success": null}>{match.playerStats.teamPlacement }º</h4>
          
        </div>
        <div className={` al-center ${styles.matchStats}`}>
          <div className={` ${styles.matchMode}`}>
            <h6 className="text-center">{mode}</h6>
            <p className="caption text-center">{date}</p>
          </div>
          <div className={`row ${styles.matchContent}`}>
            <div className={`jus-center column`}>
              <p className="text-center caption">KILLS</p>
              <h6 className="text-center">{match.playerStats.kills}</h6>
            </div>
            <div className={`jus-center column`}>
              <p className="text-center caption">DEATHS</p>
              <h6 className="text-center">{match.playerStats.deaths}</h6>
            </div>
            <div className={`jus-center column`}>
              <p className="text-center caption">KD RATIO </p>
              <div className="row jus-center al-center">
                <h6 className="text-center mx-8">{Math.round(match.playerStats.kdRatio * 100) / 100}</h6>
                {userData.data.userDataBrAll.kdRatio > Math.round(match.playerStats.kdRatio * 100) / 100? (
                  <i className="fa-solid fa-arrow-down"></i>
                ):(<i className="fa-solid fa-arrow-up"></i>)}
              </div>
            </div>
            <div className={`jus-center column`}>
              <p className="text-center caption">HEADSHOT%</p>
              <div className="row jus-center al-center">
                <h6 className="text-center mx-8">{ match.playerStats.kills == 0? (0) : (Math.round(match.playerStats.headshots * 100 /  match.playerStats.kills * 100) / 100)}%</h6>
                {userData.data.userDataBrWeek.headshotPercentage * 100 > Math.round(match.playerStats.headshots * 100 ) /  match.playerStats.kills? (
                  <i className="fa-solid fa-arrow-down"></i>
                ):(<i className="fa-solid fa-arrow-up"></i>)}
              </div>
            </div>
            <div className={`jus-center column ${styles.toggleVisible}`}>
              <p className="text-center caption">DAMAGE DONE</p>
              <h6 className="text-center">{match.playerStats.damageDone}</h6>
            </div>
            <div className={`jus-center column ${styles.toggleVisible}`}>
              <p className="text-center caption">GULAJ</p>
              <div className="row jus-center al-center">
                {match.playerStats.gulagKills > 0? (<i className="fa-solid fa-check"></i>): match.playerStats.gulagDeaths > 0? (<i className="fa-solid fa-xmark"></i>):(<i className="fa-solid fa-grip-lines"></i>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
      
    
  );
}

export default Match;
