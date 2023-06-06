import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Wrapper, Navigator, Content, MainMenu, MakeFile, TextTitle, 
         TextMenu, Separator1, Separator2, ContentHeader, ContentBody, 
         TextBox, Text1, Text2} from "../../../styles/dashboard_model";
import Head from 'next/head';
import Product from './product';

const http = "http://34.121.32.11:8080";

export default function DashBoard_main(){
    const [products, setProducts] = useState([]);
    const router = useRouter();
    const userIdx = localStorage.getItem("userIdx"); // replace with actual user id 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(http +`/rendering/${userIdx}`);
                if (response.data.isSuccess) {
                    console.log(response.data.result);
                    setProducts(response.data.result); 
                } else {
                    console.error(response.data.message);
                }
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, []);

    return (
        <Wrapper>
            <Head>
                <title>NeRF - 원하는 영상을 링크로 만들어봐요</title>
                <link rel="icon" href="../../public/favicon.ico" />
            </Head>
            <Navigator>
                <MainMenu onClick={() => router.push('/dashboard/main')}>NeRF</MainMenu>
                <MakeFile onClick={() => router.push('/file_input_page')}>파일 업로드</MakeFile>
                <Separator1></Separator1>
                <TextTitle>모델 라이브러리</TextTitle>
                <TextMenu onClick={() => router.push('/dashboard/model')}>생성한 모델</TextMenu>
                <TextMenu onClick={() => router.push('/dashboard/myupload')}>업로드한 영상</TextMenu>
                <Separator2></Separator2>
                <TextTitle>설정</TextTitle>
                <TextMenu>로그아웃</TextMenu>
            </Navigator>
            <Content>
                <ContentHeader>
                    <TextBox>
                        <Text1>전체 영상 목록</Text1>
                        <Text2>내가 지금까지 올렸던 동영상을 볼 수 있어요!</Text2>
                    </TextBox>
                </ContentHeader>
                <ContentBody>
                    {products.map(product => <Product key={product.id} product={product} />)}
                </ContentBody>
            </Content>
        </Wrapper>
    );
}
