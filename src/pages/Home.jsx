import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Page from '../components/Page.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Seo from '../components/Seo.jsx';
import profilePhoto from '../assets/images/Yosef.jpg';
import { featuredProjectIds, projects } from '../data/projects.js';

const featuredProjects = featuredProjectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean);

export default function Home() {
  return (
    <Page>
      <Seo title="Home" path="/" />

      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            className="about"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="intro">Hi, I&apos;m</p>
            <h1>Yosef Ayman</h1>
            <h2>Sophomore at Cairo University | Faculty of Computers & AI</h2>

            <p className="bio">
              Passionate about Competitive Programming, Web Development, Backend Development, Algorithms & Problem Solving. Currently pursuing a
              Bachelor&apos;s in Computers & Artificial Intelligence at Cairo University.
            </p>

            <p className="location">
              <MapPin size={18} aria-hidden="true" /> Giza, Egypt
            </p>

            <div className="buttons">
              <Link to="/projects" className="btn primary">
                View Projects
              </Link>
              <Link to="/experience" className="btn outline">
                My Experience
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="photo"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src={profilePhoto} alt="Yosef Ayman" loading="eager" decoding="async" />
          </motion.div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
