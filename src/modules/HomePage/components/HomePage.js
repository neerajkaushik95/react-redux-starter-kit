import React from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>React Redux starter kit</h1>
    <h2>Get Started in seconds.</h2>
    <Link to="/counter"> Go back to Counter app </Link>
  </div>
);

export default HomePage;
