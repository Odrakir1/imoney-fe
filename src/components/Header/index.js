import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './styles.css'
import {color} from "../../common/styles"

function Header(props) {
    return (
        <AppBar position="static" style={color.backgroundBrandColor}>
            <Toolbar>

                <h3 className="logo">
                    iMoney
                </h3>
                <nav className="navbar">
                    <ul className="navigation">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Meu Perfil</a>
                        </li>
                        <li>
                            <a href="#">Relatório</a>
                        </li>
                    </ul>
                </nav>
                <Button variant="outlined" color="inherit" endIcon={<ExitToAppIcon />}>
                    Sair
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;