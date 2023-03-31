import "./skills.scss";

const skillData = [
  {
    name: "HTML",
    icon: "https://via.placeholder.com/50",
  },
  {
    name: "CSS",
    icon: "https://via.placeholder.com/50",
  },
  // ... Agrega más habilidades aquí
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Habilidades</h2>
      <div className="skills-grid">
        {skillData.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
