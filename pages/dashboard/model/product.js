import styled from '@emotion/styled';
import React from 'react';

export default function Product({ product }) {
    const url = `http://35.223.2.97:3000/?url=${product.obj_url}`;

    const handleLinkClick = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
    };

    return (
        <div style={{ margin: '20px 20px 30px 20px', flexDirection: 'column', alignItems: 'center'}}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <iframe style={{borderRadius: '15px'}} src={url} width="300px" height="225px">
                View video
            </iframe>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>

                <a style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center', width: '120px', height:'30px',
                             borderRadius: '10px', borderColor: '#6073ff', color: '#6073ff', colorAdjust: '#6073ff', border: '1px solid #6073ff', 
                             cursor:'pointer', backgroundColor: 'white', fontSize: '16px', margin:'0 0 0 10px', 
                             fontWeight: 700, textDecoration: 'none'}}

                href={`http://35.223.2.97:3000/?url=${product.obj_url}`} target="_blank" rel="noopener noreferrer">
                Show
                </a>

                <div style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center', width: '60px', height:'25px',
                             borderRadius: '10px', cursor:'pointer', color:'white', backgroundColor: '#6073ff', 
                             fontSize: '11px', fontWeight: 700, margin:'0 0 0 10px'}}
                href={url} onClick={handleLinkClick} target="_blank" rel="noopener noreferrer">
                Copy
                </div>

            </div>
        </div>
    );
}


