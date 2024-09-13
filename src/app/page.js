"use client"
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/data1');
            const data = await res.json();
            console.log(data);
            setData(data);
          
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Home Page - useEffect Equivalent to useLoaderData</h1>
            <p>Data: </p>
            <ul>
               {data.map((item) => (
                   <li key={item.id}>{item.message}</li>
               ))}
           </ul>

          
        </div>
    );
}



// export default async function HomePage() {
//   const [res1, res2] = await Promise.all([
//       fetch('http://localhost:3000/api/data1'),
//       fetch('http://localhost:3000/api/data2')
//   ]);

//   const data1 = await res1.json();
//   const data2 = await res2.json();

//   const messages1 = data1.map(item => item.message);
//   const messages2 = data2.map(item => item.message);

//   return (
//       <div>
//           <h1>Home Page - Concurrent Fetching in Loader</h1>
//           <h2>Data from API 1:</h2>
//           <ul>
//               {messages1.map((message, index) => (
//                   <li key={index}>{message}</li>
//               ))}
//           </ul>
//           <h2>Data from API 2:</h2>
//           <ul>
//               {messages2.map((message, index) => (
//                   <li key={index}>{message}</li>
//               ))}
//           </ul>
//       </div>
//   );
// }






// `use client`
// import { useEffect, useState } from 'react';

// export default function HomePage() {
//     const [data1, setData1] = useState([]);
//     const [data2, setData2] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const res1 = await fetch('/api/data1');
//             const data1 = await res1.json();

//             const res2 = await fetch('/api/data2');
//             const data2 = await res2.json();

//             setData1(data1);
          
//             setData2(data2);
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Home Page - Sequential Requests</h1>
//             <p>Data from API 1: 
//             <ul>
//                {data1.map((item) => (
//                     <li key={item.id}>{item.message} </li>
//                 ))}
//              </ul>
//             </p>
//             <p>Data from API 2: <ul>
//             {data2.map((item) => (
//                     <li key={item.id}>{item.message} </li>
//                 ))}
//              </ul>
//             </p>
//         </div>
//     );
// }












// "use client";

// import { useEffect, useState } from 'react';

// export default function HomePage() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await Promise.race([
//                     fetch('/api/data1'),
//                     fetch('/api/data2')
//                 ]);

//                 const data = await res.json();
//                 console.log("data from api", data);
//                 setData(data); // No need to access data.message
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Home Page - First-Completed Request</h1>
//             <h2>Data from Fastest API:</h2>
//             <ul>
//                 {data.map((item) => (
//                     <li key={item.id}>{item.message} </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


















// "use client";

// import { useEffect, useState } from 'react';

// export default function HomePage() {
//     const [data1, setData1] = useState([]);
//     const [data2, setData2] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const res1 = await fetch('/api/data1'); // Correct path
//                 if (!res1.ok) {
//                     throw new Error(`HTTP error! status: ${res1.status}`);
//                 }
//                 const data1 = await res1.json();
//                 setData1(data1);

//                 const res2 = await fetch('/api/data2'); // Correct path
//                 if (!res2.ok) {
//                     throw new Error(`HTTP error! status: ${res2.status}`);
//                 }
//                 const data2 = await res2.json();
//                 setData2(data2);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         }
        
//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Home Page - Data from Files</h1>
            
//             <h2>Data from Data1</h2>
//             <ul>
//                 {data1.map(item => (
//                     <li key={item.id}>{item.message} - {item.timestamp}</li>
//                 ))}
//             </ul>
            
//             <h2>Data from Data2</h2>
//             <ul>
//                 {data2.map(item => (
//                     <li key={item.id}>{item.message} - {item.timestamp}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
