import React from 'react'
import MatchList from "./MatchList";
import Navbar from "./Navbar";
import LineChart from "./LineChart";
import Image from "next/image";
import styles from "../styles/Profile.module.css";
import UserImgLevel  from './UserImgLevel';
import DataLeagueCard from './DataLeagueCard';
import DataLeagueCardWeek from './DataLeagueCardWeek';
function Profile({userData,matches,id,setUserName,platform}) {
  return (
    <>
          <Navbar></Navbar>
          <div className={'contentWidthDiv'}>
            <div className={`d-flex mb-24 ${styles.userProfile}`}>
              <UserImgLevel userName={userData.data.userName} level={userData.data.level}></UserImgLevel>
            </div>
            {/*<div className={`cardBackground radius mb-12 ${styles.menu}`}></div>*/}
            <div className={`w100 radius d-flex mediaColumn `}>
              <div className={` radius columnLeft`}>
                <DataLeagueCard userData={userData}>LIFETIME STATS</DataLeagueCard>
                <DataLeagueCardWeek userData={userData}>WEEK</DataLeagueCardWeek>
              </div>
              <div className={` radius  columnRight`}>
                <div className={`cardBackground p-16 radius mb-8`}>
                  <div className="mb-8 ">
                    <p className="overline">WEEK CHART</p>
                  </div>
                  <LineChart periods={userData.data.periods} periodsDate={userData.data.periodsDate}></LineChart>
                </div>
                <div>
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