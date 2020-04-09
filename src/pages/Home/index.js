import React, {useEffect} from "react";
import {Content, ContentBox, Title} from "./style.js";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { Add } from '@material-ui/icons';
import Tool from '../../services/tool';
import User from '../../services/core';
export default function Home() {
    useEffect(() => {
        document.title = "Início - Descola aí"
    }, [])
return(
    <Content>
        <Navbar/>
        <main>
            <Title>Início</Title>
            <section>
            <Link to={'/criar'}>
                <ContentBox>
                    <Add style={{color: '#9B9B9B', fontSize: "50px"}}/>
                    <h4>Nova ferramenta</h4>
                </ContentBox>
            </Link>
            {
                Tool.index().map((element, index) => (
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