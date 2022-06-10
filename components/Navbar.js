import React from 'react'

import Image from 'next/image'
import SearchButton from './SearchButton'
function Navbar() {
  return (
    <div className={`jus-bet al-center navBarContainer mb-8`}>
            <Image
              width={42}
              height={42}
              src="/img/Logo_dark.png"
              alt="imagen logo"
            ></Image>
            <h6 className='text-mute'>BETA</h6>
            <SearchButton></SearchButton>
          </div>
  )
}

export default Navbar