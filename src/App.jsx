import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import VideoTour from './components/VideoTour';
import Teachers from './components/Teachers';
import Events from './components/Events';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <VideoTour />
      <Teachers />
      <Events />
      <Testimonial />
      <Blog />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
