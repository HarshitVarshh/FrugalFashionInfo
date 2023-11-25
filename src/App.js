import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Project from "./components/Project";
import Volunteer from "./components/Volunteer";
import Contact from "./components/Contact";
import Info from "./components/Info";
import './components/Responsive.css';
import image from './Images/image.webp'
import Donation from "./components/Donation";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="body">
          <Routes>
            <Route
              path="/info"
              element={<Info />} 
            />
            <Route
              path="/FrugalFashionInfo/"
              element={<Project />} 
            />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/project" element={<Project />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
