import style from 'styled-components'
export const Content = style.div`
    display: grid;
    grid-template-areas: "1 2";
    h1{
        margin: 10px 0;
        font-weight: 700;
    }
    .group{
        margin: 20px;
        display: flex;
        flex-direction: column;
    }
    .toll{
        display: flex;
        align-items: center;
        h3{ 
            color:'#DB961F';
            margin: 0 0 0 5px;
        }
    }
    button{
        padding: 10px;
        margin: 10px 0;
        width: 200px;
        background: #12a171;
        border: 0;
        color: #FFF;
        font-size: 18px;
        &:hover{
            cursor: pointer;
            filter: brightness(105%);
        }
        &:disabled{
            
            filter: none;
            background: #ccc;
            cursor:default;
        }
    }
    .subgroup{
        margin: 0 0 10px 0;
    }
    a{
        color: black;
        text-decoration: none;
    }
    .icon-control{
        margin: 0 0 10px 0;
        svg: hover{
            cursor: pointer;
            filter: brightness(105%);
        }
    }
`
export const Title = style.h6`
    font-size: 20px;
    font-weight: 500;
`