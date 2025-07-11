import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import FullWidthCenter from '../fullWidthCenter';
import Button from '../button';
import { initLogin } from '../../service/loginService';
import { setRoles } from '../../utils/slice/rolesSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleInputChange = useCallback((field) => (e) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
        if (error) setError("");
    }, [error]);

    const handleSubmit = useCallback(async (e) => {
        e?.preventDefault();

        const { username, password } = formData;

        if (!username.trim() || !password.trim()) {
            setError("Please enter both username and password");
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const roles = await initLogin(username.trim(), password);
            if (roles) {
                dispatch(setRoles(roles));
                navigate("/home", { replace: true });
            } else {
                setError("Invalid username or password");
            }
        } catch (err) {
            setError("Login failed. Please try again.");
            console.error("Login error:", err);
        } finally {
            setIsLoading(false);
        }
    }, [formData, dispatch, navigate, error]);

    const handleKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }, [handleSubmit]);

    return (
        <FullWidthCenter>
            <div style={{ minWidth: '500px' }}>
                <form onSubmit={handleSubmit}>
                    <label className="form-label mt-4">Login</label>

                    <div className="form-floating mb-3">
                        <input
                            id="username"
                            className="form-control"
                            value={formData.username}
                            onChange={handleInputChange('username')}
                            onKeyPress={handleKeyPress}
                            placeholder="Username"
                            autoComplete="username"
                            disabled={isLoading}
                            required
                        />
                        <label htmlFor="username">Username</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            id="password"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange('password')}
                            onKeyPress={handleKeyPress}
                            autoComplete="current-password"
                            disabled={isLoading}
                            required
                        />
                        <label htmlFor="password">Password</label>
                    </div>

                    <Button
                        text={isLoading ? "Logging in..." : "Login"}
                        onClick={handleSubmit}
                        disabled={isLoading}
                    />

                    {error && (
                        <div className="alert alert-dismissible alert-danger mt-3">
                            {error}
                        </div>
                    )}
                </form>
            </div>
        </FullWidthCenter>
    );
};

export default Login;