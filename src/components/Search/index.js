import React, { useState } from "react"
import "./styles.css"
import { Link } from "gatsby"
import Modal from "../Modal"
import filterSearch from "../../utils/filterSearch"

const Search = ({ isOpen, close }) => {
  const [search, setSearch] = useState("")
  const [allData, setAllData] = useState([])
  const [result, setResult] = useState([])

  useState(() => {
    fetch("/searchIndexes.json")
      .then((res) => res.json())
      .then((res) => setAllData(res))
  }, [])

  const handleChange = (event) => {
    const filtered = filterSearch(allData, event.target.value)
    setSearch(event.target.value)
    setResult(filtered)
  }

  const handleClose = () => {
    setSearch("")
    close()
  }

  return (
    <Modal
      isOpen={isOpen}
      close={handleClose}
      header={
        <form className="search-form">
          <input
            className="search-form__input"
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search"
            autoFocus
          />
        </form>
      }
    >
      {result.map((item) => (
        <Link key={item.href} to={item.href} onClick={handleClose}>
          <div className="search-result__item">
            <p className="search-result__page">{item.page}</p>
            <p>
              {item.title[0]}
              {item.title[1]}
              <strong>{item.title[2]}</strong>
              {item.title[3]}
            </p>
          </div>
        </Link>
      ))}
      {result.length === 0 && search.length !== 0 ? (
        <p className="text-center">No results for &quot;{search}&quot;</p>
      ) : null}
    </Modal>
  )
}

export default Search
