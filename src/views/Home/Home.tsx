import React from 'react';
import './home.scss';

const Home = () => {
  return (
    <section className="home" id='home'>
      <h1 className="home-title">Tu Nombre</h1>
      <p className="home-description">
        Desarrollador web especializado en React y TypeScript.
      </p>
      <a href="#projects" className="home-cta">
        Ver mis proyectos
      </a>
    </section>
  );
};

export default Home;
