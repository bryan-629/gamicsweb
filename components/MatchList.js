import React, { useState, useEffect } from 'react'
import Match from './Match';
import MatchHeader from './MatchHeader';

function MatchList({matches,userData,id,setUserName,platform}) {


  return (
      <>
        <MatchHeader matches={matches} userData={userData} />
        {
           matches.userMatch.data.matches.map((match, index) => {
            return(<Match platform={platform} id={id} setUserName={setUserName} index={index} key ={match.matchID} userData={userData} match={match}></Match>)
           })
        }
      </>
  )

}

export default MatchList