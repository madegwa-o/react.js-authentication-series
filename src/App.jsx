import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UseAuthenticationContext, AuthenticationProvider } from './hooks/AuthenticationProvider';
import './App.css';
import Login from './pages/login.jsx';
import Users from './pages/Users';
import Home from "./pages/home.jsx";

function App() {
    const { accessToken } = UseAuthenticationContext();

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={accessToken ? <Navigate to="/users" /> : <Login />}
                />
                <Route
                    path="/users"
                    element={ <Users />}
                />
            </Routes>
        </Router>
    );
}

const AppWithProvider = () => (
    <AuthenticationProvider>
        <App />
    </AuthenticationProvider>
);

export default AppWithProvider;
