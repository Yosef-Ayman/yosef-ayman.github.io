import Link from 'next/link';

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.shortDesc}</p>

      <div className={featured ? 'tags' : 'project-tags'} aria-label={`${project.title} technologies`}>
        {project.technologies.map((tag) => (
          <span key={tag} className={featured ? undefined : 'tag'}>
            {tag}
          </span>
        ))}
      </div>

      <div className="project-buttons">
        <Link href={`/projects/${project.id}`} className="btn outline">
          view details
        </Link>
        {!featured && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn secondary">
            <i className="fab fa-github" style={{ fontSize: "17px" }}></i> github
          </a>
        )}
      </div>
    </article>
  );
}
