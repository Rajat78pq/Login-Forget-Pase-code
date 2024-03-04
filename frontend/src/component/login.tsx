import { useState } from 'react';
import '../css/login.css';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Login() {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();
     

    const handelSubmit = async(e:any)=>{
        e.preventDefault();
        try {
            const response = await Axios.post(`http://localhost:2000/login`,{Email, Password});
            // console.log(response);
                 if(response.data.success){
                    navigate('/succes');
                 }else{
                    alert("Invalid Email or Password");
                 }
        }catch(err){

            console.error(`My Error is :${err}`);
        }
    }

    return (
        <div className="login-container">
            <div className="main-container">
                <div className="branding">
                    <div className="logo">CSE</div>
                    <h1>Elibrary</h1>
                </div>
                <div className="main-login">
                    <form onSubmit={handelSubmit}>
                        <label htmlFor="email">Email</label>
                        <br />
                        <div className="input-box">
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                id="email"
                                placeholder="Enter email address"
                                required
                            />
                        </div>
                        <label htmlFor="psw">Password</label>
                        <br />
                        <div className="input-box">
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                name="psw"
                                id="psw"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        <button className="btn login-btn" type="submit">Login</button>
                    </form>
                    <div className="or">or</div>
                    <div className="btn sign-up-btn">
                        {/* Use Link component for navigation */}
                        <Link to="/Forget">Forgot Password?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;