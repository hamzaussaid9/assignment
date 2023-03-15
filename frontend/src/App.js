import './App.css';
import { BrowserRouter,Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Posts from './pages/Posts';

function App() {
  const getPosts = async () => {

  }
  const createPost = async (post) => {

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
