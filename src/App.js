
import React, {useState} from 'react';
import Post from './Post';
import './App.css';
import AddPost from './AddPost';

function App () {

  const [posts,setPosts] = useState([
    {name: "Gian", content:"Gwapa kay ka", likes:2},
    {name: "Shad", content:"Pogi ko", likes:0},
    {name: "Carlos", content:"Hanging around", likes:0},
    {name: "Reyner", content:"Pagod na ako!", likes:0},]
  );

  const addPost = () => {
    setPosts ([...posts, {name: "Jayson", content:"I can do This", likes:0}]);
  }
    return (
      <div className='app'>
        { posts.map (post => (
          <Post name={post.name} content={post.content} likes={post.likes} />
        ))}
        <AddPost addPostHandler={addPost}/>
      </div>
    );
  }


export default App;