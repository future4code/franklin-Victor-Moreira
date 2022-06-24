export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSignUpPage = (navigate) => {
    navigate("/cadastro")
}

export const goToRecipesListPage = (navigate) => {
    navigate("/")
}

export const goToAddRecipesPage = (navigate) => {
    navigate("/adicionar-receita")
}

export const goToRecipeDetailPage = (navigate,id) => {
    navigate("/detalhe/:id")
}

export const goToLastPage = (navigate) => {
    navigate(-1)
}
