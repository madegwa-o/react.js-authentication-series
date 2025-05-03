import { UseAuthenticationContext } from '../hooks/AuthenticationProvider';
import { useState } from 'react';

export default function Login() {
    const { login } = UseAuthenticationContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
        } catch (error) {
            console.error('Login error:', error.message);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
