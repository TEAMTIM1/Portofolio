
// Local import 
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Exo from "./Particles/particles-config";

// style import
import './index.css';



function App() {
  

  return (
    <div className="App">
      
        < NavBar /> 
        < Main />
        < Experience/>
        < Projects />
        <About />
      

    </div>
  )
}

export default App
