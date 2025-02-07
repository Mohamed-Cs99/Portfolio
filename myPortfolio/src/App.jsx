
import './App.css'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import Navbar from './Component/Navbar/Navbar';
import Skills from './Component/Skills/Skills';
import Scroll from './Component/Scroll/Scroll';
import Projects from './Component/Projects/Projects';



function App() {


  return (
    <>
        
        <Navbar/>
        <Home />
        <Skills/>
        <Projects/>
        <Contact />
        <Footer />
        <Scroll/>
      

    </>
  )
}

export default App
