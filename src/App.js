import React from 'react';
///Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';                           
import './App.css';


//Components
import Navigation from '../src/components/navigation/Navigation';
import Home from '../src/components/home/Home';
import Contacto from '../src/components/contacto/Contacto'

function App() {
  return (
    <Router>
        <Navigation names={['Inicio', 'Contacto']}
                    hrefs={['inicio','contacto']}
                          />
         <Route path="/"  exact component={Home} />            
         <Route path="/inicio"  component={Home} />
         <Route path="/contacto"  component={Contacto} />
    </Router>
  );
}

export default App;

