import React, { useEffect, useState, useRef } from "react";
import "./skills.scss";
import skillData from "./skillData";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  const [displayedSkills, setDisplayedSkills] = useState<typeof skillData>([]);
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          displaySkills();
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setDisplayedSkills([]);
    }
  }, [isVisible]);

  const displaySkills = () => {
    if (displayedSkills.length === 0) {
      let index = 0;

      const interval = setInterval(() => {
        setDisplayedSkills((prevState) => [...prevState, skillData[index]]);
        index++;

        if (index === skillData.length) {
          clearInterval(interval);
        }
      }, 200);
    }
  };

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <h2 className="skills-title">Habilidades</h2>
      <div className="skills-grid">
        {displayedSkills.map((skill, index) => (
          <Fade
            key={index}
            delay={200 * index}
            triggerOnce
            onVisibilityChange={(inView) => {
              if (inView) {
                setTimeout(() => {
                  const skillCard = document.querySelector(
                    `.skill-card-${index}`
                  );
                  if (skillCard) {
                    skillCard.classList.add("visible");
                  }
                }, 200 * index);
              }
            }}
          >
            <div className={`skill-card skill-card-${index}`}>
              {skill.icon}
              <p className="skill-name">{skill.name}</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Skills;
