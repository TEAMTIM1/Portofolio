
// Local import 
import NavBar from "./Pages/NavBar";
import Experience from "./Pages/Experience";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Main from "./Pages/Main";


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
        <Contact/>
      

    </div>
  )
}

export default App
