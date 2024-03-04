import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/login.css'; // Import your CSS file here
import { useState } from 'react';
import Axios from 'axios';

function ForgetPsw (){
    const [forgetEmail, setfrogetEmail]= useState('');

    const emailForget =async(e:any)=>{
        e.preventDefault()
        try{
            await Axios.post(`http://localhost:2000/forget`,{Email:forgetEmail});
        }catch(err){
            console.log(`Frontend Error is ${err}`);
        }
    }

    return (
        <div className="login-container">
            <div className="main-container">
                <div className="branding">
                    <div className="logo">CSE</div>
                    <h1>Elibrary</h1>
                </div>
                <div className="ug">
                    <p>Enter Login email, check the mail for OTP & complete the verification process.</p>
                </div>
                <div className="main-login">
                    <label htmlFor="email">Email</label>
                    <br />
                    <div className="input-box">
                        <input type="email" onChange={(e)=> setfrogetEmail(e.target.value)} name="email" id="email" placeholder="Enter email address" required />
                    </div>
                    <button className="btn login-btn" type="submit" onClick={emailForget}>Send OTP</button>
                </div>
                <div className="or">or</div>
                <div className="btn sign-up-btn">
                    {/* Use Link component for navigation */}
                    <Link to="/">Back to home</Link>
                </div>
            </div>
        </div>
    );
}

export default ForgetPsw;
