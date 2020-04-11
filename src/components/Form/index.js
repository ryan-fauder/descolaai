import React, {useState} from 'react';
import { Close } from '@material-ui/icons';
import Tool from '../../services/tool';
import User from '../../services/core';
import {Form, Error} from './style';
export default (props) => {
    const [data, setData] = useState({
        name: props.name || '',
        amount:props.amount || 0,
        description: props.description|| '',
        id_user: User.showCurrentUser().id,
        diary_cost: props.diary_cost || 0
    });
    const [message, setMessage] = useState('');
    const createTool = (e) => {
        e.preventDefault();
        const result = Tool.verifyDataTool(data)
        if(!result){
            props.func(data);
            props.close();
        } else{
            setMessage(result);
        }
    }
   return(
    <>
    <Form>
        <Close onClick={props.close} className="exitIcon">Exit</Close>
        <h2>Adicionar uma ferramenta</h2>
        <div className="group-input">
            <label>Ferramenta</label>
            <input onChange={v => setData({...data, name: v.target.value})} 
                    maxLength="15" type="text" value={data.name} 
                    placeholder="Adicionar o nome da ferramenta"/>     
        </div>
        <div className="group-input">
            <label>Descrição</label>
            <input onChange={v => setData({...data, description: v.target.value})} 
                    maxLength="250" type="text" value={data.description} 
                    placeholder="Adicionar uma descrição"/>
        </div>
        <div className="group-input">
            <label>Quantidade</label>
            <input onChange={v => setData({...data, amount: v.target.value})} 
                    value={data.amount} type="number" min="1" 
                    placeholder="Adicionar a quantidade"/>
        </div>
        <div className="group-input">
            <label>Valor diário pelo aluguel</label>
            <input onChange={v => setData({...data, diary_cost: v.target.value})} 
                    value={data.diary_cost} min="0" type="number" 
                    placeholder="Adicionar o valor diário"/>
        </div>
        {
            message &&
                <Error>{message}</Error>
        }
        <button onClick={(e) => createTool(e)}> {props.update ? "Atualizar" : "Alugar"}</button>
    </Form>
    </>
   );
}