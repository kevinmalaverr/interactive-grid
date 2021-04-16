import React, { useEffect, useRef, useState } from "react"
import "./styles.css"
import ArrowLeft from "../icons/ArrowLeft"
import SearchIcon from "../icons/Search"
import useBackNav from "../../hooks/useNavigation"
import Search from "../Search"
import SelectLang from "../SelectLang"

const index = ({ title }) => {
  const back = useBackNav()
  const [open, setOpen] = useState(false)
  const [isPinned, setIsPinned] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([e]) => setIsPinned(e.intersectionRatio < 1),
      { threshold: [1] }
    )

    observer.observe(el)

    return () => observer.unobserve(el)
  }, [])

  return (
    <header
      ref={ref}
      className={`header flex justify-between items-center mb-4 ${
        isPinned ? "pinned" : ""
      }`}
    >
      <button
        type="button"
        className="focus:outline-none focus:ring focus:border-indigo-300"
        onClick={back}
        aria-label="back"
      >
        <ArrowLeft className="text-indigo-900" />
      </button>
      <h1 className="text-2xl text-indigo-900 font-bold">{title}</h1>
      <div className="flex">
        <div className="mr-3">
          <SelectLang />
        </div>
        <button
          type="button"
          aria-label="Search"
          data-tooltip-pos="left"
          onClick={() => setOpen(true)}
        >
          <SearchIcon className="text-indigo-900" />
        </button>
      </div>
      <Search isOpen={open} close={() => setOpen(false)} />
    </header>
  )
}
export default index
