import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Timeline from './components/timeline';
import Projects from './components/projects';
import Blog from './components/blog';
import Contact from './components/contact';
import ContactForm from './components/contactForm';


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
            <Projects></Projects>
            <Blog></Blog>
            <Contact></Contact>
            <ContactForm></ContactForm>
          </div>
          </div>
      </div>
    )
  }
}

export default App;
