import React from 'react';
import './Projects.css';
import img1 from '../../assets/1.jpeg';
import img2 from '../../assets/2.jpeg';
import img3 from '../../assets/3.jpeg';
import img4 from '../../assets/4.jpeg';
import img5 from '../../assets/5.jpeg';
import img6 from '../../assets/7.jpeg';
const projectsData = [
  {
    id: 1,
    image: img1,
    title: 'SauceDemo Web Testing Project',
    description:
      'Performed manual testing by crafting clear test cases, reporting bugs in JIRA, and collaborating with the team inside an Agile Scrum process.'
  },
  {
    id: 2,
    image: img2,
    title: 'Newman HTML Test Report',
    description:
      'Created automated API collections with Postman and generated detailed Newman HTML reports to share execution results with stakeholders.'
  },
  {
    id: 3,
    image: img3,
    title: 'The Weather Channel – Mobile App Performance Testing',
    description:
      'Performed mobile performance testing on The Weather Channel app using Apptim, analyzing responsiveness, stability, and resource usage.'
  },
  {
    id: 4,
    image: img4,
    title: 'Google Lighthouse Report',
    description:
      'Executed Lighthouse audits on the Luminus College website and presented key insights on SEO, accessibility, and overall web best practices.'
  },
  {
    id: 5,
    image: img5,
    title: 'JMeter HTML Reports',
    description:
      'Implemented load tests on the Platzi Fake Store website with JMeter and produced interactive HTML performance reports for trend analysis.'
  },
  {
    id: 6,
    image: img6,
    title: 'AutomationExercise Test Suite',
    description:
      'Built an automated UI regression suite for the AutomationExercise website using Selenium WebDriver and a clean POM architecture.'
  }
];

function Projects() {
  return (
    <section id='projects'>
      <h5>Some of My Work</h5>
      <h2>Projects</h2>

      <div className="projects_container">
        {projectsData.map(({ id, image, title, demo, description }) => (
          <div key={id} className="project_card">
            <div className="project_img">
              {image ? (
                <img src={image} alt={`${title} preview`} />
              ) : (
                <div className="project_img_placeholder">Image coming soon</div>
              )}
            </div>
            <div className="project_content">
              <h3>{title}</h3>
              <p className="project_description">{description}</p>
              {demo && (
                <a href={demo} target="_blank" rel="noreferrer" className="btn btn-demo">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
