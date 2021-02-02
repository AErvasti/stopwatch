import './App.css';
import {useState} from 'react'
import Navbar from './fragments/Navbar';
import Header from './fragments/Header';
import Footer from './fragments/Footer';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import Route from 'react'
import Switch from 'react'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contactus" component={ContactUs}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
      </Header>
      <Footer></Footer>
    </>
  );
}

export default App;
