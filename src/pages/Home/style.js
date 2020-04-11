import style from "styled-components";
export const Content = style.div`
    background: #F6F6F6;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
    }
    section{
        display: grid;
        grid-template-areas: 
        "1 2 3 4";
    }
    a{
        text-decoration: none;
    }

`
export const Title = style.h1`
        font-size: 40px;
        color:#111;
        margin: 0 0 30px 0;
        weight: 600;
`

export const ContentBox = style.div`
    display: flex;
    height: 240px;
    width: 200px;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background: #FFF;
    border: 0.5px solid rgba(209,209,209, 0.3);
    margin: 10px;
    padding: 30px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 10px 15px -4px rgba(110,109,110,0.36);
    -moz-box-shadow: 0px 10px 15px -4px rgba(110,109,110,0.36);
    box-shadow: 0px 10px 15px -4px rgba(110,109,110,0.36);
    h4{
        font-size: 28px;
        color: #9B9B9B
    }
    &:hover{
        cursor: pointer
    }
    &:active{
        filter:brightness(105%);
    }
`