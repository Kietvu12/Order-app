import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // For token decoding
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext);
    const [currState, setCurrState] = useState("Sign Up");
    const [showSuccess, setShowSuccess] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const onLogin = async (event) => {
        event.preventDefault();
        const endpoint = `${url}api/user/${currState === "Login" ? "login" : "register"}`;

        try {
            const response = await axios.post(endpoint, data);
            if (response.data.success) {
                const token = response.data.token;
                setToken(token);
                localStorage.setItem("token", token);

                // Decode token to check role
                const decoded = jwtDecode(token);
                const role = decoded.role;

                if (role === 3) {
                    window.location.href = "http://localhost:5173/";
                } else if (role === 1) {
                    window.location.href = "http://localhost:5173/admin/add";
                } else {
                    alert("Unauthorized role!");
                }
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    const closePopup = () => {
        setShowSuccess(false);
        setShowLogin(false);
    };

    return (
        <div className="login-popup">
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img src={assets.cross_icon} onClick={closePopup} alt="Close" />
                </div>
                {showSuccess ? (
                    <div className="success-message">
                        <h3>Account created successfully!</h3>
                        <p>Your account has been created.</p>
                        <button onClick={() => setCurrState("Login")}>Go to Login</button>
                    </div>
                ) : (
                    <>
                        <div className="login-popup-input">
                            {currState !== "Login" && (
                                <input
                                    type="text"
                                    name='name'
                                    onChange={onChangeHandler}
                                    value={data.name}
                                    placeholder='Your name'
                                    required
                                />
                            )}
                            <input
                                type="email"
                                name='email'
                                onChange={onChangeHandler}
                                value={data.email}
                                placeholder='Your email'
                                required
                            />
                            <input
                                type="password"
                                name='password'
                                onChange={onChangeHandler}
                                value={data.password}
                                placeholder='Your Password'
                                required
                            />
                        </div>
                        <button type='submit'>
                            {currState === "Sign Up" ? "Create account" : "Login"}
                        </button>
                        <div className="login-popup-condition">
                            <input type="checkbox" required />
                            <p>By continuing, I agree to the terms of use & privacy policy</p>
                        </div>
                        {currState === "Login" ? (
                            <p>Create new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                        ) : (
                            <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                        )}
                    </>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
