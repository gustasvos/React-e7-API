import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './SearchBar.css'
import './CharStatus'
import CharStatus from './CharStatus'


function SearchBar() {
    const [heroList, setHeroList] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        axios.get('https://api.epicsevendb.com/hero')
            .then(res => {
                console.log(res.data.results)
                setHeroList(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // const images2 = heroList.map(item => item.assets)
    // .filter((value, index, self) => self.indexOf(value) === index)

    const images = heroList.map(item => {
        return <div>
            <img src={item.assets.image}></img>
        </div>
    }).filter((value, index, self) => self.indexOf(value) === index)



    // const images = heroList.map((data, id) => {
    //     return <div key={id} className="characters">
    //         <img src={data.assets.image}></img>
    //     </div>
    // })

    const users = heroList.map((data) => {
        return data.name
    })


    const [state, setState] = useState({ data: "" })

    const changeState = (val) => {
        setState({
            data:
                images[users.indexOf(val.name)]
        })
    }

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
                    return null
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <div 
                        className="char"
                        style={{ cursor: 'pointer' }}
                        onClick={() => changeState(val)}
                        >
                        {val.name}
                    </div>
                )
            })}

            <div className="main-container">
                <CharStatus data={state.data} />
            </div>
        </div>
    )
}

export default SearchBar