import React from "react";
import {Content, Error} from './style';
import IconError from '@material-ui/icons/Error'
export default () => (
    <Content>
        <IconError style={{fontSize: "10vh"}}/>
        <Error>Página não encontrada!</Error>
    </Content>
)