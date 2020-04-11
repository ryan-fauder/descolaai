import React, {useEffect, useState} from "react";
import {Content, ContentBox, Title} from "./style.js";
import Form from "../../components/Form";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { Add } from '@material-ui/icons';
import Tool from '../../services/tool';
import User from '../../services/core';
export default function Home(props) {
    useEffect(() => {
        document.title = "Início - Descola aí"
    }, [])
    const currentUser = User.showCurrentUser();
    const [showForm, setShowForm] = useState(false);
    const tools = Tool.index();
return(
    <Content>
        <Navbar/>
        {
            showForm &&
            <Form close={() => setShowForm(false)} func={(e) =>{
                Tool.store(e)
                props.history.push(`/ferramenta/${tools[tools.length -1].id}`);
            }} />
        }
        <main>
            <Title>Início</Title>
            <section>
                <ContentBox onClick={() => setShowForm(true)}>
                    <Add style={{color: '#9B9B9B', fontSize: "50px"}}/>
                    <h4>Nova ferramenta</h4>
                </ContentBox>
            {
                tools.map((element, index) => (
                    element.amount > 0 && element.id_user !== currentUser.id &&
                    <Card 
                        key={index}
                        name={element.name}
                        username={User.show(element.id_user).username}
                        diary_cost={element.diary_cost}
                        id={element.id}
                    />
                ))
            }
            </section>
        </main>
    </Content>
);
}