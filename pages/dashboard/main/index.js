import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Wrapper, Navigator, Content, MainMenu, MakeFile, TextTitle, 
         TextMenu, Separator1, Separator2, ContentHeader, ContentBody, MenuImage} from "../../../styles/dashboard_main";
import Head from 'next/head';


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
        <ContentHeader>s</ContentHeader>
        <ContentBody>d</ContentBody>
        
      </Content>
    </Wrapper>
  )
}
