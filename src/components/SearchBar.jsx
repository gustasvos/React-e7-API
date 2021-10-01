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

    // imagens dos personagens 
    const images = heroList.map(item => {
        return <div>
            <img src={item.assets.image}></img>
        </div>
    }).filter((value, index, self) => self.indexOf(value) === index)


    // nomes dos personagens 
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

    return (
        <div className="form__group field">
            <div className="searchbar">
            <input
                type="text"
                className="form__field"
                placeholder="Search"
                autoComplete="off"
                id="name"
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
            />
            <label for="name" className="form__label">Search</label>

            {heroList.filter((val) => {
                if (searchTerm == "") {
                    return null
                } else if (val.name.toLowerCase().startsWith(searchTerm.toLowerCase())) {
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
            </div>
            <div className="imagem">
                <CharStatus data={state.data} />
            </div>
        </div>
    )
}

export default SearchBar