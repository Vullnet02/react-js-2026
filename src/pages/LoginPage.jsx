import React from "react";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

function LoginPage() {
    return (
     
<>
<Navbar />
        <div>
            <h1 className='titulli'>Welcome to the Login Page</h1>
        </div>
        <LoginForm/>

        </>

    );
}

export default LoginPage;