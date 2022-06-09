import React from 'react'
import styles from '../styles/Match.module.css'
function MatchStatsTable({matches,match}) {


  const addClassNegative= (thisMatch,lastTwenty) =>{
      if(thisMatch<lastTwenty){
        return 'text-negative'
      }
  }
  const addClassPositive= (thisMatch,lastTwenty) =>{
    if(thisMatch>lastTwenty){
      return 'text-success'
    }else{
    
    }
  }
  const addArrowResult = (thisMatch,lastTwenty) => {
    if(thisMatch>lastTwenty){
      return true
    }else if(thisMatch == lastTwenty){
      return false
    }
  }
  

  return (
    <div className="column my-12 w100">
                  <div className="row jus-ar w100 hr-color p-16">
                    <div className={ ` w100 ${styles.greenLeft}`}>
                      <h6 className="text-center">THIS MATCH</h6>
                    </div>
                    <div className={ ` ${styles.itemAngle}`}></div>
                    <div className={ ` w100 `}><h6 className="text-center text-mute">STATS</h6></div>
                    <div className={ ` ${styles.itemAngle}`}></div>
                    <div className={ ` w100 `}><h6 className="text-center">LAST 20 MATCHES</h6></div>
                  </div>
                  <div className="row jus-ar w100 p-16 al-center bg-list1">
                    <div className={ ` w100 ${styles.greenLeft}`}>
                      <h6 className={`text-center ${addClassPositive(match.yourStats.playerStats.kills,matches.userMatch.data.summary.all.killsPerGame)}`}>{match.yourStats.playerStats.kills}</h6>
                    </div>
                    <div className={ ` ${styles.itemAngle}`}>{addArrowResult(match.yourStats.playerStats.kills,matches.userMatch.data.summary.all.killsPerGame)? (<i className="fa-solid fa-angle-left text-success"></i>):(null)}</div>
                    <div className={ ` w100`}>
                      <h6 className="text-center text-mute">KILLS/MATCH</h6>
                    </div>
                    <div className={ ` ${styles.itemAngle}`}>{addArrowResult(match.yourStats.playerStats.kills,matches.userMatch.data.summary.all.killsPerGame)? (null):(<i className="fa-solid fa-angle-right text-negative"></i>)}</div>
                    <div className={ ` w100 ${styles.greenLeft}`}>
                      <h6 className={`text-center ${addClassNegative(match.yourStats.playerStats.kills,matches.userMatch.data.summary.all.killsPerGame)}`}>{matches.userMatch.data.summary.all.killsPerGame}</h6>
                    </div>
                  </div>
                  <div className="row jus-ar w100 p-16 al-center bg-list2">
                    <div className={ ` w100 ${styles.greenLeft}`}>
                      <h6 className={`text-center ${addClassPositive(Math.round(match.yourStats.playerStats.scorePerMinute * 100) /100 ,Math.round(matches.userMatch.data.summary.all.scorePerMinute * 100) /100)}`}>{Math.round(match.yourStats.playerStats.scorePerMinute * 100)/100}</h6>
                    </div>
                    <div className={ ` ${styles.itemAngle}`}>{addArrowResult(Math.round(match.yourStats.playerStats.scorePerMinute * 100) /100 ,Math.round(matches.userMatch.data.summary.all.scorePerMinute * 100) /100)? (<i className="fa-solid fa-angle-left text-success"></i>):(null)}</div>
                    <div className={ ` w100`}>
                      <h6 className="text-center text-mute">SCORE/MIN</h6>
                    </div>
                    <div className={ ` ${styles.itemAngle}`}>{addArrowResult(Math.round(match.yourStats.playerStats.scorePerMinute * 100) /100 ,Math.round(matches.userMatch.data.summary.all.scorePerMinute * 100) /100)? (null):(<i className="fa-solid fa-angle-right text-negative"></i>)}</div>
                    <div className={ ` w100 ${styles.greenLeft}`}>
                      <h6 className={`text-center ${addClassNegative(Math.round(match.yourStats.playerStats.scorePerMinute * 100) /100 ,matches.userMatch.data.summary.all.killsPerGame)}`}>{Math.round(matches.userMatch.data.summary.all.scorePerMinute * 100) /100}</h6>
                    </div>
                  </div>
                  <div className="row jus-ar w100 p-16 al-center bg-list1">
                    <div className={ ` w100 ${styles.greenLeft}`}>
                      <h6 className={`text-center ${addClassPositive(match.yourStats.playerStats.damageDone ,matches.userMatch.data.summary.all.damageDone / 20)}`}>{match.yourStats.playerStats.damageDone }</h6>
                    </div>
                    <div className={ ` ${styles.itemAngle}`}>{addArrowResult(match.yourStats.playerStats.damageDone ,matches.userMatch.data.summary.all.damageDone / 20)? (<i className="fa-solid fa-angle-left text-success"></i>):(null)}</div>
                    <div className={ ` w100`}>
                      <h6 className="text-center text-mute">DAMAGE DONE AVG</h6>
                    </div>
                    <div className={ ` ${styles.itemAngle}`}>{addArrowResult(match.yourStats.playerStats.damageDone ,matches.userMatch.data.summary.all.damageDone / 20)? (null):(<i className="fa-solid fa-angle-right text-negative"></i>)}</div>
                    <div className={ ` w100 ${styles.greenLeft}`}>
                      <h6 className={`text-center ${addClassNegative(match.yourStats.playerStats.damageDone ,matches.userMatch.data.summary.all.damageDone / 20)}`}>{matches.userMatch.data.summary.all.damageDone / 20}</h6>
                    </div>
                  </div>
                  <div className="row jus-ar w100 p-16 al-center bg-list2">
                    <div className={ ` w100 ${styles.greenLeft}`}>
                      <h6 className={`text-center ${addClassPositive( matches.userMatch.data.summary.all.damageTaken / 20, match.yourStats.playerStats.damageTaken)}`}>{match.yourStats.playerStats.damageTaken }</h6>
                    </div>
                    <div className={ ` ${styles.itemAngle}`}>{addArrowResult(matches.userMatch.data.summary.all.damageTaken / 20, match.yourStats.playerStats.damageTaken)? (<i className="fa-solid fa-angle-left text-success"></i>):(null)}</div>
                    <div className={ ` w100`}>
                      <h6 className="text-center text-mute">DAMAGE TAKEN AVG</h6>
                    </div>
                    <div className={ ` ${styles.itemAngle}`}>{addArrowResult(matches.userMatch.data.summary.all.damageTaken / 20, match.yourStats.playerStats.damageTaken)? (null):(<i className="fa-solid fa-angle-right text-negative"></i>)}</div>
                    <div className={ ` w100 ${styles.greenLeft}`}>
                      <h6 className={`text-center ${addClassNegative( matches.userMatch.data.summary.all.damageTaken / 20, match.yourStats.playerStats.damageTaken)}`}>{matches.userMatch.data.summary.all.damageTaken / 20}</h6>
                    </div>
                  </div>
                  <div className="row jus-ar w100 p-16 al-center bg-list1">
                    <div className={ ` w100 ${styles.greenLeft}`}>
                      <h6 className={`text-center ${addClassPositive(Math.round(match.yourStats.playerStats.headshots * 100 / match.yourStats.playerStats.kills *100 )/100, Math.round(matches.userMatch.data.summary.all.headshotPercentage *10000) / 100)}`}>{Math.round(match.yourStats.playerStats.headshots * 100 / match.yourStats.playerStats.kills *100 )/100}%</h6>
                    </div>
                    <div className={ ` ${styles.itemAngle}`}>{addArrowResult(Math.round(match.yourStats.playerStats.headshots * 100 / match.yourStats.playerStats.kills *100 )/100, Math.round(matches.userMatch.data.summary.all.headshotPercentage *10000) / 100)? (<i className="fa-solid fa-angle-left text-success"></i>):(null)}</div>
                    <div className={ ` w100`}>
                      <h6 className="text-center text-mute">HEADSHOT%</h6>
                    </div>
                    <div className={ ` ${styles.itemAngle}`}>{addArrowResult(Math.round(match.yourStats.playerStats.headshots * 100 / match.yourStats.playerStats.kills *100 )/100, Math.round(matches.userMatch.data.summary.all.headshotPercentage *10000) / 100)? (null):(<i className="fa-solid fa-angle-right text-negative"></i>)}</div>
                    <div className={ ` w100 ${styles.greenLeft}`}>
                      <h6 className={`text-center ${addClassNegative(Math.round(match.yourStats.playerStats.headshots * 100 / match.yourStats.playerStats.kills *100 )/100, Math.round(matches.userMatch.data.summary.all.headshotPercentage *10000) / 100)}`}>{Math.round(matches.userMatch.data.summary.all.headshotPercentage *10000) / 100}%</h6>
                    </div>
                  </div>
                </div>
  )
}

export default MatchStatsTable