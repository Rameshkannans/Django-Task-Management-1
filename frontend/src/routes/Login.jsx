import React, { useState } from 'react'
import { login } from '../endpoints/api'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        login(username, password)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto', gap: '10px' }}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button onClick={handleLogin} style={{ padding: '10px', cursor: 'pointer' }}>Login</button>
        </div>
    )
}

export default Login
