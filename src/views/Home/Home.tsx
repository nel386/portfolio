import React from 'react';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Tu Nombre</h1>
      <p className="home-description">
        Desarrollador web especializado en React y TypeScript.
      </p>
      <a href="#projects" className="home-cta">
        Ver mis proyectos
      </a>
    </div>
  );
};

export default Home;
