import "./about.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">Acerca de mí</h2>
      <p className="about-description">
        Soy un desarrollador web apasionado con experiencia en tecnologías como
        React, Node.js y TypeScript. Me encanta aprender nuevas tecnologías y
        trabajar en proyectos desafiantes.
      </p>
      <div className="about-section">
        <h3 className="about-subtitle">Experiencia</h3>
        <ul className="about-list">
          <li>
            <strong>Desarrollador Web</strong> en Empresa XYZ | 2020 - Presente
          </li>
          <li>
            <strong>Desarrollador Frontend</strong> en Empresa ABC | 2019 - 2020
          </li>
        </ul>
      </div>
      <div className="about-section">
        <h3 className="about-subtitle">Educación</h3>
        <ul className="about-list">
          <li>
            <strong>Licenciatura en Ciencias de la Computación</strong> en
            Universidad de Ejemplo | 2015 - 2019
          </li>
          <li>
            <strong>Curso de Desarrollo Web</strong> en Plataforma de
            Aprendizaje | 2018
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
