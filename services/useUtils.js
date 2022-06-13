import React from 'react'

function useUtils() {

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

    const formatNumber = (n, d = 3) => {
      return new Intl.NumberFormat('es-ES',{ maximumSignificantDigits: d, minimumSignificantDigits:2 }).format(n)
      }
      
  return [parseUser,getWeekTime,formatNumber]
}

export default useUtils