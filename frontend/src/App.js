import './App.css';
import { BrowserRouter,Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Posts from './pages/Posts';

const baseURL =  `http://localhost:1500`;

function App() {
  const getPosts = async () => {
    return await fetch(`${baseURL}/getPosts`).then(res=> res.json()).then(res=> res);

  }
  const createPost = async (post) => {
    await fetch(`${baseURL}/addPost`, {method: 'POST', body: JSON.stringify(post)});
  } 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/create' element={<CreatePost createPost={createPost} /> } />
        <Route path='/posts' element={<Posts getPosts={getPosts} /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
