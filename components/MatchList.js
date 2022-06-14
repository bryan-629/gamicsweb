import React, { useState, useEffect } from 'react'

import Match from './Match';
import MatchHeader from './MatchHeader';

function MatchList({matches,userData,id,setUserName,platform}) {
    
  const [totalWins, setTotalWins] = useState(0);
  let wins = 0;  
  // De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => {
      
    for (let index = 0; index <  matches.userMatch.data.matches.length; index++) {
    
      if (matches.userMatch.data.matches[index].playerStats.teamPlacement == 1){
        wins = wins + 1 ;
      }
      
    };
    setTotalWins(wins);
  });

  return (
      <>
        <MatchHeader matches={matches} userData={userData} totalWins={totalWins} />
        {
           matches.userMatch.data.matches.map((match, index) => {
            return(<Match platform={platform} id={id} setUserName={setUserName} index={index} key ={match.matchID} userData={userData} match={match}></Match>)
           })
        }
      </>
  )

}

export default MatchList