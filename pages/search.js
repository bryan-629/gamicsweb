import React from 'react'
import Head from "next/head";
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Search.module.css"
function search() {
  return (
    
    <div className={styles.searchContainer}>
      <Head>
        <title>Gamics - Search</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <meta name="viewport" content="width=device-width, initial-scale=0.80"></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Unica+One&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="SEARCH YOUR PROFILE OR THE PROFILE OF YOUR FRIENDS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.contentContainer}>
        <div className='jus-center'>
          <Image width={134} height={134} src="/img/LogoCircleDark.png" alt='imagen logo'></Image>
        </div>
        <div className={styles.formContainer}>
          <h4 className='text-center'>
          SEARCH YOUR WARZONE PROFILE
          </h4>
          <input type='text' className={styles.searchInput} placeholder='INSERT ID'></input>
          <Link href="/profile"><a className={`button ${styles.searchBtn} text-center`}>SEARCH</a></Link>
          <h5 className='text-center'>
          SEARCH YOUR PROFILE OR THE PROFILE OF YOUR FRIENDS
          </h5>
        </div>
      </div>
    </div>
  )
}

export default search