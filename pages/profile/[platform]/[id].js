import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../../../components/Heading";
import styles from "../../../styles/Profile.module.css";
import  Router from 'next/router';
import Profile from "../../../components/profile";


function ProfileAndMatchDetails({userDataResponse,matchDataResponse}) {

  const router = useRouter();
  const { id, platform } = router.query;
  const [loading,setLoading] = useState()
  const [userName,setUserName] = useState();


  const start = () =>{
    setLoading(true)
  }
  const end = () =>{
    setLoading(false)
  }
    
  useEffect(() =>{
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
  },[])


  
  return (
    <div className={`background mainContaner `}>
      
      <Heading page={id ? id : ""}></Heading>
      
      
      {userDataResponse && matchDataResponse? (
        
        <>
        {loading?
        (<div className={`jus-center al-center ${styles.loading}`}>
          <h3>Loading...</h3>
        </div>
        ):(
          <Profile platform={platform} setUserName={setUserName} userData={userDataResponse} id={id} matches={matchDataResponse}></Profile>
        )}
         {/*<MatchDetails userName={userName} matches={matches} matchId={matchId}></MatchDetails>*/}
       </>
      ) : (
        <div className={`jus-center al-center ${styles.loading}`}>
          <h3>Loading...</h3>
        </div>
      )}
    </div>
  );
}



export default ProfileAndMatchDetails;


export async function getServerSideProps({ query , res }) {

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
 const matchesRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}Partidas.php?platform=${query.platform}&user=${parseUser(query.id)}`)
  const userRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}UserData.php?platform=${query.platform}&user=${parseUser(query.id)}&periods[]=${dataTime[0]}&periods[]=${dataTime[1]}&periods[]=${dataTime[2]}&periods[]=${dataTime[3]}&periods[]=${dataTime[4]}&periods[]=${dataTime[5]}&periods[]=${dataTime[6]}`)
  console.log(`${process.env.NEXT_PUBLIC_API_URL}Partidas.php?platform=${query.platform}&user=${parseUser(query.id)}`)
  // const userRes = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/${query.platform}`)
  // const matchesRes = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/matches`)


  if(userRes.ok && matchesRes.ok ){
    const userDataResponse = await userRes.json()
    const matchDataResponse = await matchesRes.json()

    const props = {
      userDataResponse,
      matchDataResponse
    }
    
    return {
      props:props
      }
  }else{
    res.writeHead(301, {"Location": "/failed"});
    res.end();
  }
}
