
export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToListTripPage = (navigate) => {
    navigate("trips/")
}

export const goToApplicationFormPage = (navigate) => {
    navigate("application/")
}

export const goToLoginPage = (navigate) => {
    navigate("login/")
}

export const goToAdminHomePage = (navigate) => {
    navigate("admin/")
}

export const goToCreateTripPage = (navigate) => {
    navigate("trips/create/")
}

export const goToTripDetailPage = (navigate) => {
    navigate("/trips/:id/")
}

export const goToLastPage = (navigate) => {
    navigate(-1)
}
