import React from "react";
import { useNavigate } from "react-router-dom";

import { goToSignUpPage } from "../../routes/coodinator";

const LoginPage = () => {
    const navigate = useNavigate()

    return(
        <div>
            <h1>LoginPage</h1>
            <button onClick={() => goToSignUpPage(navigate)}>goToSignUpPage</button>
        </div>
    )
}

export default LoginPage