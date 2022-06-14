import React, { useState, useEffect } from "react";
import Heading from "../../../../../components/Heading";
import Navbar from "../../../../../components/Navbar";
import { useRouter } from "next/router";
import styles from '../../../../../styles/Match.module.css'
import MatchStatsTable from "../../../../../components/MatchStatsTable";
import useApi from "../../../../../services/useApi";
import useUtils from "../../../../../services/useUtils";
import TeamTable from "../../../../../components/TeamTable";

function MatchDetails({ setMatchId, matches,matchId,userName,matchesDataResponse,matchDataResponse }) {
  console.log(userName)
  const router = useRouter();
  const { id, platform } = router.query;
  const [matchDetails,setMatchDetails] = useState();
  const [getSearchingUsers,playerStats,getPartidasUser,getMatch] = useApi()
  const [parseUser,getWeekTime] = useUtils();

  

  

  let date = new Date(matchDataResponse.yourStats.utcStartSeconds * 1000).toLocaleDateString();

  let mode;
  console.log((new Date(matchDataResponse.yourStats.utcEndSeconds).getTime() - new Date(matchDataResponse.yourStats.utcStartSeconds).getTime()))
  let gameTime = Math.abs((new Date(matchDataResponse.yourStats.utcEndSeconds).getTime() - new Date(matchDataResponse.yourStats.utcStartSeconds).getTime()) / 60)

  if (matchDataResponse.yourStats.mode.includes("rebirth")) {
    mode = "REBIRTH ";
  } else if (matchDataResponse.yourStats.mode.includes("plun")) {
    mode = "PLUNDER ";
  } else {
    mode = "BR ";
  };

  if (matchDataResponse.yourStats.mode.includes("quad")) {
    mode = mode + "SQUADS";
  } else if (matchDataResponse.yourStats.mode.includes("trios")) {
    mode = mode + "TRIOS";
  } else if (matchDataResponse.yourStats.mode.includes("duos")) {
    mode = mode + "DUOS";
  }

  

  return (
    <div className={`background mainContaner `}>
      <Heading page={id ? id : ""}></Heading>
      {
        matchesDataResponse && matchDataResponse? (<>
        <Navbar></Navbar>
      <div className={"contentWidthDiv w-100 "}>
        <div className="d-flex column ">
          <div className="pb-8">
          </div>
          <div className="d-flex mediaColumn">
            <div className={` radius columnLeft`}>
              <div className="cardBackground pb-8 radius mb-8">
                <div className="pt-16">
                  <h5 className="text-center">{mode}</h5>
                  <p className="caption text-center">{date}</p>
                </div>
                <div className="row jus-ar my-12">
                  <div className="column">
                    <h6 className="text-center text-mute">PLACE</h6>
                    <h5 className="text-center">{matchDataResponse.yourStats.playerStats.teamPlacement}</h5>
                  </div>
                  <div className="column">
                    <h6 className="text-center text-mute">DURATION</h6>
                    <h5 className="text-center">{gameTime} Minutes</h5>
                  </div>
                </div>
              </div>
              <div className="cardBackground pb-8 radius">
                <div className="cardBackground pb-8 radius">
                  <div className="mb-8 p-16">
                      <p className="overline">YOUR TEAM</p>
                  </div>
                  <TeamTable team={matchDataResponse.yourTeam}></TeamTable>
                </div>
                </div>
            </div>
            <div className={` radius columnRight`}>
              <div className="cardBackground pb-8 mb-8 radius">
                <div className="mb-8 p-16">
                    <p className="overline">STATS</p>
                </div>
                <MatchStatsTable matches={matchesDataResponse} match={matchDataResponse}></MatchStatsTable>
              </div>
              <div className="cardBackground pb-8 radius">
                <div className="mb-8 p-16">
                    <p className="overline">ALL PLAYERS</p>
                </div>
                {matchDataResponse.teams.map((team)=>{
                 return (
                    <TeamTable key={team.teamPosition} team={team} />
                  )  
                    })
                }
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
      
    </div>
  );
}

export default MatchDetails;

export async function getServerSideProps({ query ,res }) {
  console.log(query)
  const onlyName = (user) =>{
    let name = user;
    if (user.includes(" ")) {
     name = name.replace(' ', '%20');
   };
    if (user.includes('#')) {
      name = name.split('#')
    }
    
    return name[0]
};
const parseUser = (user) =>{
  let name = user;
  if (user.includes('#')) {
    name = name.replace('#', '%23');
  }
  if (user.includes(" ")) {
    name = name.replace(' ', '%20');
  };
  return name
}

  const matchesRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}Partidas.php?platform=${query.platform}&user=${parseUser(query.id)}`)
  const match= await fetch(`${process.env.NEXT_PUBLIC_API_URL}Match.php?user=${onlyName(query.id)}&MatchId=${query.matchId}`)
  console.log(`${process.env.NEXT_PUBLIC_API_URL}Match.php?user=${onlyName(query.id)}&MatchId=${query.matchId}`)
  // const matchesRes = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/matches`)
  // const match= await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/match`)

  if(matchesRes.ok && match.ok){
    const matchesDataResponse = await matchesRes.json()
    const matchDataResponse = await match.json()
    const props = {
      matchesDataResponse,
      matchDataResponse
    }
    return {
      props:props
      }
  }else{
    res.writeHead(301, {"Location": "/failed"});
    res.end();
  };
 }
