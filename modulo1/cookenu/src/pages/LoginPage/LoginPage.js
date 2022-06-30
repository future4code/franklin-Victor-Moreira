import React from "react";
import { useNavigate } from "react-router-dom";
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png"
import { Button } from "@mui/material";
import LoginForm from "./LoginForm";
import { goToSignUpPage } from "../../routes/coodinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({ setRightButtonText }) => {
    useUnprotectedPage()

    const navigate = useNavigate()

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm setRightButtonText={setRightButtonText} />
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