import React from 'react';
import './LandingPage.css';
import Navbar from './Navbar/Navbar';
import Form from './Form/Form';
import Signup from './Signup/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <Navbar />
    </>
  );
}

export default LandingPage;
