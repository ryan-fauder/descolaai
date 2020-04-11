import style from 'styled-components'
export const Form = style.form`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
 
    background: #FFF;
    
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    box-sizing: border-box;
    padding: 30px;
    height: 500px;
    width: 500px;
h2{
    self-align: center;
    margin: 0 0 10px 0;
    font-weight: 700;
}
.exitIcon{
    align-self: flex-end;
    color: "#000";
    font-size: 40px;
    &:hover{
        cursor: pointer
    }
    &:active{
        filter:brightness(105%);
    }
}
button{
    padding: 10px;
    margin: 10px 40px;
    width: calc(100%- 40px);
    background: #12a171;
    border: 0;
    color: #FFF;
    font-size: 18px;
    &:hover{
        cursor: pointer
    }
    &:active{
        filter:brightness(105%);
    }
}
.group-input{
    display:flex;
    flex-direction: column;
    label{
        color: #aaa;
    }
    input{
        box-sizing: border-box;
        padding: 20px;
        width: 100%;
        margin: 8px 0;
        height: 30px;
        border: 1px solid rgb(155,167,167, 0.5);
        font-size: 18px;
        &::placeholder {
            color: #9ba7a7;
        }
    }
}
`

export const Error = style.h4`
    margin: 5px;
    color: #d32f2f;
`