import React from 'react';
import { Link } from "react-router-dom";
import {Content} from './style';
import {TollOutlined, Image} from '@material-ui/icons'
export default function Card(props){
    return(
        <Link to={`/ferramenta/${props.id}`} style={{textDecoration: "none", color: "#000"}}>
            <Content>
                <Image style={{margin:"auto", color:'#CCC ', fontSize: "150px"}} />
                <div className="group">
                    <h1>{props.name}</h1>
                    <h4>Por {props.username}</h4>
                    <div>
                        <TollOutlined style={{color:'#DB961F ', fontSize: "30px"}} />
                        <h3>R${props.diary_cost} / dia</h3>
                    </div>
                </div>
            </Content>
        </Link>
    )
}