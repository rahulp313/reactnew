import React from 'react';
import Common from './Common';
import web from "../src/images/r8.png";
const About = () => {
  return (
      <>
      <Common 
      name='Welcome to About page' 
      img = {web} 
      visit='/contact' 
      btname="contact Now"/>
      </>

  )
}

export default About;