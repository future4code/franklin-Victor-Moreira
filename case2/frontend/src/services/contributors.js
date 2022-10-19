import axios from "axios";
import { BASE_URL } from "../constants/urls"

export const getContributors = (form) => {
    axios.get(`${BASE_URL}/contributors`, form)
        .then((response) => {
            setContributors(response.data.contributorsDb)
        })
        .catch((error) => {
            console.log(error.response)
        })
}

export const postContributor = () => {
    axios.post(`${BASE_URL}/contributors`, form)
        .then((response) => {
            setContributors(response.data.contributorsDb)
        })
        .catch((error) => {
            console.log(error.response)
        })
}

export const deleteContributor = (id) => {
    axios.delete(`${BASE_URL}/contributors/${id}`)
        .then((response) => {
            setContributors(response.data.contributorsDb)
        })
        .catch((error) => {
            console.log(error.response)
        })
}