import React from 'react';
import './Product.css';


function Login() {
    return (

        <form>
            <h1 className='titulli'>Welcome to the Login Components</h1>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Login</button>
        </form>

    );
}




export default Login;