// // import React from 'react';
// // const Home = () => (
// //   <div className="container">
// //     <div className="row">
// //       <div className="col">
// //         <h1>HOME Page</h1>
// //         <hr />
// //         <p>Learn</p>
// //       </div>
// //     </div>
// //   </div>
// // )

// // export default Home;

// import React from 'react';
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Button } from "../components/Button";
// import '../App.css';
// import styled from "styled-components";

// // import Item from "antd/lib/list/Item";

// // API for backend - fetch

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchUserData = () => {
//     axios.get('http://localhost:8004/api/users')
//       .then(({ data }) => setUsers(data.users))
//       .catch((err) => console.log(err));


//     // fetch('http://localhost:8000/api/users', {
//     //   method: "GET",
//     // })
//     // .then((response) => {
//     //   return response.json();
//     // })
//     // .then((data) => setUsers(data.users))
//     // .catch((err) => console.log(err));
//   };


//   const fetchPosts = () => {
//     axios.get('http://jsonplaceholder.typicode.com/posts')
//       .then(({ data }) => {
//         setPosts(data);
//         setLoading(false);
//       })
//       .catch((err) => console.log(err));

//     // fetch('http://jsonplaceholder.typicode.com/posts', {
//     //   method: "GET",
//     // })
//     // .then((response) => {
//     //   return response.json();
//     // })
//     // .then((data) => setPosts(data))
//     // .catch((err) => console.log(err));
//   };
//   const testFunction = () => {
//     alert("This is just a test...");
//   };

//   if (loading) {
//     return <h1>Loading....</h1>
//   }

//   return (
//     <div className="container">
//       {/*<pre>{JSON.stringify(users, null, 4)}</pre> */}

//       {users &&
//         users.map((user) => (
//           <div className="alert alert-primary" key={user.age}>
//             {user.name} age is {user.age} years old
//           </div>

//         ))}

//       <Button handleClick={fetchUserData} title="Fetch User Data" />
//       <Button handleClick={testFunction} title="Testing..." />

//       <List
//         bordered
//         dataSource={posts}
//         renderItem={(item) => <List.Item>{item.title}</List.Item>}
//       />

//       {/* {posts && posts.map((post) => <PostList
//       //className="posts"
//       // style={{
//       //   backgroundColor: 'indigo',
//       //   color: "gfff",
//       //   border: "1px solid #999",
//       //   padding: "20px",
//       // }}
//       key={post.id}
//       >
//         {post.title}
//         </PostList>)} */}
//     </div>

//   );

// };

// export default App;

// const PostList = styled.div`
//   background-color: indigo;
//   color: #fff;
//   border: 1px solid #999;
//   padding: 20px;
// `;



import React from "react";

const Home = () => {
    return (
        <h1>Home</h1>
    )
}

export default Home;



