import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menubar from './components/Menubar/Menubar';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menubar></Menubar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/service" element={<Services></Services>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
