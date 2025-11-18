import React from 'react';
import './Education.css';

function Education() {
  const educationData = [
    {
      id: 1,
      title: 'Bachelor of Computer Science',
      subtitle: 'Yarmouk University',
      details: 'Graduated with Very Good standing while mastering core software engineering and QA concepts.',
      period: '—'
    },
    {
      id: 7,
      title: 'QA Training Program',
      subtitle: 'LTUC',
      details: 'Comprehensive Java-based test automation training covering Selenium, TestNG, JUnit, Maven, and CI/CD projects.',
      period: '—'
    },
    {
      id: 8,
      title: 'Java Test Automation Engineer',
      subtitle: 'Udemy',
      details: 'Mastered Selenium WebDriver & REST Assured automation, focusing on maintainable frameworks and CLI-driven execution.',
      period: '—'
    }
  ];

  return (
    <section id='education'>
      <h5>My Journey</h5>
      <h2>Education & Experience</h2>

      <div className="education_container">
        {educationData.map(({ id, title, subtitle, details, period }) => (
          <div key={id} className="education_card">
            <div className="education_content">
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
              <p>{details}</p>
              <span className="education_period">{period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
