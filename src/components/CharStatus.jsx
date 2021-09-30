import React, { useState, useEffect } from 'react'


function CharStatus(props) {
    return (
        <div className="main-container">
            <h2>Component2</h2>

            <p>{props.data}</p>
        </div>
    )
}

export default CharStatus