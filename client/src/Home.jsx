import React, { useCallback, useEffect, useState } from 'react'
import { getTasksAPI } from './utils/API-calls'

const Home = () => {
    const [tasks, setTasks] = useState(null)
    const [loggedInUser, setLoggedInUser] = useState(null)
    const getTasks = useCallback(async () => {
        const { data } = await getTasksAPI()
        // console.log(data)
        setTasks([...data.tasks])
        setLoggedInUser(data.user)
    }, [])
    useEffect(() => {
        getTasks()
    }, [getTasks])

    const handleDelete = () => {}
    const handleEdit = () => {}

    return (
        <div>
            <h1>Home</h1>
            <p>{loggedInUser?.username}</p>

            {
                tasks?.map((task, index) => {
                    return(
                        <div key={index} style={{ border: '2px solid black' }}>
                            <div>{task.text}</div>
                            <div style={{ display: 'flex', gap: '2' }}>
                                <button onClick={handleDelete}>Delete</button>
                                <button onClick={handleEdit}>Edit</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home
