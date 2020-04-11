import React, {useState} from "react";
import {Redirect} from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import User from '../../services/core';
import {logout} from '../../services/auth';
import Tool from '../../services/tool';
import Rent from '../../services/rent';
import {Circle, Container, Title} from "./style.js";
import { Person, Settings } from '@material-ui/icons';
export default function Login(props) {
    const [showSettings, setShowSettings] = useState(false);
    const current_user = User.showCurrentUser();
    const perfil_user = User.showByUsername(props.match.params.username);
    const exit = () =>{
        logout();
        props.history.push("/");
    }
    const changePassword = () =>{

    }
    const delAccount = () =>{

    }
    return(
        <>
          {perfil_user && current_user?
          <Container>
            <Navbar />
            <main>
            <section className='perfil-board'>
                <Circle>
                    <Person className= 'iconPerson'/> 
                </Circle>
                <div className='perfil-info'>
                    <div>
                        <h1>{perfil_user.username}</h1>
                        {
                        current_user.id - perfil_user.id === 0 &&
                        <>
                        <Settings onClick={() => setShowSettings(!showSettings)}/>
                        {showSettings &&
                        <div className="perfil-control">
                            <div>
                            <button onClick={() => changePassword()}>Mudar a senha</button>
                            <button className='red' onClick={() => delAccount()}>Deletar a conta</button>
                            </div>
                        </div>
                        }
                        </>
                        }
                    </div>
                    <h3>Email para contato:</h3>
                    <h2>{perfil_user.email}</h2>
                    {
                        current_user.id - perfil_user.id === 0 &&
                    <div>
                        <button onClick={() => exit()} className='red'>Desconectar</button>
                    </div>
                    }
                </div>
            </section>
            {
            current_user.id - perfil_user.id === 0 &&
            <>
            <hr id="alugados"/>
            <section>
                <Title>Alugados</Title>
                <div className='cards'>
                {Rent.indexByIdUser(perfil_user.id).map((element, index) =>{
                    let tool = Tool.show(element.id_tool);
                    return(
                        <Card 
                        key={index}
                        name={tool.name}
                        username={User.show(tool.id_user).username}
                        diary_cost={tool.diary_cost}
                        id={tool.id}
                    />
                    )
                }
                )}   
                </div>            
            </section>
            </>
            }
            <hr id="ferramentas"/>
            <section>
            <Title>Ferramentas</Title>
            <div className='cards'>
            {console.log(Tool.indexByIdUser(perfil_user.id))}
            {Tool.indexByIdUser(perfil_user.id).map((element, index) =>(
                   <Card 
                   key={index}
                   name={element.name}
                   username={User.show(element.id_user).username}
                   diary_cost={element.diary_cost}
                   id={element.id}
                    />
                )
            )}
            </div>
            </section>
        </main>
    </Container>
        :<Redirect to="/error"/>
    }
        </>
    );
}