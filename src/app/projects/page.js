import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Projects',
  description: "Explore Yosef Ayman's C++, Django, Laravel, and frontend projects."
};

export default function ProjectsPage() {
  return (
    <div className="container projects-page">
      <h1 className="page-title">$ ls projects/</h1>
      <p className="page-intro">
        A collection of backend, C++, and frontend projects showcasing software engineering, object-oriented
        programming, algorithms, and problem-solving.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
