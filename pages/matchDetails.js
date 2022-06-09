import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import styles from '../styles/Match.module.css'
import MatchStatsTable from "../components/MatchStatsTable";
import useApi from "../services/useApi";

function MatchDetails({ setMatchId, matches,matchId,userName }) {
  console.log(userName)
  const router = useRouter();
  const [matchDetails,setMatchDetails] = useState();
  const [getSearchingUsers,playerStats,getPartidasUser,getMatch] = useApi()


  

  return (
    <>
      {
        matches? (<>
        <Navbar></Navbar>
      <div className={"contentWidthDiv w-100 "}>
        <div className="d-flex column ">
          <div className="pb-8">
            <button
              onClick={() => {
                setMatchId("");
              }}
            >
              click me
            </button>
          </div>
          <div className="d-flex mediaColumn">
            <div className={` radius columnLeft`}>
              <div className="cardBackground pb-8 radius mb-8">
                <div className="pt-16">
                  <h4 className="text-center">BR DUOS</h4>
                  <p className="caption text-center">BR DUOS</p>
                </div>
                <div className="row jus-ar my-12">
                  <div className="column">
                    <h5 className="text-center">PLACE</h5>
                    <h4 className="text-center">5</h4>
                  </div>
                  <div className="column">
                    <h5 className="text-center">DURATION</h5>
                    <h4 className="text-center">25 Minutes</h4>
                  </div>
                </div>
              </div>
              <div className="cardBackground pb-8 radius">
                <div className="pt-16">
                  <h4 className="text-center">BR DUOS</h4>
                  <p className="caption text-center">BR DUOS</p>
                </div>
                <div className="row jus-ar my-12">
                  <div className="column">
                    <h5 className="text-center">PLACE</h5>
                    <h4 className="text-center">5</h4>
                  </div>
                  <div className="column">
                    <h5 className="text-center">DURATION</h5>
                    <h4 className="text-center">25 Minutes</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={` radius columnRight`}>
              <div className="cardBackground pb-8 radius">
                <div className="mb-8 p-16">
                    <p className="overline">STATS</p>
                </div>
                <MatchStatsTable matches={matches}></MatchStatsTable>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>):(
          <div className={`jus-center al-center ${styles.loading}`}>
          <h3>Loading...</h3>
        </div>)
        
      }
      
    </>
  );
}

export default MatchDetails;

export async function getServerSideProps({ query }) {

  /* const parseUser = (user) =>{
     let name = user;
     if (user.includes('#')) {
       name = name.replace('#', '%23');
     }
     if (user.includes(" ")) {
       name = name.replace(' ', '%20');
     };
     return name
 }
 const getWeekTime = () =>{//Obtiene la fecha de la semana en sistema unix
   let date = new Date();
   let dateArray = [];
   date.setHours(23,59,59,0)
   date = date.getTime();
   for (let index = 0; index < 7; index++) {
     dateArray.push(date);
     date = date - 86400000;
   }
   return dateArray;
 }
 
   let dataTime = getWeekTime()  
   const matchesRes = await fetch(`https://codwz.000webhostapp.com/gamicsBack/Partidas.php?platform=${query.platform}&user=${parseUser(query.id)}`)
   const matchData = await matchesRes.json()
   const userRes = await fetch(`https://codwz.000webhostapp.com/gamicsBack/UserData.php?platform=${query.platform}&user=${parseUser(query.id)}&periods[]=${dataTime[0]}&periods[]=${dataTime[1]}&periods[]=${dataTime[2]}&periods[]=${dataTime[3]}&periods[]=${dataTime[4]}&periods[]=${dataTime[5]}&periods[]=${dataTime[6]}`)
   const userData = await userRes.json()
   const props = {
     userData,
     matchData
   }*/
   
   return {props:query}
 }
