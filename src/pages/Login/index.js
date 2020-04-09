import React, {useState, useEffect} from "react";
import {Content, Form, LogoResized, Error} from "./style.js";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { validateLogin } from "../../services/auth";
export default (props) => {
    const [data, setData] = useState({email:"", password:""})
    const [error, setError] = React.useState({state: false, msg_error: ''});
    useEffect(() => {
        document.title = "Conecte-se / Descola aí"
    }, [])

    const validate = () =>{
        const result = validateLogin(data);
        if(!result){
            props.history.push("/inicio");
        }
        else{
            setError({state: true, msg_error: result});
        }
    }
    return(
        <Content> 
        <Form>
            <LogoResized src={Logo} alt="Logo do site Descola ai" />
            <h1>Conecte-se!</h1>  
            <input onChange={v => setData({...data, email: v.target.value})} type="email" name="email" placeholder="Digite seu email"/>
            <input onChange={v => setData({...data, password: v.target.value})} type="password" name="password" placeholder="Digite sua senha"/>
            {error.state? 
                <Error>{error.msg_error}</Error>
                :
                null
            }
            <button onClick={() => validate()} >Entrar</button>
            <hr/>
            <Link to="/cadastro"> Não possui conta? Cadastra-se aqui! </Link>
        </Form>
        </Content>
    );
}