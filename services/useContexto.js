import React, {useState,useEffect} from 'react'


function useContexto() { // hacemos un "Hook" donde tenemos todas las apis para la solicitud de data al back.
  
  const [userData, setuserData] = useState();
  const [matches, setMatches] = useState();

  return  [userData,setuserData,matches,setMatches]
}

export default useContexto