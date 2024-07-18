import { Image } from "react-bootstrap"
import searchIcon from "./Loopa.svg"

import './search.css'
import React from "react"

export default function SearchBar() {
  return (
    <div className="search bordered">
      <Image src={searchIcon}/>
      <input className="flex-2" placeholder="поиск по названию" type="text" />
    </div>
  )
}