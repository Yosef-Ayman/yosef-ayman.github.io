import Page from '../components/Page.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Seo from '../components/Seo.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <Page className="projects-page">
      <Seo
        title="Projects"
        path="/projects"
        description="Explore Yosef Ayman's C++, frontend, software engineering, and Frontend Mentor projects."
      />

      <div className="container">
        <h1 className="page-title">My Projects</h1>
        <p className="page-intro">
            A collection of C++ projects showcasing my skills in software engineering, object-oriented programming, algorithms, and problem-solving.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Page>
  );
}
