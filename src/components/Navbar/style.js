import style from 'styled-components'

export const Content = style.header`
    top: 0;
    position: sticky;
    background: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    box-shadow: 0 2px 2px rgba(0,0,0,0.1);
    .group{
        margin: 0 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        img{
            height: 50px;
            margin: 0 10px 0 0;
        }
        a{
            text-decoration: none;
            color: black;
            margin: 10px;
            text-transform: uppercase;
            font-weight: 700;
            font-family: Roboto;
        }
    }
    h4{
        font-family: Fredoka One;
        
        font-size: 30px;
    }
` 
export const Circle = style.div`
    background: #00F;
    opacity: 50%;
    border-radius: 100%;
    padding: 10px;
    margin:0;
    display: flex;
    flex-direction: row;
    align-items: center;
`