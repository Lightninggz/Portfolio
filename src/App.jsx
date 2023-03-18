import { BrowserRouter } from "react-router-dom";

import {About, Contact, Credits, Hero, Navbar, StarsCanvas} from './components';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Credits />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
