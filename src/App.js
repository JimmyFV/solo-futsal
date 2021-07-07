import React from 'react';
import ReactDOM from "react-dom";
import ScrollToTop from '../src/front/js/component/scrollToTop';
import './App.css';
// import Cards from '../src/front/js/component/Cards';
// import Navbar from '../src/front/js/component/navbar';
// import Slider from '../src/front/js/component/slider';
import {Home} from './front/js/views/home.js';



function App() {
  return (
    <div className="App d-flex flex-column h-100">
      <Home/>
      {/* <ScrollToTop>
        
      </ScrollToTop> */}
      
    </div>
  );
}

export default App;
