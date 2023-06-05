import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Wrapper, Header, HeaderContainer, Body, MainMenu, 
         PageButton, MainPage, PageLeft, PageRight, TextBox, Text1, Text2, 
         Blank, GoMakeBox, GoMakeButton, ImageBox } from "../../styles/main_page";
import Head from 'next/head';


export default function Main_page(){

    const router = useRouter();
    
    return (
    <Wrapper>
      <Head>
        <title>NeRF - 원하는 영상을 링크로 만들어봐요</title>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <Header>
        <HeaderContainer>
          <MainMenu onClick={() => router.push('/main_page')}>NeRF</MainMenu>
          <PageButton onClick={() => router.push('/file_input_page')}>링크 만들기</PageButton>
          {/* <PageButton>기술 소개</PageButton> */}
        </HeaderContainer>
      </Header>
      <Body>
        <MainPage>
          <PageLeft>
            <TextBox>
              <Text1><h1>다양한 각도로 온라인 쇼핑을 <br/>즐기세요<br/>
                        3D 이미지가 보여주는 새로운 세계</h1>
              </Text1>
              <Text2>동영상을 업로드하면 3D 이미지를 볼 수 있는 링크가 생성됩니다.</Text2>
              <Text2>링크를 이용하여 다양한 곳에서 입체적인 경험을 해보세요.</Text2>
            </TextBox>
            <Blank></Blank>
            <GoMakeBox>
              <GoMakeButton onClick={() => router.push('/file_input_page')}>
                링크생성 시작하기
              </GoMakeButton>
            </GoMakeBox>
          </PageLeft>
          <PageRight>
            <ImageBox>
            <video width="520" height="470" controls autoPlay loop muted>
            <source src="/flower_360_Adobe.mp4" type="video/mp4" />
            </video>
            </ImageBox>
          </PageRight>
        </MainPage>
        
      </Body>
    </Wrapper>
  )
}
