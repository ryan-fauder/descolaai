import React, { useState, useEffect } from "react";
import {Redirect} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ToolClass from '../../services/tool';
import User from '../../services/core';
import Rent from '../../services/rent';
import {Content, Title} from './style.js';
import {TollOutlined, Image} from '@material-ui/icons'
export default function Tool(props){
    const [tool, setTool] = useState(ToolClass.show(props.match.params.id));
    useEffect(() => {
        document.title = `${tool.name} - Descola aí`
    }, [tool])
    const own_Tool = User.show(tool.id_user);
    const startRent = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        setTool(Rent.store(tool, user));
    }
    return(
    <>
    <Navbar />
    {tool ?
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
                <h3>Por {own_Tool.username}</h3>
                <div className='toll'>
                    <TollOutlined style={{ color:'#DB961F', fontSize: "30px"}} />
                    <h3>R${tool.diary_cost} / dia</h3>
                </div>
                <button onClick={() => startRent()}>Alugar</button>
            </div>
        </Content>
        :
        <Redirect to="/error"/>
    }
    </>
    );
}