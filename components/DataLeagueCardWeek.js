import React, { useEffect, useState } from "react";
import useUtils from "../services/useUtils";
import Image from "next/image";
import styles from "../styles/DataLeagueCard.module.css";
function DataLeagueCardWeek({userData,children}) {

  const [parseUser,getWeekTime,formatNumber] = useUtils();
  const [leagueImg, setLeagueImg] = useState("/img/leagues/bronze1.png");

  const getLeagueImg = (league) =>{
    switch (league) {
      case "BRONZE 4":
        setLeagueImg("/img/leagues/bronze4.png")
      break;
      case "BRONZE 3":
        setLeagueImg("/img/leagues/bronze3.png")
      break;
      case "BRONZE 2":
        setLeagueImg("/img/leagues/bronze2.png")
      break;
      case "BRONZE 1":
        setLeagueImg("/img/leagues/bronze1.png")
      break;
      case "SILVER 4":
        setLeagueImg("/img/leagues/silver4.png")
      break;
      case "SILVER 3":
        setLeagueImg("/img/leagues/silver3.png")
      break;
      case "SILVER 2":
        setLeagueImg("/img/leagues/silver2.png")
      break;
      case "SILVER 1":
        setLeagueImg("/img/leagues/silver1.png")
      break;
      case "GOLD 4":
        setLeagueImg("/img/leagues/gold4.png")
      break;
      case "GOLD 3":
        setLeagueImg("/img/leagues/gold3.png")
      break;
      case "GOLD 2":
       setLeagueImg("/img/leagues/gold2.png")
      break;
      case "GOLD 1":
        setLeagueImg("/img/leagues/gold1.png")
      break;
      case "PLATINUM 4":
        setLeagueImg("/img/leagues/platinum4.png")
      break;
      case "PLATINUM 3":
        setLeagueImg("/img/leagues/platinum3.png")
      break;
      case "PLATINUM 2":
        setLeagueImg("/img/leagues/platinum2.png")
      break;
      case "PLATINUM 1":
        setLeagueImg("/img/leagues/platinum1.png")
      break;
      case "DIAMOND 4":
        setLeagueImg("/img/leagues/diamond4.png")
      break;
      case "DIAMOND 3":
        setLeagueImg("/img/leagues/diamond3.png")
      break;
      case "DIAMOND 2":
        setLeagueImg("/img/leagues/diamond2.png")
      break;
      case "DIAMOND 1":
        setLeagueImg("/img/leagues/diamond1.png")
      break;
      case "MASTER":
        setLeagueImg("/img/leagues/master.png")
      break;
      case "LEGEND":
        setLeagueImg("/img/leagues/Leguend.png")
      break;
    
      default:
        setLeagueImg("/img/leagues/bronze1.png")
        break;
    }
  }
  useEffect(()=>{
    getLeagueImg(userData.data.userDataBrWeekCal)
  },[])
  return (
    <div className={` p-16 mb-8 radius cardBackground`}>
      <div className="mb-8">
        <p className="overline">{children}</p>
      </div>
      
      <div className="row al-center jus-center mb-16">
        <div className="p-16">
            <Image 

            width={100}
            height={42}
            src={leagueImg}>
            </Image>
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
