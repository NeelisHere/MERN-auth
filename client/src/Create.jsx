import { useState } from "react"


const Create = () => {
    const [task, setTask] = useState('')
    const handleClick = () => {
        
    }
    return (
        <div>
            <h1>Create</h1>
            <input type="text" onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleClick}>Create</button>
        </div>
    )
}

export default Create
