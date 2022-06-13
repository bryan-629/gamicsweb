import React from 'react'
import Image from 'next/image'
import styles from "../styles/SearchSelect.module.css"
function SearchSelect({platform,setPlatform}) {

  return ( //Esto es la botonera de select de la pagina de search. Las condiciones es para cotrolar cual esta en activo y cual no.
    <div className={styles.container}>
      <button className={platform == "psn"?styles.buttonSearchActive:styles.buttonSearchDesactive} onClick={() => setPlatform("psn")}><i className={`fa-brands fa-playstation ${styles.logos}`}></i></button>
      <button className={platform == "xbl"?styles.buttonSearchActive:styles.buttonSearchDesactive} onClick={() => setPlatform("xbl")}><i className={`fa-brands fa-battle-net ${styles.logos}`}></i></button>
      <button className={platform == "battle"?styles.buttonSearchActive:styles.buttonSearchDesactive} onClick={() => setPlatform("battle")}><i className={`fa-brands fa-xbox ${styles.logos}`}></i></button>
      <button className={`al-center ${platform == "uno"?styles.buttonSearchActive : styles.buttonSearchDesactive}`} onClick={() => setPlatform("uno")}><Image alt='CodIcon' width={20} height={20} src='/img/unowt.png'></Image></button>
    </div>
  )
}

export default SearchSelect