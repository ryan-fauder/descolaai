import React from 'react';
import { Link } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import { Content, Circle} from "./style.js";
import Logo from "../../assets/logo.png";
import { Person } from '@material-ui/icons';
import User from '../../services/core'
export default function Navbar(){
const current_user = User.showCurrentUser();
return(
<Content>
    <Link to="/inicio">
        <div className="group">
            <img src={Logo} alt="Logo do Descola aí"/>
            <h4>Descola aí</h4>
        </div>
    </Link>
    <div className="group">
        <Link to="/inicio"><p> Início </p></Link>            
        <NavHashLink to={`/perfil/${current_user.username}#ferramentas`}><p> Ferramentas </p></NavHashLink>         
        <NavHashLink to={`/perfil/${current_user.username}#alugados`}><p> Alugados </p></NavHashLink>         
        <Link to={`/perfil/${current_user.username}`}>
            <Circle>
                <Person style={{ color: "#FFF" }}/> 
            </Circle>
        </Link>        
    </div>     
</Content>
)
}