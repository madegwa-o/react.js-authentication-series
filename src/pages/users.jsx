import { UseAuthenticationContext } from '../hooks/AuthenticationProvider';
import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

export default function Users() {
    const { accessToken, logout } = UseAuthenticationContext();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axiosInstance.get('/users');
                console.log('Fetched data: ', response.data);

                if (Array.isArray(response.data)) {
                    setUsers(response.data);
                } else {
                    console.error('Unexpected response format:', response.data);
                }
            } catch (error) {
                console.error('Failed to fetch users:', error.message);
            }
        }

        fetchUsers();
    }, [accessToken]);

    useEffect(() => {
        console.log('Updated users state: ', users);
    }, [users]);

    return (
        <div>
            <h1>Welcome to the Users Page</h1>
            <button onClick={logout}>Logout</button>
            <div>
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <p key={index}>{user.annonumousName || 'No username'}</p>
                    ))
                ) : (
                    <p>No users found.</p>
                )}
            </div>
        </div>
    );
}
