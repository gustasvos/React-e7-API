import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Character() {
    const [userData, setUserData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        axios.get('https://api.epicsevendb.com/hero')
            .then(res => {
                console.log(res.data.results)
                setUserData(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    const users = userData.map((data, id) => {
        return <div key={id} className="characters">
            <p>{data.name}</p>
        </div>
    })


    return (
        <div className="char">
            <input
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
            />
            {userData.filter((val) => {
                if (searchTerm == "") {
                    return val
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val,key) => {
                return (
                    <div className="user" key={key}>
                        <p>{val.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Character