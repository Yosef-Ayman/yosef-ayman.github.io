import Link from 'next/link';
import { frontendMentorProjects } from '@/data/frontendMentor';
import { getProjectById, projects } from '@/data/projects';
import ProjectGallery from '@/components/ProjectGallery';

const techLabels = { html: 'HTML', css: 'CSS', js: 'JavaScript' };

export function generateStaticParams() {
  return projects.map((p) => ({ projectId: p.id }));
}

export function generateMetadata({ params }) {
  const project = getProjectById(params.projectId);
  if (!project) return { title: 'Project Not Found' };
  return { title: project.title, description: project.shortDesc };
}

function FrontendMentorGrid() {
  return (
    <section className="fm-challenges-section" aria-labelledby="frontend-mentor-heading">
      <h2 id="frontend-mentor-heading" className="section-title">
        frontend mentor challenges
      </h2>
      <div className="fm-challenges-grid">
        {frontendMentorProjects.map((project) => (
          <article className="fm-card" key={project.slug}>
            <div className="fm-card-thumbnail">
              <img src={project.screenshot} alt={`${project.title} screenshot`} loading="lazy" />
              <div className="fm-card-overlay">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="fm-overlay-btn">
                  <i className="fas fa-up-right-from-square"></i> live preview
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="fm-overlay-btn">
                  <i className="fab fa-github"></i> source code
                </a>
              </div>
            </div>
            <div className="fm-card-content">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <h3 className="fm-card-title">{project.title}</h3>
              </a>
              <div className="fm-tech-icons">
                {project.technologies.map((tech) => (
                  <span key={tech}>{techLabels[tech] || tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ProjectDetail({ params }) {
  const project = getProjectById(params.projectId);

  if (!project) {
    return (
      <div className="container">
        <div className="error-message">
          <h1 className="page-title">project not found</h1>
          <p>The project you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link href="/projects" className="btn primary">
            back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-page">
      <div className="container project-hero">
        <h1>{project.title}</h1>
        <div className="project-meta">{project.shortDesc}</div>
        <p className="project-summary">{project.about}</p>
      </div>

      <section className="card" aria-labelledby="about-project-heading">
        <h2 id="about-project-heading">about the project</h2>
        <p>{project.about}</p>
      </section>

      <section className="features" aria-labelledby="features-heading">
        <h2 id="features-heading" className="section-title">
          features
        </h2>
        <div className="features-grid">
          {project.features.map((feature) => (
            <div key={feature} className="feature-card">
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="technologies" aria-labelledby="tech-heading">
        <h2 id="tech-heading" className="section-title">
          technologies
        </h2>
        <div className="tech-list">
          {project.technologies.map((tech) => (
            <span key={tech}>
              <i className="fas fa-code"></i> {tech}
            </span>
          ))}
        </div>
      </section>

      {project.highlights?.length > 0 && (
        <section className="highlights" aria-labelledby="highlights-heading">
          <h2 id="highlights-heading" className="section-title">
            project highlights
          </h2>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>
      )}

      {project.id === 'frontend-mentor' && <FrontendMentorGrid />}

      {project.demo?.length > 0 && <ProjectGallery images={project.demo} />}

      <div className="center-btn project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn primary">
          <i className="fab fa-github"></i> view on github
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn outline">
            <i className="fas fa-up-right-from-square"></i> live preview
          </a>
        )}
        {project.watch && (
          <a href={project.watch} target="_blank" rel="noopener noreferrer" className="btn outline">
            <i className="fas fa-circle-play"></i> watch demo
          </a>
        )}
      </div>
    </div>
  );
}
