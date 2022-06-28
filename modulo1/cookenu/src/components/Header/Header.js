import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { useNavigate } from "react-router-dom";
import { goToRecipesListPage, goToLogin } from "../../routes/coodinator"

const Header = () => {

    const navigate = useNavigate()

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToRecipesListPage(navigate)} color="inherit">Cookenu</Button>
                <Button onClick={() => goToLogin(navigate)} color="inherit">Login</Button>
            </StyledToolbar>
        </AppBar>
    );
}

export default Header