import React from 'react'
import Link from 'next/link'
import style from '../styles/SearchButton.module.css'
function SearchButton() {
  return (
    <Link href="/">
              <a className={` p-8 ${style.searchButton}`}>
                Search
                <span>
                  <i
                    className={`fa-solid fa-magnifying-glass ${style.lupa}`}
                  ></i>
                </span>
              </a>
    </Link>
  )
}

export default SearchButton