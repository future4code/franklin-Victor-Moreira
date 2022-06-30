import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { useNavigate } from "react-router-dom";
import { goToRecipesListPage, goToLogin } from "../../routes/coodinator"

const Header = ({ rightButtonText, setRightButtonText }) => {
    const token = localStorage.getItem("token")

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("Login")
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
        }
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToRecipesListPage(navigate)} color="inherit">Cookenu</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
    );
}

export default Header