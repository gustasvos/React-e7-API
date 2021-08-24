import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Character() {
    const [userData, setUserData] = useState([])

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
        return <div key={id}>
            <h2>{data.name}</h2>
        </div>
    })
    return (
        <>
            {users}
        </>
    )
}

export default Character