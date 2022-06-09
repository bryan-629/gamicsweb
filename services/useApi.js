import React from 'react'
import useUtils from './useUtils';

function useApi() { // hacemos un "Hook" donde tenemos todas las apis para la solicitud de data al back.
  
  const [parseUser,getWeekTime] = useUtils();

    const getSearchingUsers = (userId, platform,setterResult)  => { // retorna el usuario que está escribiendo en el input de la pagina de search.
        if (userId!=''){
        
          //console.log(`${process.env.NEXT_PUBLIC_API_URL}search.php/?platform=${platform}&query=${userId}`);
          fetch(`${process.env.NEXT_PUBLIC_API_URL}search.php/?platform=${platform}&query=${parseUser(userId)}`, { method: 'GET' }).then((res) => res.json()).then((data) => {setterResult(data)})
        };
    };

    const playerStats = (platform, userId, setfunctionState) => { //Busca los stats de un usuario

      let dataTime = getWeekTime() 
      const user = parseUser(userId);
     // console.log(`${process.env.NEXT_PUBLIC_API_URL}UserData.php?platform=${platform}&user=${user.toString()}&periods[]=${dataTime[0]}&periods[]=${dataTime[1]}&periods[]=${dataTime[2]}&periods[]=${dataTime[3]}&periods[]=${dataTime[4]}&periods[]=${dataTime[5]}&periods[]=${dataTime[6]}`);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}UserData.php?platform=${platform}&user=${user.toString()}&periods[]=${dataTime[0]}&periods[]=${dataTime[1]}&periods[]=${dataTime[2]}&periods[]=${dataTime[3]}&periods[]=${dataTime[4]}&periods[]=${dataTime[5]}&periods[]=${dataTime[6]}`,{ method: 'GET' }).then((res) => res.json()).then((data) => { setfunctionState(data) })
    }
    const getPartidasUser = (platform,userId, setfunctionState) => {
     // console.log(`${process.env.NEXT_PUBLIC_API_URL}Partidas.php?platform=${platform}&user=${parseUser(userId)}`);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}Partidas.php?platform=${platform}&user=${parseUser(userId)}`, { method: 'GET' }).then((res) => res.json()).then((data) => { setfunctionState(data) })
    }
    const getMatch = (MatchId,userId, setfunctionState) => {
      console.log(`${process.env.NEXT_PUBLIC_API_URL}Match.php?MatchId=${MatchId}&user=${userId}`);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}Match.php?MatchId=${MatchId}&user=${userId}`, { method: 'GET' }).then((res) => res.json()).then((data) => { setfunctionState(data) })
    }

  return [getSearchingUsers,playerStats,getPartidasUser,getMatch]
}

export default useApi