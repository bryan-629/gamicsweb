import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Navbar() {
  return (
    <div className={`jus-bet al-center navBarContainer mb-8`}>
            <Image
              width={50}
              height={50}
              src="/img/Logo_dark.png"
              alt="imagen logo"
            ></Image>
            <h4>BETA</h4>
            <Link href="/">
              <a className={` p-8 searchButton`}>
                Search
                <span>
                  <i
                    className={`fa-solid fa-magnifying-glass lupa`}
                  ></i>
                </span>
              </a>
            </Link>
          </div>
  )
}

export default Navbar