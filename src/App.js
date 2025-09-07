import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Homepage/Home';
import About from './pages/Aboutpage/About';
import Blog from './pages/Blogpage/Blog';
import Contact from './pages/Contactpage/Contact';
import Project from './pages/Projectpage/Project';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/about' element={<About/> } />
          <Route path='/blog' element={<Blog/> } />
          <Route path='/contact' element={<Contact/> } />
          <Route path='/project' element={<Project/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
