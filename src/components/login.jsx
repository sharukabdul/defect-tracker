import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleSignIn = () => {
        if(username && password) {
            navigate("/view-defects");
            localStorage.setItem("user", formData.username);
        } else {
            alert("Please enter your credentials!");
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const { username, password } = formData;
    return (
        <div className="login-container">
            <h1>Defect Tracker</h1>
            <div className="login-header">
                <h5>Login</h5>
            </div>
            <div className="form-container">
                <div className="form-label-container">
                    <label>Username</label>
                    <input type="text" placeholder="Enter Username" name="username" value={username} onChange={handleChange} />
                </div>
                <div className="form-label-container">
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
                </div>
                <button onClick={handleSignIn}>Sign in</button>
            </div>
        </div>
    );
}