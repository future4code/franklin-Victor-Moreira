import axios from "axios";
import { BASE_URL } from "../constants/urls"
import {goToRecipesListPage} from "../routes/coodinator"

export const login = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            console.log(response)
            clear()
            goToRecipesListPage(navigate)
            setRightButtonText("Logout")
        })
        .catch((error) => {
            alert(error.response.data.message)
            console.log(error)
        })
}

export const signUp = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/signup`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            console.log(response)
            clear()
            goToRecipesListPage(navigate)
            setRightButtonText("Logout")
        })
        .catch((error) => {
            alert(error.response.data.message)
            console.log(error)
        })
}