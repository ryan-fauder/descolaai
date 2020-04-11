import style from 'styled-components';
export const Container = style.div`
    background: #F6F6F6;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    hr{
        margin: 80px 0;
    }
    main{
        margin: 20px;
    }
    .cards{
        display: grid;
        grid-template-areas: 
        "1 2 3 4";
        margin: 0 80px;
    }
    .perfil-board{
        display: flex;
        margin: 20px;
        align-items: center;
        justify-content: center;
        h1{
            font-size: 50px;
        }
    }
    .perfil-info{
        margin: 20px;
    }
    .perfil-control{
        display:flex;
        flex-direction: column;
    }
    button{
        padding: 10px;
        margin: 10px 10px 10px 0;
        width: 200px;
        background: #12a171;
        border: 0;
        color: #FFF;
        font-size: 18px;
        &:hover{
            cursor:pointer;
            filter: brightness(105%);
        }
    }
    .red{
        background: #d32f2f
    }
`
export const Title = style.h3`
    font-weight: 700;
    font-size: 35px;
    margin: 20px auto;
`
export const Circle = style.div`
    background: rgb(0,0,255, 0.5);
    height: 300px;
    width: 300px;
    border-radius: 100%;
    padding: 10px;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .iconPerson{
        font-size: 200px;
        color: #fff;
    }
`