import React from 'react';
import Home from './Home';
import { Switch,Route,Redirect } from 'react-router-dom'
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from "./Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App = () => {
    <>
    <Navbar/>
    <Switch>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/contact' Component={Contact}/>
    <Route exact path='/about' Component={About}/>
    <Route exact path='/service' Component={Service}/>
    <Redirect to='/'/>

    </Switch>
    <Footer/>

    </>
}
export default App;