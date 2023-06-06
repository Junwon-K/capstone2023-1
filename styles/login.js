import styled from '@emotion/styled'

export const Wrapper = styled.div`
    height 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Header = styled.div`
    width: 100%;
    height: 150px;
    // background-color: red;
    // color: blue;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    
`

export const MainMenu = styled.div`
    font-size: 30px;
    cursor: pointer;
    
`

export const MenuImage = styled.img`
    // padding-top: 10px;
    padding: 0 20px 20px 0px;
    max-width: 230px;
    max-height: 200px;
`

export const Body = styled.div`
    width: 100%;
    height: 100%;
    // // background-color: red;
    // // color: blue;
    // border-bottom: 1px solid #e7e7e7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const Content = styled.div`
    // background-color: yellow;
    margin: 0 768px 0 768px;
    display: flex;
    flex-direction: column;
    align-items: center;

    
`
export const Email = styled.input`
    width: 302px;
    height: 48px;
    border: 1px solid #E1E2E5;
    padding: 0px 15px 0px 15px;
    border-radius: 12px;
    font-size: 17px;
    ::placeholder {
        font-size: 16px;
        font-weight: 500;

    }
`
export const Password = styled.input`
    width: 302px;
    height: 48px;
    border: 1px solid #E1E2E5;
    margin: 9px 0 9px 0;
    padding: 0px 15px 0px 15px;
    border-radius: 12px;
    font-size: 17px;
    ::placeholder {
        font-size: 16px;
        font-weight: 500;
}
`


export const LoginOption = styled.div`
    width: 100%;
    // background-color: red;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 60px;
    
    
`
export const StaySignedIn = styled.label`
    margin: 0 0 0 10px;
    
    
`


export const ResetPassword = styled.div`
    margin: 0 10px 0 0;
    
`
export const LoginButton = styled.button`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 328px;
    height: 48px;
    border-radius: 15px;
    background-color: #6073ff;
    cursor: pointer;
    font-weight: bold;
    color: white;
    font-size: 16px;
    margin: 15px 0 15px 0;
    
`
export const AskSignUp = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 14px;
    // justify-content: space-around;
    // align-items: space-around;
    
`
export const Text1 = styled.div`

`

export const SignUp = styled.div`
    cursor: pointer;
    margin: 0 0 0 15px;
    color: #6073ff

    
`

export const SimpleStart = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 50px 0 15px 0;
    justify-content: center;
    align-items:center;
    
    
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Separator = styled.div`
    width: 27%;
    height: 12px;
    display: flex;
    // border-bottom: 1px solid #ececec;
    height: 1px;
    color: #ececec;
    display: flex;
    background-color: #ececec;
    margin: 12px;
`

export const Text2 = styled.div`
    font-size: 12px;
    
`


export const Footer = styled.div`
    background-color: pink;
    margin: 0 768px 0 768px;
    display: flex;
    flex-direction: column;
    align-items: center;
`