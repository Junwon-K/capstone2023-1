import styled from '@emotion/styled'



export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    // background-color: red;
    display: flex;
    flex-direction: row;
    
`

export const Navigator = styled.div`
    
    // width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    padding: 10px 24px 10px 24px;
    // margin: 0 170px 0 0;
    postion: fixed;
`

export const MainMenu = styled.div`
    cursor: pointer;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-content: center;
`

export const MenuImage = styled.img`
    // padding-top: 10px;
    padding: 30px 0px 20px 0px;
    max-width: 150px;
    max-height: 150px;
`


export const MakeFile = styled.div`
    width: 130px;
    border-radius: 15px;
    background-color: #6073ff;
    cursor: pointer;
    font-weight: bold;
    padding: 10px;
    margin: 10px 0 5px 0;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 30px;

`

export const TextTitle = styled.div`
    font-size: 11px;
    margin: 5px 0 5px 0;
    color: #bbbbbf;
    font-weight: bold;

`

export const TextMenu = styled.div`
    font-size: 14px;
    margin: 5px 0 5px 0;
    font-weight: bold;
    display: flex;
    align-content: center;
    // justify-content: center;
    padding: 0 0 0 15px;
    cursor: pointer;

`
export const Separator1 = styled.div`
    height: 1px;
    color: #ececec;
    display: flex;
    // background-color: #ececec;
    margin: 12px;

`


export const Separator2 = styled.div`
    height: 1px;
    color: #ececec;
    display: flex;
    background-color: #ececec;
    margin: 12px;

`

export const Content = styled.div`
    background-color: #f6f6fa;
    width: 1740px; // 1740이 딱맞는듯
    display: flex;
    flex-direction: column;
    // padding-left: 170px;
    // background-color: red;
    height: 100vh;

`
export const ContentHeader = styled.div`
    height: 120px;
    // background-color: red;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;

    
`

export const TextBox = styled.div`
    width: 430px;
    // background-color: yellow;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    text-align: center;
    margin-bottom: 10px;


`

export const Text1 = styled.div`
    font-size: 21px;
    font-weight: 800;
    margin-bottom: 2px;
`

export const Text2 = styled.div`
    color: #646466;
    font-size: 14px;
    font-weight: 600;
`


// export const ContentBody = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex-wrap: wrap;
//     overflow-y: scroll;
//     overflow: overlay;
//     padding-top: 120px;
//     align-items: center;
//     // justify-content: center;

// `

export const ContentBody = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-y: scroll;
    overflow: overlay; // Corrected typo here
    padding-top: 120px;
    align-items: center;
    // justify-content: center;
    height: calc(100vh - 120px);
`

export const BodyTextBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-text: center;
    align-items: center;
    justify-content: center;

`

export const BodyText1 = styled.div`
    color: #6073ff;
    font-size: 25px;
    font-weight: 800;
    
`

export const BodyText2 = styled.div`
    font-size: 37px;
    font-weight: 800;

`

export const GifBox = styled.div`
    display: flex;
    flex: direction: row;
    margin-bottom: 180px;

`
export const Blank = styled.div`
    background-color: red;
    height: 170px;
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`
