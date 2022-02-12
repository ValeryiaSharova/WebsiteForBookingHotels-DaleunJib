import React from 'react';
import About from './components/about';
import Home from './components/home';
import Products from './components/products';
import Questions from './components/questions';
import Steps from './components/steps';

const Main = () => {
  return (
    <main className="main">
      <Home />
      <About />
      <Steps />
      <Products />
      <Questions />
    </main>
  );
};

export default Main;
