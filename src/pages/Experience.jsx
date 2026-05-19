import { achievements, education, interests, skills } from '../data/experience.js';
import Page from '../components/Page.jsx';
import Seo from '../components/Seo.jsx';

export default function Experience() {
  return (
    <Page className="experience-page">
      <Seo
        title="Experience"
        path="/experience"
        description="Education, achievements, technical skills, and interests for Yosef Ayman."
      />

      <div className="container">
        <h1 className="page-title">Experience</h1>

        <section className="experience-section" aria-labelledby="education-heading">
          <h2 id="education-heading" className="section-title">
            Education
          </h2>
          {education.map((item) => (
            <article className="experience-item" key={item.title}>
              <h3 className="experience-title">{item.title}</h3>
              <p className="experience-org">{item.org}</p>
              <p className="experience-description">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="experience-section" aria-labelledby="achievements-heading">
          <h2 id="achievements-heading" className="section-title">
            Achievements
          </h2>
          {achievements.map((item) => (
            <article className="experience-item" key={item.title}>
              <h3 className="experience-title">{item.title}</h3>
              <p className="experience-subtitle">{item.subtitle}</p>
              <p className="experience-description">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="experience-section" aria-labelledby="interests-heading">
          <h2 id="interests-heading" className="section-title">
            Interests
          </h2>
          <ul className="interests-list">
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </section>

        <section className="experience-section" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="section-title">
            Technical Skills
          </h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-category" key={skill.title}>
                <h3 className="skill-category-title">{skill.title}</h3>
                <p className="skill-items">{skill.items}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Page>
  );
}
