import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import "./styles.css"
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
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Meu Perfil</Link>
                        </li>
                        <li>
                            <Link to="/reports">Relatório</Link>
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