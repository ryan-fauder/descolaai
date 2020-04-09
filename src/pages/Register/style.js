import style from "styled-components";

export const Content = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #ccd8d8;
`;
export const LogoResized = style.img`
    max-width: 150px;
`
export const Error=  style.h4`
    margin: 5px;
    color: #d32f2f;
`
export const Form = style.div`
    width: 400px;
    background-color: #FFF;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        margin: 10px 0;
    }
    input{
        box-sizing: border-box;
        padding: 20px;
        width: 100%;
        margin: 8px 0;
        height: 30px;
        border: 0;
        border-bottom: 1px solid #9ba7a7;
        font-size: 18px;
        &::placeholder {
            color: #9ba7a7;
        }
    }
    button{
        padding: 10px;
        margin: 10px 0;
        width: 100%;
        background: #12a171;
        border: 0;
        color: #FFF;
        font-size: 18px;
    }
    hr {
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #cdcdcd;
        width: 100%;
    }
    a {
    font-size: 16;
    font-weight: bold;
    color: #777;
    text-decoration: none;
    }
`;