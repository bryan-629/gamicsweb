import React from 'react'
import MatchList from "./MatchList";
import Navbar from "./Navbar";
import LineChart from "./LineChart";
import Image from "next/image";
import styles from "../styles/Profile.module.css";
function Profile({userData,matches,id,setUserName,platform}) {
  return (
    <>
          <Navbar></Navbar>
          <div className={'contentWidthDiv'}>
            <div className={`d-flex mb-24 ${styles.userProfile}`}>
              <div className={`${styles.userImg}`}>
                <Image
                  width={70}
                  height={70}
                  src="/img/Logo_dark.png"
                  alt="user image"
                ></Image>
              </div>
              <div className="jus-center column ml-24">
                <p className="upper">{userData.data.userName}</p>
                <p className="subtitle2 my-8">
                  Prestige: <span>{userData.data.prestige}</span>
                </p>
                <p className="subtitle2">
                  Level: <span>{userData.data.level}</span>
                </p>
              </div>
            </div>
            {/*<div className={`cardBackground radius mb-12 ${styles.menu}`}></div>*/}
            <div className={`w100 radius d-flex mediaColumn `}>
              <div className={` radius columnLeft`}>
                <div className={` p-16 mb-8 radius ${styles.card}`}>
                  <div className="mb-8">
                    <p className="overline">OVERVIEW</p>
                  </div>
                  <div className="jus-center mb-16">
                    <h5>{userData.data.userDataBrCal.kdLeague}</h5>
                  </div>
                  <div className="row jus-bet mb-16">
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">KD</p>
                      <h6 className="text-center">
                        {userData.data.userDataBrCal.kd}
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">Wins</p>
                      <h6 className="text-center">
                        {userData.data.userDataBrAll.wins}
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">Kills</p>
                      <h6 className="text-center">
                        {userData.data.userDataBrAll.kills}
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">Deaths</p>
                      <h6 className="text-center">
                        {userData.data.userDataBrAll.deaths}
                      </h6>
                    </div>
                  </div>
                  <div className="row jus-bet ">
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">Games</p>
                      <h6 className="text-center">
                        {userData.data.userDataBrAll.gamesPlayed}
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">Score/Min</p>
                      <h6 className="text-center">
                        {Math.round(
                          userData.data.userDataBrAll.scorePerMinute * 100
                        ) / 100}
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">Top 10</p>
                      <h6 className="text-center">
                        {userData.data.userDataBrAll.topTen}
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">Top5 </p>
                      <h6 className="text-center">
                        {userData.data.userDataBrAll.topFive}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className={` p-16 radius ${styles.card}`}>
                  <div className="mb-8">
                    <p className="overline">WEEK</p>
                  </div>
                  <div className="jus-center mb-16">
                    <h5>DIAMOND</h5>
                  </div>
                  <div className="row jus-bet mb-16">
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">KD</p>
                      <h6 className="text-center">
                        {Math.round(
                          userData.data.userDataBrWeek.kdRatio * 100
                        ) / 100}
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">Kills</p>
                      <h6 className="text-center">
                        {userData.data.userDataBrWeek.kills}
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">Kills/Game</p>
                      <h6 className="text-center">
                        {Math.round(
                          userData.data.userDataBrWeek.killsPerGame * 100
                        ) / 100}
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">Deaths</p>
                      <h6 className="text-center">
                        {userData.data.userDataBrWeek.deaths}
                      </h6>
                    </div>
                  </div>
                  <div className="row jus-bet">
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">Executions</p>
                      <h6 className="text-center">
                        {userData.data.userDataBrWeek.executions}
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">Headshot%</p>
                      <h6 className="text-center">
                        {Math.round(
                          userData.data.userDataBrWeek.headshotPercentage *
                            10000
                        ) / 100}{" "}
                        %
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">Gulaj%</p>
                      <h6 className="text-center">
                        {Math.round(
                          (userData.data.userDataBrWeek.gulagKills * 100) /
                            userData.data.userDataBrWeek.gulagDeaths +
                            userData.data.userDataBrWeek.gulagKills * 100
                        ) / 100}{" "}
                        %
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">Score/Min</p>
                      <h6 className="text-center">
                        {Math.round(
                          userData.data.userDataBrWeek.scorePerMinute * 100
                        ) / 100}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className={` radius  columnRight`}>
                <div className={`cardBackground p-16 radius mb-8`}>
                  <div className="mb-8 ">
                    <p className="overline">WEEK CHART</p>
                  </div>
                  <LineChart periods={userData.data.periods} periodsDate={userData.data.periodsDate}></LineChart>
                </div>
                <div className={`cardBackground  radius ${styles.lastMatches}`}>
                  <div className="mb-8 p-16">
                    <p className="overline">LAST MATCHES</p>
                  </div>
                  {matches?.userMatch?
                    <MatchList platform={platform} setUserName={setUserName} id={id} userData={userData} matches={matches} userId={id}>asdfasdf asdfasdf</MatchList>
                    :
                     (<div className={`jus-center al-center ${styles.loading}`}>
                     <h3>Loading...</h3>
                   </div>) }
                </div>
              </div>
            </div>
          </div>
        </>
  )
}

export default Profile