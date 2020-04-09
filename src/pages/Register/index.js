import React,{useEffect}from "react";
import {Content, Form, LogoResized, Error} from "./style.js";
import { Link} from "react-router-dom";
import Logo from "../../assets/logo.png";
import User from "../../services/core";
import { validate } from "../../services/auth";

export default function Register(props) {
    const [data, setData] = React.useState({
        username: "",
        name:"",
        email:"",
        token: "",
        password:""
    });
    useEffect(() => {
        document.title = "Cadastro - Descola aí"
    }, [])

    const [error, setError] = React.useState({state: false, msg_error: ''});
    const validateData = () =>{
        const resultValidation = validate(data);
        if(!resultValidation){
            User.store(data);
            props.history.push("/");
        }
        else{
            setError({state: true, msg_error: resultValidation});
        }
    }
    return(
    <Content> 
        <Form>
            <LogoResized src={Logo} alt="Logo do site Descola ai" />
            <h1>Cadastre-se!</h1> 
            <input onChange={v => setData({...data, username: v.target.value})} type="text" name="username" placeholder="Digite um nome de usuário"/>
            <input onChange={v => setData({...data, name: v.target.value})} type="text" name="name" placeholder="Digite seu nome e sobrenome"/>
            <input onChange={v => setData({...data, email: v.target.value})} type="email" name="email" placeholder="Digite seu e-mail"/>
            <input onChange={v => setData({...data, password: v.target.value})} type="password" name="password" placeholder="Digite sua senha"/>
            {error.state? 
                <Error>{error.msg_error}</Error>
                :
                null
            }
            <button onClick={validateData} type="submit">Cadastrar</button>
            <hr/>
            <Link to="/"> Já possui uma conta? Conecte-se aqui! </Link>
        </Form>    
    </Content>
    );
}