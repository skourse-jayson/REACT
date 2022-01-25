
import React, {useState} from 'react';
import Post from './Post';
import './App.css';
import AddPost from './AddPost';
import { Greeting } from './Greetings';

function App () {

  const [posts,setPosts] = useState([
    {name: "Gian", content:"Gwapa kay ka", likes:2,id:1},
    {name: "Shad", content:"Pogi ko", likes:0, id:2},
    {name: "Carlos", content:"Hanging around", likes:0,id:3},
    {name: "Reyner", content:"Pagod na ako!", likes:0,id:4}],
  );


  const addPost = () => {
   setPosts ([...posts, {name: "Jayson", content:"I can do This", likes:0, id:5}])
  }

    return (
      <div className='app'>
        <Greeting />
        {posts.map (post => (
          <Post key={post.id} name={post.name} content={post.content} likes={post.likes} />
        ))}
        <AddPost addPostHandler={addPost}/>
      </div>
    );
  }


export default App;