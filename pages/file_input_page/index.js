import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Wrapper, Header, HeaderContainer, Body, MainMenu, PageButton, 
         Content, TextBox, FileBox, Text1, Text2, Text3, FileBorder, 
         Blank, SendBox, ContainerLeft, ContainerRight, LoginButton, 
         MenuImage, CategorySelect} from "../../styles/file_input_page";        
import Head from 'next/head';

const spinnerPath = "/Spinner_200px.gif";
 
const FileBoxBody = ({ file, fileDetails, fileUploadProgress, handleChangeFile, uploading }) => {
  return (
    <FileBorder>
      <input 
        type="file" 
        id="fileUpload"
        accept="video/*" 
        onChange={handleChangeFile} 
        multiple="multiple" 
        style={{display: 'none'}}
      />
      { uploading 
        ? <img src={spinnerPath} alt="Loading..." />
        : <label htmlFor="fileUpload" 
          style={{cursor: "pointer", height: '70px', width: '217px', display:'flex',
          alignItems:'center', justifyContent:'center', border: '2px solid #a3afff',
          borderRadius: '15px', fontSize:'18px', color: '#6276ff', fontWeight:'bold'}}>
            클릭해서 영상 업로드</label>
      }
    </FileBorder>
  );
};

export default function File() {

  const [category, setCategory] = useState('default');
  const [file, setFile] = useState(null);
  const [fileDetails, setFileDetails] = useState({ name: '', size: '' });
  const [fileUploadProgress, setFileUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeFile = (event) => {
    setFile(event.target.files[0]);
    setFileDetails({ 
      name: event.target.files[0].name, 
      size: (event.target.files[0].size / 1024).toFixed(1) + ' KB' 
    });
  }

  const handleUpload = () => {
    const fd = new FormData();
    fd.append("file", file);

    console.log(category);

    const userIdx = localStorage.getItem('userIdx');
    // if (userIdx) {
    //     fd.append("userIdx", userIdx);
    // }

    setUploading(true);

    axios.post(`http://34.121.32.11:8080/video?userIdx=${userIdx}&category=${category}`, fd, {
        headers: {
            "Content-Type": `multipart/form-data;`,
        },
        onUploadProgress: progressEvent => {
          setFileUploadProgress(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
        }
    })
    .then((response) => {
        alert(response.statusText);
        console.log(response.data['obj_url']);
        document.getElementById("result").innerText = response.data['obj_url'];
        setUploading(false);
    })
    .catch((error) => {
        setUploading(false);
    })
  };

  return (
    <Wrapper>
      <Head>
        <title>NeRF - 원하는 영상을 링크로 만들어봐요</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <HeaderContainer>
          <ContainerLeft>
          <MainMenu>
            <MenuImage onClick={() => router.push('/main_page')} src="/nerf.png"/>
          </MainMenu>
            <PageButton onClick={() => router.push('/file_input_page')}>링크 만들기</PageButton>
            <PageButton onClick={() => router.push('/dashboard/main')}>대시보드</PageButton>
          </ContainerLeft>
          <ContainerRight>
            <LoginButton onClick={() => router.push('/login')}>로그인</LoginButton>
          </ContainerRight>  
        </HeaderContainer>
      </Header>
      <Body>
        <Content>
          <TextBox>
            <Text1><strong>Simple 3D Converter</strong></Text1>
            <Text2><strong>다양한 3D 이미지를 손쉽게 만들어봐요</strong></Text2>
            <Text3>영상을 업로드 하면 3D 이미지 링크를 얻을 수 있어요</Text3>
            <Text3>다양한 장소에 사용해보세요 </Text3>
          </TextBox>
          <CategorySelect>
          <select value={category} onChange={handleCategoryChange}>
            <option value="default" disabled>Select Category</option>
            <option value="bottle">Bottle</option>
            <option value="cup">Cup</option>
            <option value="chair">Chair</option>
            <option value="potted plant">Plant</option>
            <option value="book">Book</option>
            <option value="laptop">Laptop</option>
            <option value="cell phone">Cell Phone</option>
            <option value="bicycle">Bicycle</option>
          </select>
        </CategorySelect>
          <FileBox>
            <FileBoxBody 
              file={file}
              fileDetails={fileDetails}
              fileUploadProgress={fileUploadProgress}
              handleChangeFile={handleChangeFile}
              uploading={uploading}
            />
          </FileBox>
        </Content>
        <Blank></Blank>
        <SendBox onClick={handleUpload}>Upload</SendBox>
      </Body>
    </Wrapper>
  )
}

