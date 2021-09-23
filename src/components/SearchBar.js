import React, { useEffect, useState } from 'react'
import axios from 'axios'


function SearchBar() {
    const [heroList, setheroList] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        axios.get('https://api.epicsevendb.com/hero')
            .then(res => {
                console.log(res.data.results)
                setheroList(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    /*
    const users = heroList.map((data, id) => {
        return <div key={id} className="characters">
            <p>{data.name}</p>
        </div>
    })

    */

    return (
        <div className="searchbar">
            <input
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
            />
            {heroList.filter((val) => {
                if (searchTerm == "") {
                    return val
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val,key) => {
                return (
                    <div className="char" key={key}>
                        <button>{val.name}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchBar