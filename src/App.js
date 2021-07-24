import React, { Component } from 'react'
import Search from './components/Search'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            character: {}
        }
    }

    componentDidMount() {
        fetch("https://api.epicsevendb.com/hero")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    character: result
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.character.results ? this.state.character.results[55].name : null}
            </div>
        )
    }

}

export default App