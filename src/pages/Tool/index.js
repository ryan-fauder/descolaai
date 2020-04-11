import React, { useState, useEffect } from "react";
import {Redirect, Link} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ToolClass from '../../services/tool';
import User from '../../services/core';
import Rent from '../../services/rent';
import {Content, Title} from './style.js';
import {TollOutlined, Image} from '@material-ui/icons'
export default function Tool(props){
    const [tool, setTool] = useState(ToolClass.show(props.match.params.id));
    useEffect(() => {
        document.title = `${tool.amount} - Descola aí`
    }, [tool])
    const own_Tool = User.show(tool.id_user);
    const user = User.showCurrentUser();
    const startRent = () => {
        setTool({...Rent.store(tool, user)});
    }
    return(
    <>
    <Navbar />
    {tool && user ?
        <Content>
            <Image style={{margin:"auto", color:'#CCC ', fontSize: "350px"}} />
            <div className="group">
                <h1>{tool.name}</h1>
                <div className='subgroup'>
                    <Title>Quantidade:</Title>
                    <h3>{tool.amount}</h3>
                </div>
                <div className='subgroup'>
                    <Title>Descrição:</Title>
                    <h3>{tool.description}</h3>
                </div>
                <Link to={`/perfil/${own_Tool.username}`}><h3>Por {own_Tool.username}</h3></Link>
                <div className='toll'>
                    <TollOutlined style={{ color:'#DB961F', fontSize: "30px"}} />
                    <h3>R${tool.diary_cost} / dia</h3>
                </div>
                <button disable={user.id-tool.id_user===0} onClick={() => startRent()}>Alugar</button>
            </div>
        </Content>
        :<Redirect to="/error"/>
    }
    </>
    );
}