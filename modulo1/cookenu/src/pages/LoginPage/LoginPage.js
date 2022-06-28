import React from "react";
import { useNavigate } from "react-router-dom";
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png"
import { Button } from "@mui/material";
import LoginForm from "./LoginForm";
import {goToSignUpPage} from "../../routes/coodinator"

const LoginPage = () => {

    const navigate = useNavigate()

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm/>
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUpPage(navigate)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    margin={"normal"}
                >
                    Não possui conta? Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage