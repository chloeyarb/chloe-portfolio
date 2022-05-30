import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';


function App() {
  return (
    <Router>
    <div>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
      <main>
        <Footer></Footer>
      </main>
    </div>
    </Router>
  );
}

export default App;
