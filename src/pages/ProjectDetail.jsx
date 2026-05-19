import { Code2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Page from '../components/Page.jsx';
import Seo from '../components/Seo.jsx';
import { frontendMentorProjects } from '../data/frontendMentor.js';
import { getProjectById } from '../data/projects.js';

const techLabels = {
  html: 'HTML',
  css: 'CSS',
  js: 'JavaScript'
};

function FrontendMentorGrid() {
  return (
    <section className="fm-challenges-section" aria-labelledby="frontend-mentor-heading">
      <h2 id="frontend-mentor-heading" className="section-title">
        Frontend Mentor Challenges
      </h2>
      <div className="fm-challenges-grid">
        {frontendMentorProjects.map((project, index) => (
          <motion.article
            className="fm-card"
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.35) }}
          >
            <div className="fm-card-thumbnail">
              <img src={project.screenshot} alt={`${project.title} screenshot`} loading="lazy" decoding="async" />
              <div className="fm-card-overlay">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="fm-overlay-btn">
                  <ExternalLink size={16} aria-hidden="true" /> Live Preview
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="fm-overlay-btn fm-btn-source">
                    <i className="fa-brands fa-github"></i> Source Code
                </a>
              </div>
            </div>
            <div className="fm-card-content">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <h3 className="fm-card-title">{project.title}</h3>
              </a>
              <div className="fm-tech-icons" aria-label={`${project.title} technologies`}>
                {project.technologies.map((tech) => (
                  <span key={tech}>{techLabels[tech] || tech}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <Page className="project-detail-page">
        <Seo title="Project Not Found" path={`/projects/${projectId || ''}`} description="The requested portfolio project could not be found." />
        <div className="container">
          <div className="error-message">
            <h1 className="page-title">Project Not Found</h1>
            <p>The project you&apos;re looking for doesn&apos;t exist or has been removed.</p>
            <Link to="/projects" className="btn primary">
              Back to Projects
            </Link>
          </div>
        </div>
      </Page>
    );
  }

  return (
    <Page className="project-page">
      <Seo title={project.title} path={`/projects/${project.id}`} description={project.shortDesc} type="article" />

      <div className="project-hero">
        <h1>{project.title}</h1>
        <div className="project-meta">{project.shortDesc}</div>
        <p className="project-summary">{project.about}</p>
      </div>

      <section className="card" aria-labelledby="about-project-heading">
        <h2 id="about-project-heading">About the Project</h2>
        <p>{project.about}</p>
      </section>

      <section className="features" aria-labelledby="features-heading">
        <h2 id="features-heading" className="section-title">
          Features
        </h2>
        <div className="features-grid">
          {project.features.map((feature) => (
            <motion.div key={feature} className="feature-card" whileHover={{ y: -4 }}>
              {feature}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="technologies" aria-labelledby="tech-heading">
        <h2 id="tech-heading" className="section-title">
          Technologies
        </h2>
        <div className="tech-list">
          {project.technologies.map((tech) => (
            <span key={tech}>
              <Code2 size={14} aria-hidden="true" /> {tech}
            </span>
          ))}
        </div>
      </section>

      {project.highlights?.length > 0 && (
        <section className="highlights" aria-labelledby="highlights-heading">
          <h2 id="highlights-heading" className="section-title">
            Project Highlights
          </h2>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>
      )}

      {project.id === 'frontend-mentor' && <FrontendMentorGrid />}

      <div className="center-btn project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn primary">
            <i className="fa-brands fa-github" style={{ fontSize: "18px" }}></i> View on GitHub
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn outline">
            <ExternalLink size={18} aria-hidden="true" /> Live Preview
          </a>
        )}
      </div>
    </Page>
  );
}
