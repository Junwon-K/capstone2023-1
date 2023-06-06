// // import React from 'react';

// // export default function Product({ product }) {
// //     return (
// //         <div>
// //             <h2>{product.title}</h2>
// //             <p>{product.description}</p>
// //             <img src={product.imageUrl} alt={product.title} />
// //         </div>
// //     );
// // }


// import React, { useState, useEffect } from 'react';

// export default function Product() {
//     const [videoList, setVideoList] = useState([]);

//     useEffect(() => {
//         setVideoList([
//             { video_url: "https://storage.googleapis.com/nerf-video/videos/1685954862528" },
//             { video_url: "https://storage.googleapis.com/nerf-video/videos/1684471517000" }
//         ]); 
//     }, []);

//     return (
//         <div>
//             {videoList.map((video, index) => 
//                 <div key={index}>
//                     <video width="320" height="240" controls>
//                         <source src={video.video_url} type="video/mp4"/>
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//             )}
//         </div>
//     );
// }

import React from 'react';

export default function Product({ product }) {
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <video width="520" height="470" controls autoPlay loop muted>
            <source src={product.video_url} type="video/mp4"/>
            </video>
        </div>
    );
}
