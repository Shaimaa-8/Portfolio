import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

import manualIcon from "../../assets/8.jpeg";
import automationIcon from "../../assets/9.jpeg";
import apiIcon from "../../assets/10.jpeg";
import performanceIcon from "../../assets/11.jpeg";
import devopsIcon from "../../assets/12.jpeg";
import securityIcon from "../../assets/13.jpeg";

const SkillsData = [
  {
    id: 1,
    image: manualIcon,
    title: 'Manual Testing',
    disc: 'Functional · Regression · Smoke · UAT',
  },
  {
    id: 2,
    image: automationIcon,
    title: 'Automation',
    disc: 'Selenium · TestNG · POM · Appium',
  },
  {
    id: 3,
    image: apiIcon,
    title: 'API Testing',
    disc: 'Postman · Newman',
  },
  {
    id: 4,
    image: devopsIcon,
    title: 'Performance Testing',
    disc: 'JMeter',
  },
  {
    id: 5,
    image: performanceIcon,
    title: 'DevOps',
    disc: 'Jenkins · CI/CD · Git',
  },
  {
    id: 6,
    image: securityIcon,
    title: 'Security Testing',
    disc: 'OWASP ZAP',
  },
];

function Skills() {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Expreience</h2>


      <div className="container container_skills">
      {SkillsData.map(({ id, image, title, disc }) => (
        <article key={id} className="card_skill">
            <div className="icon">
              {image ? (
                <img src={image} alt={title} />
              ) : (
                <div className="skill_icon_placeholder">
                  <BsPatchCheckFill />
                </div>
              )}
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
        </article>
      ))}
      </div>
    </section>
  );
}

export default Skills;
