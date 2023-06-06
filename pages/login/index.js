// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import { Wrapper, Header, Body, Footer, MainMenu, Content, Email, Password,
//          LoginOption, StaySignedIn, ResetPassword, LoginButton, AskSignUp,
//          SignUp, Text1, Text2, Separator, SimpleStart, Form} from "../../styles/login";
// import Head from 'next/head';

// const http = "http://34.121.32.11:8080";

// export default function Login() {
//     const router = useRouter();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmailChange = e => setEmail(e.target.value);
//     const handlePasswordChange = e => setPassword(e.target.value);

//     const handleSubmit = async e => {
//         e.preventDefault();

//         // Log the email and password
//         console.log('Email:', email);
//         console.log('Password:', password);

//         try {
//             const response = await axios.post(http+"/app/users/logIn", {
//                 email,
//                 password
//             });

//             if (response.status === 200) {
//                 console.log('Login request successful');
//                 router.push('/dashboard/main'); // or whatever path you want to redirect the user to
//             } else {
//                 console.log('Login request unsuccessful');
//                 // handle error
//             }
//         } catch (error) {
//             console.error('An error occurred while logging in:', error);
//         }
//     };

//     return (
//         <Wrapper>
//             <Head>
//                 <title>NeRF - 원하는 영상을 링크로 만들어봐요</title>
//                 <link rel="icon" href="../../public/favicon.ico" />
//             </Head>
//             <Header>
//             </Header>
//             <Body>
//                 <MainMenu onClick={() => router.push('/main_page')}>NeRF</MainMenu>
//                 <Content>
//                     <Form onSubmit={handleSubmit}>
//                         <Email 
//                             type="text" 
//                             placeholder="이메일" 
//                             value={email}
//                             onChange={handleEmailChange}
//                         />
//                         <Password 
//                             type="password" 
//                             placeholder="비밀번호"
//                             value={password}
//                             onChange={handlePasswordChange} 
//                         />
//                         <LoginOption>
//                             <StaySignedIn>로그인 상태 유지<input type='checkbox'></input></StaySignedIn>
//                             <ResetPassword>비밀번호 재설정</ResetPassword>
//                         </LoginOption>
//                         <LoginButton type="submit">로그인
//                         </LoginButton>
//                         <AskSignUp>
//                             <Text1>NeRF가 처음이신가요?</Text1> 
//                             <SignUp>회원가입</SignUp>
//                         </AskSignUp>
//                         <SimpleStart>
//                             <Separator/><Text2>간편하게 시작하기</Text2><Separator/>
//                         </SimpleStart>
//                     </Form>
//                 </Content>
//             </Body>
//         </Wrapper>
//     );
// }

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Wrapper, Header, Body, MainMenu, Content, Email, Password,
         LoginOption, StaySignedIn, ResetPassword, LoginButton, AskSignUp,
         SignUp, Text1, Text2, Separator, SimpleStart, Form, MenuImage} from "../../styles/login";
import Head from 'next/head';

const http = "http://34.121.32.11:8080";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = e => setEmail(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);

    const handleSubmit = async e => {
        e.preventDefault();
        console.log("asdas");
        // Log the email and password
        console.log('Email:', email);
        console.log('Password:', password);

        try {
            const response = await axios.post(http+"/app/users/logIn", {
                id: email,
                password: password
            });

            if (response.status === 200) {
                console.log('Login request successful');

                localStorage.setItem('userIdx', response.data.result.userIdx);
                localStorage.setItem('jwt', response.data.result.jwt);
                
                router.push('/dashboard/main'); // or whatever path you want to redirect the user to
            } else {
                console.log('Login request unsuccessful');
                // handle error
            }
        } catch (error) {
            console.error('An error occurred while logging in:', error);
        }
    };

    return (
        <Wrapper>
            <Head>
                <title>NeRF - 원하는 영상을 링크로 만들어봐요</title>
                <link rel="icon" href="../../public/favicon.ico" />
            </Head>
            <Header></Header>
            <Body>
                <MainMenu>
                <MenuImage onClick={() => router.push('/main_page')} src="/nerf.png"/>
                </MainMenu>
                <Content>
                    <Form onSubmit={handleSubmit}>
                        <Email 
                            type="email" // Changed this from 'text' to 'email'
                            placeholder="이메일" 
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <Password 
                            type="password" 
                            placeholder="비밀번호"
                            value={password}
                            onChange={handlePasswordChange} 
                        />
                        <LoginOption>
                            <StaySignedIn>로그인 상태 유지<input type='checkbox'></input></StaySignedIn>
                            <ResetPassword onClick={() => console.log('Reset Password')}>비밀번호 재설정</ResetPassword>
                        </LoginOption>
                        <LoginButton type="submit" 
                        // onClick={() => 
                        //     {console.log('test'); 
                        //      console.log('Email:', email);
                        //      console.log('Password:', password);}}
                             >로그인</LoginButton>
                        <AskSignUp>
                            <Text1>NeRF가 처음이신가요?</Text1> 
                            <SignUp onClick={() => console.log('Sign Up')}>회원가입</SignUp>
                        </AskSignUp>
                        <SimpleStart>
                            <Separator/><Text2>간편하게 시작하기</Text2><Separator/>
                        </SimpleStart>
                    </Form>
                </Content>
            </Body>
        </Wrapper>
    );
}


// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';

// const http = "http://34.121.32.11:8080";

// export default function Login() {
//     const router = useRouter();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmailChange = e => setEmail(e.target.value);
//     const handlePasswordChange = e => setPassword(e.target.value);

//     const handleSubmit = async e => {
//         e.preventDefault();
//         console.log("asdas");

//         console.log('Email:', email);
//         console.log('Password:', password);

//         try {
//             const response = await axios.post(http+"/app/users/logIn", {
//                 email,
//                 password
//             });

//             if (response.status === 200) {
//                 console.log('Login request successful');
//                 router.push('/dashboard/main');
//             } else {
//                 console.log('Login request unsuccessful');
//             }
//         } catch (error) {
//             console.error('An error occurred while logging in:', error);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="email" 
//                     placeholder="이메일" 
//                     value={email}
//                     onChange={handleEmailChange}
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="비밀번호"
//                     value={password}
//                     onChange={handlePasswordChange} 
//                 />
//                 <button type="submit">로그인</button>
//             </form>
//         </div>
//     );
// }
