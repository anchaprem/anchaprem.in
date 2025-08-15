import React, { useState, useEffect } from 'react'
import Header from "./Components/header.jsx";
import Intro from './Components/IntroApp.jsx';
import Loading from './Components/Loading.jsx'
import Aboutme from './Components/Aboutme.jsx'
import Projects from './Components/Projects.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='bg-gray-800'>
          <Header/>
          <Intro/>
          <Aboutme/>
          <Projects/>
          <Footer/>
        </div>
      )}
    </>
  )
}

export default App