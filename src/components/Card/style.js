import style from 'styled-components';
export const Content = style.div`
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-areas: "1", "2";
    background: #FFF;
    height: 240px;
    width: 200px;
    padding: 30px;
    border-radius: 10px;
    margin: 15px;
    border: 0.5px solid rgba(209,209,209, 0.3);
    h1{
        color: #343434
        font-size: 28px;
        font-weight: 500;
    }
    h3{
        color: #DB961F;
        font-size: 20px;
        font-weight: 700;
        margin: 3px;
    }
    h4{
        color: #707070
        font-size: 17px;
        font-weight: 700;
    }
    div{
        display: flex;
        align-items: center;
    }
    .group{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        div{
            margin: 5px 0 0 0;
            align-self: flex-end;
        }
    }
    -webkit-box-shadow: 0px 10px 15px -4px rgba(110,109,110,0.36);
    -moz-box-shadow: 0px 10px 15px -4px rgba(110,109,110,0.36);
    box-shadow: 0px 10px 15px -4px rgba(110,109,110,0.36);
`