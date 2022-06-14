import React,{ useEffect } from 'react'


function TeamTable({team}) {
  return (
    <div className='p-12'>
        <div className='bg-hr radius p-8 d-flex'>
            <div className="row jus-bet w100">
                <div className={`jus-center column w-25`}>
                      <h5 className="text-center">
                        {team.teamPosition}
                      </h5>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className=" body2 text-mute text-center">KD</p>
                      <p className="text-center">
                        {Math.round(team.teamKd * 100 ) / 100}
                      </p>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className=" body2 text-mute text-center">TeamKills</p>
                      <p className="text-center">
                       {team.teamKills}
                      </p>
                    </div>
            </div>
        </div>
        {team.teamUsers.map((user, index) =>{
           return (
            <div key={user.player.username} className={`p-8 d-flex radius  ${index %2 ? ("background"): (null)}`}>
            <div className="row jus-bet w100 ">
                <div className={`jus-center column w-25`}>
                      <p className="text-center body2 text-overflow my-12">
                        {user.player.username}
                      </p>
                    </div>
                    <div className={`jus-center column w-25`}>
                      
                      <p className="text-center">
                      {Math.round(user.playerStats.kdRatio * 100 ) /100 }
                      </p>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center">
                      {user.playerStats.kills}
                      </p>
                    </div>
            </div>
        </div>
            )
        })}
        
    </div>
  )
}

export default TeamTable