import React from 'react'
import "./LoginStyles.css";
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        navigate("/homepage");
    }

  return (
    <div className="loginContainer">
        <div className="loginUserContainer">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div className='inputContainer'>
                    <label htmlFor='username'>User Name: </label>
                    <input name="username" id="username" type="text"/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor='password'>Password: </label>
                    <input name="password" id="password" type="password"/>
                </div>
                <div className='loginBtn'>
                    <button type="submit">Enter</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Login