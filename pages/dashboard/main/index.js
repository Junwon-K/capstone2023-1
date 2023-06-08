import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Wrapper, Navigator, Content, MainMenu, MakeFile, TextTitle, 
         TextMenu, Separator1, Separator2, ContentHeader, ContentBody, MenuImage,
         TextBox, Text1, Text2, BodyTextBox, BodyText1, BodyText2, GifBox, Blank} from "../../../styles/dashboard_main";
import Head from 'next/head';
import Time from './test.js'

export default function DashBoard_main(){

    const router = useRouter();

    
    return (
    <Wrapper>
      <Head>
        <title>NeRF - 원하는 영상을 링크로 만들어봐요</title>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <Navigator>
        <MainMenu>
          <MenuImage onClick={() => router.push('/main_page')} src="/nerf.png"/>
        </MainMenu>
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
        {/* <ContentHeader>
          <TextBox>
            <Text1></Text1>
            <Text2></Text2>
          </TextBox>
        </ContentHeader> */}
        <ContentBody>
          <BodyTextBox>
            <BodyText1>생성한 3D 모델</BodyText1>
            <BodyText2>내가 만든 모델을 확인하세요</BodyText2>
          </BodyTextBox>
          <GifBox>
            <video width="700" height="400" autoPlay loop muted>
            <source src="/dash_model_rotate.mp4" type="video/mp4"/>
            </video>
          </GifBox>
          <Blank></Blank>


          <BodyTextBox>
            <BodyText1>업로드한 영상</BodyText1>
            <BodyText2>업로드한 영상도 확인할 수 있어요</BodyText2>
          </BodyTextBox>
          <GifBox>
            <video width="700" height="400" autoPlay loop muted>
            <source src="/dash_myupload.mp4" type="video/mp4"/>
            </video>
          </GifBox>
          <Blank></Blank>


          <BodyTextBox>
            <BodyText1>Show</BodyText1>
            <BodyText2>3D 모델을 더 크게</BodyText2>
          </BodyTextBox>
          <GifBox>
            <video width="700" height="400" autoPlay loop muted>
            <source src="/dash_model_show.mp4" type="video/mp4"/>
            </video>
          </GifBox>
          <Blank></Blank>


          <BodyTextBox>
            <BodyText1>Copy Link</BodyText1>
            <BodyText2>모델을 다른 사람과 공유해보세요!</BodyText2>
          </BodyTextBox>
          <GifBox>
            <video width="700" height="400" autoPlay loop muted>
            <source src="/dash_notion.mp4" type="video/mp4"/>
            </video>
          </GifBox>
          <Blank></Blank>
        
        </ContentBody>
      </Content>
    </Wrapper>
  )
}

