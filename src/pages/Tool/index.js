import React, { useState, useEffect } from "react";
import {Redirect, Link} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import ToolClass from '../../services/tool';
import User from '../../services/core';
import Rent from '../../services/rent';
import {Content, Title} from './style.js';
import {TollOutlined, Image, Delete, Edit} from '@material-ui/icons'
export default function Tool(props){
    const [tool, setTool] = useState(ToolClass.show(props.match.params.id));
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        document.title = `Ferramenta - Descola aí`
    }, [])
        let own_Tool, user;
        try{
            user = User.showCurrentUser();
            own_Tool = User.show(tool.id_user)
        }
        catch{
            own_Tool = null;
        }
    const startRent = () => {
        setTool({...Rent.store(tool, user)});
    }
    const deleteTool = () =>{
        ToolClass.delete(tool)
        props.history.push("/inicio");
    }
    
    return(
    <>
    <Navbar />
    {tool && user ?
        <Content>
            {showForm &&
            <Form close={() => setShowForm(false)} 
                    func={(e) => ToolClass.update({id: tool.id, ...e})}
                    name={tool.name} amount={tool.amount} 
                    diary_cost={tool.diary_cost} description={tool.description}
                    update={true}/>
            }
            <Image style={{margin:"auto", color:'#CCC ', fontSize: "350px"}} />
            <div className="group">
                <h1>{tool.name}</h1>
                {
                  user.id - tool.id_user===0 &&
                  <div className="icon-control">
                    <Delete style={{fontSize: "30px"}} onClick={() => deleteTool()}/>
                    <Edit style={{fontSize: "30px"}} onClick={() => setShowForm(true)}/>
                  </div>
                }
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
                <button disabled={user.id - tool.id_user===0} onClick={() => startRent()}>Alugar</button>
            </div>
        </Content>
        :<Redirect to="/error"/>
    }
    </>
    );
}