import React, { useEffect } from "react";
import styles from "../styles/MatchHeader.module.css";
import Link from "next/link";
import useUtils from "../services/useUtils";

function Match({
  match,
  userData,
  index,
  id,
  setMatchId,
  setUserName,
  platform,
}) {
  const [parseUser, getWeekTime, formatNumber] = useUtils();

  let date = new Date(match.utcStartSeconds * 1000).toLocaleDateString();
  let mode;

  if (match.mode.includes("rebirth")) {
    mode = "REBIRTH ";
  } else if (match.mode.includes("plun")) {
    mode = "PLUNDER ";
  } else {
    mode = "BR ";
  }

  if (match.mode.includes("quad")) {
    mode = mode + "SQUADS";
  } else if (match.mode.includes("trios")) {
    mode = mode + "TRIOS";
  } else if (match.mode.includes("duos")) {
    mode = mode + "DUOS";
  }
  const settersToMatchDetails = (matchId, userName) => {
    setUserName(userName);
    setMatchId(matchId);
    console.log();
  };
  // match.playerStats.teamPlacement
  return (
    <Link
      href={`/profile/${platform}/${parseUser(id)}/match/${match.matchID}`}
      passHref
    >
      <div className={` row p-8 cardBackground radius mb-8 cursor`}>
        <div className={`column p-8 ml-24 w100`}>
          <div className={`d-flex jus-bet ${styles.matchInfo}`}>
            <div className={` al-center w-20 ${styles.rowResponsive}`}>
              <h6
                className={
                  match.playerStats.teamPlacement < 10
                    ? match.playerStats.teamPlacement == 1
                      ? "text-success"
                      : "text-gray"
                    : "text-mute"
                }
              >
                {match.playerStats.teamPlacement}º
              </h6>
              <p className="text-center my-8">{mode}</p>
              <p className="text-mute">{date}</p>
            </div>
            <div className={`row jus-bet w-70 ${styles.matchesDataResponsive}`}>
              <div className="row w100 al-center jus-center">
                <div className="mx-8">
                  <p className="text-center">
                    {formatNumber(match.playerStats.kdRatio)}
                  </p>
                  <p className="text-mute text-center body2">KD</p>
                </div>
                <div>
                  {userData.data.userDataBr.kdRatio <
                  match.playerStats.kdRatio ? (
                    <i className="fa-solid fa-arrow-up radius"></i>
                  ) : (
                    <i className="fa-solid fa-arrow-down radius"></i>
                  )}
                </div>
              </div>
              <div className="row w100 al-center jus-center ">
                <div className="mx-8">
                  <p className="text-center">
                    
                    {formatNumber(match.playerStats.headshots * 100 / match.playerStats.kills)}%
                  </p>
                  <p className="text-mute text-center body2">HEADSHOT%</p>
                </div>
                <div>
                  {(userData.data.userDataBrWeek.headshotPercentage * 100)  <=
                   (match.playerStats.headshots * 100 / match.playerStats.kills) ? (
                    <i className="fa-solid fa-arrow-up radius"></i>
                  ) : (
                    <i className="fa-solid fa-arrow-down radius"></i>
                  )}
                </div>
              </div>
              <div className=" w100 al-center jus-center">
                <div className="w100 ">
                  <p className="text-center">{match.playerStats.kills}</p>
                  <p className="text-mute text-center body2">KILLS</p>
                </div>
              </div>
              <div className=" w100 al-center jus-center">
                <div className="w100 column jus-center al-center">
                  <p className="text-center">{match.playerStats.deaths}</p>
                  <p className="text-mute text-center body2">DEATHS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Match;
