import styled from '@emotion/styled';
import React from 'react';

// export default function Product({ product }) {
//     return (
//         <div>
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//             <a href={`http://35.223.2.97:3000/?url=${product.obj_url}`} target="_blank" rel="noopener noreferrer">
//                 View video
//             </a>
//         </div>
//     );
// }

export default function Product({ product }) {
    return (
        <div>
            <h2>{product.title}</h2>
           
            <p>{product.description}</p>
            <iframe src={`http://35.223.2.97:3000/?url=${product.obj_url}`} width="500px" height="500px">
                View video
            </iframe>
             <a href={`http://35.223.2.97:3000/?url=${product.obj_url}`} target="_blank" rel="noopener noreferrer">
                View video
            </a>
        </div>
    );
}