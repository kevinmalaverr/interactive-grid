import React, { useState } from "react"
import ArrowLeft from "../icons/ArrowLeft"
import Search from "../icons/Search"
import { useBackNav } from "../../hooks/useNavigation"
import SearchModal from "../Modal"

const index = ({ name }) => {
  const back = useBackNav()
  const [open, setOpen] = useState(false)

  return (
    <header className="flex justify-between items-center p-4 mb-4">
      <button
        type="button"
        className="focus:outline-none focus:ring focus:border-indigo-300"
        onClick={back}
        aria-label="back"
      >
        <ArrowLeft />
      </button>
      <h1 className="text-2xl text-indigo-900 font-bold">{name}</h1>
      <button
        type="button"
        aria-label="Search"
        data-tooltip-pos="left"
        onClick={() => setOpen(true)}
      >
        <Search />
      </button>
      <SearchModal isOpen={open} close={() => setOpen(false)} />
    </header>
  )
}
export default index
