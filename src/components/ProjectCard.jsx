import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      layout
    >
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
        <Link to={`/projects/${project.id}`} className="btn outline">
          View Details
        </Link>
        {!featured && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <i className="fa-brands fa-github" style={{ fontSize: "18px" }}></i> GitHub
          </a>
        )}
      </div>
    </motion.article>
  );
}
