import React from 'react';

export default function Product({ product }) {
    return (
        <div style={{ margin: '20px' }}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <video width="300" height="300" controls autoPlay loop muted>
                <source src={product.video_url} type="video/mp4"/>
            </video>
        </div>
    );
}
