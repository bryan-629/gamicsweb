import React, { useEffect } from "react";

function TeamTable({ team }) {
  return (
    <div className="p-12">
      <div className="bg-hr radius p-8 d-flex">
        <div className="row jus-bet w100">
          <div className={`jus-bet row w100`}>
            <div className="row al-center w100 w25Res ml-12">
              <h5 className="text-overflow w100">{team.teamPosition}</h5>
            </div>
            <div className="row w-70 ">
              <div className={`jus-center column w100`}>
                <p className=" body2 text-mute text-center">KD</p>
                <p className="text-center">
                  {Math.round(team.teamKd * 100) / 100}
                </p>
              </div>
              <div className={`jus-center column w100`}>
                <p className=" body2 text-mute text-center">KILLS</p>
                <p className="text-center">{team.teamKills}</p>
              </div>
              <div className={`jus-center column w100`}>
                <p className=" body2 text-mute text-center">DEATHS</p>
                <p className="text-center">{team.teamDeaths}</p>
              </div>
              <div className={`jus-center column w100`}>
                <p className=" body2 text-mute text-center">ASSISTS</p>
                <p className="text-center">{team.teamAssists}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {team.teamUsers.map((user, index) => {
        console.log(user)
        return (
          <div
            key={user.player.username}
            className={`p-8 d-flex radius  ${index % 2 ? "background" : null}`}
          >
            <div className="row jus-bet w100">
              <div className={`jus-bet row w100`}>
                <div className="row al-center w100  w25Res ">
                  <p className=" text-overflow w100">{user.player.username}</p>
                </div>
                <div className="row w-70 py-12 ml-12">
                  <div className={`jus-center column w100`}>
                    <p className="text-center w100">
                      {Math.round(user.playerStats.kdRatio * 100) / 100}
                    </p>
                  </div>
                  <div className={`jus-center column w100`}>
                    
                    <p className="text-center  w100">{user.playerStats.kills}</p>
                  </div>
                  <div className={`jus-center column w100`}>
                    
                    <p className="text-center  w100">{user.playerStats.deaths}</p>
                  </div>
                  <div className={`jus-center column w100`}>
                    
                    <p className="text-center  w100">{user.playerStats.assists}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TeamTable;
