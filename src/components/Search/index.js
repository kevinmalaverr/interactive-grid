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
    setSearch(event.target.value)
    const filtered = filterSearch(allData, event.target.value)
    setResult(filtered)
  }

  console.log(search)
  return (
    <Modal
      isOpen={isOpen}
      close={close}
      header={
        <form className="search-form">
          <input
            className="search-form__input"
            type="text"
            value={search}
            onChange={handleChange}
          />
        </form>
      }
    >
      {result.map((item) => (
        <Link to={item.href}>
          <div className="search-result__item">
            <p className="search-result__page">{item.page}</p>
            <p>
              <strong>{item.title}</strong>
            </p>
          </div>
        </Link>
      ))}
    </Modal>
  )
}

export default Search
