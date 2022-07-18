import React from "react";
import { InputContainer } from "./styled";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setRightButtonText }) => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate, setRightButtonText)
    }

    return (
        <InputContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"Nome"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                />
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    fullWidth
                    required
                    margin={"normal"}
                    type={"password"}
                />
                <Button
                    variant={"contained"}
                    type={"submit"}
                    fullWidth
                >
                    Fazer Cadastro
                </Button>
            </form>
        </InputContainer>
    )
}

export default SignUpForm