import React,{ useEffect } from 'react'


function TeamTable({team}) {
  return (
    <div>
        <div className='hr-color p-8 d-flex'>
            <div className="row jus-bet w100">
                <div className={`jus-center column w-25`}>
                      <h4 className="text-center">
                        {team.teamPosition}
                      </h4>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">KD</p>
                      <h6 className="text-center">
                        {Math.round(team.teamKd * 100 ) / 100}
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      <p className="text-center caption">TeamKills</p>
                      <h6 className="text-center">
                       {team.teamKills}
                      </h6>
                    </div>
            </div>
        </div>
        {team.teamUsers.map((user, index) =>{
           return (
            <div key={user.player.username} className='bg-list1 p-8 d-flex'>
            <div className="row jus-bet w100 ">
                <div className={`jus-center column w-25`}>
                      <h6 className="text-center text-overflow my-12">
                        {user.player.username}
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      
                      <h6 className="text-center">
                      {Math.round(user.playerStats.kdRatio * 100 ) /100 }
                      </h6>
                    </div>
                    <div className={`jus-center column w-25`}>
                      
                      <h6 className="text-center">
                      {user.playerStats.kills}
                      </h6>
                    </div>
            </div>
        </div>
            )
        })}
        
    </div>
  )
}

export default TeamTable