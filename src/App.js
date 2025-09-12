import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Homepage/Home';
import About from './pages/Aboutpage/About';
import Blog from './pages/Blogpage/Blog';
import Contact from './pages/Contactpage/Contact';
import Project from './pages/Projectpage/Project';
import ResidentalCleaning from './pages/Residential Cleaning/ResidentalCleaning';
import JanitorialCleaning from './pages/JanitorialCleaning/JanitorialCleaning';
import SupplyofMaterial from './pages/SupplyofMaterial/SupplyofMaterial';
import PostConstructionCleaning from './pages/PostConstructionCleaning/PostConstructionCleaning';
import Funmigation from './pages/Funmigation/PestControl/Funmigation';
import IndustrialCleaning from './pages/IndustrialCleaning/IndustrialCleaning';

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
          <Route path='/residentialService' element={<ResidentalCleaning/> } />
          <Route path='/janitorialService' element={<JanitorialCleaning/> } />
          <Route path='/supplyService' element={<SupplyofMaterial/> } />
          <Route path='/postConstructionService' element={<PostConstructionCleaning/> } />
          <Route path='/funmigationService' element={<Funmigation/> } />
          <Route path='/industrialService' element={<IndustrialCleaning/> } />

        </Routes>
      </Router>
    </>
  );
}

export default App;
