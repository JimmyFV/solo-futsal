import React from 'react';
import Navbar from './front/js/component/navbar';
import Footer from './front/js/component/footer';
import {Home} from './front/js/views/home.js';
import Productos from './front/js/views/products.js';
import Formacion from './front/js/views/formacion.js';
import Noticias from './front/js/views/noticias.js';
import Articulos from './front/js/views/articulos.js';
import Entrenamientos from './front/js/views/entrenamientos.js';
import ScrollToTop from './front/js/component/scrollToTop';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/products' component={Productos}/>
          <Route path='/formacion' component={Formacion}/>
          <Route path='/noticias' component={Noticias}/>
          <Route path='/articulos' component={Articulos}/>
          <Route path='/entrenamientos' component={Entrenamientos}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
