import React from 'react'
import SideHeader from './components/SideHeader'
import TopHeader from './components/TopHeader'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Portfolio from './pages/Portfolio';
import './App.scss';
import { IoInvertModeOutline, IoInvertMode } from 'react-icons/io5';
function App() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [isDarkMode, setDarkMode] = React.useState(false)
  const [Components, setComponents] = React.useState<String>('Home')
  const handleResize = () => {
    if (window.innerWidth < 1500) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  const NavComponent = (Comp: String) => {
    setComponents(Comp)
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log(isMobile);
  });
  return (
    <>
      {isDarkMode ?
        <div className="App-dark">
          {isMobile ?
            <div className="App-mobile">
              <TopHeader color={"black"} func={NavComponent} />
              {Components == "Home" && <Home color={"black"} />}
              {Components == "About" && <About color={"black"} />}
              {Components == "Portfolio" && <Portfolio color={"black"} />}
              {Components == "Blogs" && <Blogs color={"black"} />}
              {Components == "Contact" && <Contact color={"black"} />}
            </div>
            :
            <div className="App-desktop">
              <SideHeader color={"black"} func={NavComponent} />
              {Components == "Home" && <Home color={"black"} />}
              {Components == "About" && <About color={"black"} />}
              {Components == "Portfolio" && <Portfolio color={"black"} />}
              {Components == "Blogs" && <Blogs color={"black"} />}
              {Components == "Contact" && <Contact color={"black"} />}
            </div>
          }
        </div> :
        <div className="App-normal">
          {isMobile ?
            <div className="App-mobile">
              <TopHeader color={"white"} func={NavComponent} />
              {Components == "Home" && <Home color={"white"} />}
              {Components == "About" && <About color={"white"} />}
              {Components == "Portfolio" && <Portfolio color={"white"} />}
              {Components == "Blogs" && <Blogs color={"white"} />}
              {Components == "Contact" && <Contact color={"white"} />}
            </div>
            :
            <div className="App-desktop">
              <SideHeader color={"white"} func={NavComponent} />
              {Components == "Home" && <Home color={"white"} />}
              {Components == "About" && <About color={"white"} />}
              {Components == "Portfolio" && <Portfolio color={"white"} />}
              {Components == "Blogs" && <Blogs color={"white"} />}
              {Components == "Contact" && <Contact color={"white"} />}
            </div>
          }
        </div>}
      {/* floating dark color mode changer */}
      <div className="color-mode">
        {isDarkMode ? <IoInvertModeOutline size={35} color="white" onClick={res => setDarkMode(prev => !prev)} /> : <IoInvertModeOutline size={35} color="black" onClick={res => setDarkMode(prev => !prev)} />}
      </div>
    </>
  )
}
export default App

