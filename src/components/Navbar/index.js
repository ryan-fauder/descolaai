import React from 'react';
import { Link } from "react-router-dom";
import { Content, Circle} from "./style.js";
import Logo from "../../assets/logo.png";
import { Person} from '@material-ui/icons';
export default function Navbar(){
return(
<Content>
    <div className="group">
        <img src={Logo} alt="Logo do Descola aí"/>
        <h4>Descola aí</h4>
    </div>
    <div className="group">
        <Link to="/inicio">Início</Link>            
        <Link to="/ferramentas">Ferramentas</Link>         
        <Link to="/perfil">
            <Circle>
                <Person style={{ color: "#FFF" }}/> 
            </Circle>
        </Link>        
    </div>     
</Content>
)
}