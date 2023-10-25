import React from 'react'
import { useState } from "react"

const Edit = () => {
    const [task, setTask] = useState('')
    const handleClick = () => {
        
    }
    return (
        <div>
            <h1>Edit</h1>
            <input type="text" onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleClick}>Edit</button>
        </div>
    )
}

export default Edit
