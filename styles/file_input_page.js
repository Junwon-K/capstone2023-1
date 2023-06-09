import styled from '@emotion/styled'



export const Wrapper = styled.div`
    height 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
`


export const Header = styled.div`
    width: 100%;
    height: 70px;
    // background-color: red;
    // color: blue;
    border-bottom: 1px solid #e7e7e7;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    // background-color: yellow;
    // color: blue;
    border-bottom: 1px solid #e7e7e7;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0px 17%;
    
`

export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 70px;
    
`

export const ContainerRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 70px;
    margin: 0 5% 0 0;

`

export const MainMenu = styled.div`
    margin: 0 5% 0 5%;
    cursor: pointer;
    
`
export const MenuImage = styled.img`
    padding-top: 10px;
    max-width: 130px;
    max-height: 200px;
`

export const PageButton = styled.div`
    margin: 0px 5% 0 7%;
    cursor: pointer;
    
`
export const LoginButton = styled.div`
    cursor: pointer;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 14px;
    font-weight: bold;
`

export const Body = styled.div`  
    // background-color: green;
    // color: blue;
    padding: 160px 17%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const MainPage = styled.div`
    width: 100%
    display: flex;
    background-color: red;
    margin: 0 18%;

`


export const Content = styled.div`
    width: 100%;
    height: 450px;
    // background-color: yellow;
    // color: blue;
    // border-bottom: 1px solid #6073ff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
`

export const TextBox = styled.div`
    // background-color: #cbd1ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Text1 = styled.div`
    color: #6073ff;
    font-weight: bold;
    font-size: 20px;
    padding: 5px 0 5px 0;

`

export const Text2 = styled.div`
    font-weight: bold;
    font-size: 34px;
    padding: 5px 0 5px 0;

`

export const Text3 = styled.div`
    font-weight: normal;
    padding: 5px 0 5px 0;
    color: #646466;
    font-size: 20px;

`

export const CategorySelect = styled.div`

    width: 830px;
    display: flex;
    flex-direction: row;
    
    justify-content: flex-end;
    select {
        width: 130px; 
        height: 30px; 
        padding: 5px; 
        color: #8f8f8f;
        font-size: 12px;
        font-weight: bold;
        border-radius: 10px;
        border: 2px solid #b8b7ba;
        // border: 2px solid #a3afff;
    }
`;

export const Blank = styled.div`
    height: 40px;
`



export const FileBox = styled.div`
    width: 830px;
    height: 240px;
    border-radius: 15px;
    border: 2px dashed #bdc5ff;
    box-shadow: 0px 0px 20px #cbd1ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FileBorder = styled.div`
`

export const SendBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 30px;
    border-radius: 15px;
    background-color: #6073ff;
    cursor: pointer;
    font-weight: bold;
    color: white;
    padding: 10px;
    font-size: 15px;
`
