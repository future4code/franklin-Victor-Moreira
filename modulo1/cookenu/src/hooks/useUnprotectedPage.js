import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"
import {goToRecipesListPage} from "../routes/coodinator"

const useUnprotectedPage = () => {
    const navigate = useNavigate()

    const validation = () => {
        const token = localStorage.getItem("token")
        if (token) {
            goToRecipesListPage(navigate)
        }
    }

    useLayoutEffect(validation, [navigate])
}

export default useUnprotectedPage