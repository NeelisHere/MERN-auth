import React, { useState } from 'react'
import { register } from './utils/API-calls'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(username, password)
        try {
            await register({ username, password })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Register
