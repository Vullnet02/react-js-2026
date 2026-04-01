import React from "react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

function LoginPage() {
    return (
     
<>
<Navbar />
        <div>
            <h1 className='titulli'>Welcome to the Login Page</h1>
        </div>
        <Login/>

        </>

    );
}

export default LoginPage;