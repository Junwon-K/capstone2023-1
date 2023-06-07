// import styled from '@emotion/styled';
// import React from 'react';

// // export default function Product({ product }) {
// //     return (
// //         <div>
// //             <h2>{product.title}</h2>
// //             <p>{product.description}</p>
// //             <a href={`http://35.223.2.97:3000/?url=${product.obj_url}`} target="_blank" rel="noopener noreferrer">
// //                 View video
// //             </a>
// //         </div>
// //     );
// // }

// export default function Product({ product }) {
//     return (
//         <div>
//             <h2>{product.title}</h2>
           
//             <p>{product.description}</p>
//             <iframe src={`http://35.223.2.97:3000/?url=${product.obj_url}`} width="500px" height="500px">
//                 View video
//             </iframe>
//              <a href={`http://35.223.2.97:3000/?url=${product.obj_url}`} target="_blank" rel="noopener noreferrer">
//                 View video
//             </a>
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

// Styles
const ProductBox = styled.div`
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    height: 100px;
    width: 100px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
    height: 100px;
    width: 100px;
`;

const Content = styled.div`
    // Style your content here
`;

export default function Product() {
    console.log("asd");
    const [products, setProducts] = useState([]);
    const http = "http://34.121.32.11:8080";
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
        <>
            {products.map(product => (
                <ProductBox key={product.id}>
                    <Title>
                        <a href={`http://35.223.2.97:3000/?url=${product.obj_url}`} target="_blank" rel="noopener noreferrer">
                            {product.title}
                        </a>
                    </Title>
                    <Content>
                        <p>{product.description}</p>
                        <iframe src={`http://35.223.2.97:3000/?url=${product.obj_url}`} width="500px" height="500px">
                            View video
                        </iframe>
                    </Content>
                </ProductBox>
            ))}
        </>
    );
}
