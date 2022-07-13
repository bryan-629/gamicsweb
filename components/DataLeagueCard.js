import React ,{useState,useEffect} from "react";
import useUtils from "../services/useUtils";
import styles from "../styles/DataLeagueCard.module.css";
import Image from "next/image";
function DataLeagueCard({ userData, children }) {
  //userData.data.userDataBrCal.kd
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
    getLeagueImg(userData.data.userDataBrCal.userLeague)
  },[])
  return (
    <div className={` p-16 mb-16 radius cardBackground`}>
      <div className="">
        <p className="overline text-mute">{children}</p>
      </div>
      <div className="row al-center jus-center w100 mb-16">
        <div className="column al-center ">
          <div className="p-8">
              <div className={styles.league}>
                <Image 
                  width={60}
                  height={25}
                  src={leagueImg}>
                  </Image>
              </div>
            </div>
            <div className="al-center">
              <h5>{userData.data.userDataBrCal.userLeague}</h5>
            </div>
        </div>
      </div>

      <div className="d-flex jus-bet">

          <div className="d-flex column w100 pr-8">
            <div className="row jus-bet al-center mb-16">
                <p className="body2 text-mute">KD</p>
                <p className='bold'>{formatNumber(userData.data.userDataBr.kdRatio)}</p>
            </div>
            <div className="row jus-bet al-center mb-16">
                <p className="body2 text-mute">KILLS</p>
                <p className='bold'>{formatNumber(userData.data.userDataBr.kills)}</p>
            </div>
            <div className="row jus-bet al-center ">
                <p className="body2 text-mute">DEATHS</p>
                <p className='bold'>{formatNumber(userData.data.userDataBr.deaths)}</p>
            </div>
          </div>



          <div className="d-flex column w100 pl-8">
            <div className="row jus-bet al-center mb-16">
                <p className="body2 text-mute">WINS</p>
                <p className='bold'>{formatNumber(userData.data.userDataBr.wins)}</p>
            </div>
            <div className="row jus-bet al-center mb-16">
                <p className="body2 text-mute">TOP 10</p>
                <p className='bold'>{formatNumber(userData.data.userDataBr.topTen)}</p>
            </div>
            <div className="row jus-bet al-center">
                <p className="body2 text-mute">P/G</p>
                <p className='bold'>{formatNumber(userData.data.userDataBr.scorePerMinute, 5)}</p>
            </div>
          </div>

      </div>
    </div>
  );
}

export default DataLeagueCard;
