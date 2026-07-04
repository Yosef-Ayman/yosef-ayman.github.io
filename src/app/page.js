import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import TechMarquee from '@/components/TechMarquee';
import { featuredProjectIds, projects } from '@/data/projects';

const featuredProjects = featuredProjectIds.map((id) => projects.find((p) => p.id === id)).filter(Boolean);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="about">
            <p className="eyebrow">$ whoami</p>
            <h1 className="display">
              yosef <span className="hl">ayman</span>
            </h1>
            <p className="subtitle">junior @ fcai-cu</p>

            <p className="bio">
              Passionate about competitive programming, backend development, algorithms, and problem solving.
              Currently pursuing a Bachelor&apos;s in Computers &amp; Artificial Intelligence at Cairo University.
            </p>

            <p className="location">
              <i className="fa-solid fa-location-dot"></i> giza, egypt
            </p>

            <div className="buttons">
              <Link href="/projects" className="btn primary">
                view projects
              </Link>
              <Link href="/experience" className="btn outline">
                my experience
              </Link>
            </div>
          </div>

          <div className="term-window">
            <div className="term-titlebar">
              <span className="term-dot red" />
              <span className="term-dot yellow" />
              <span className="term-dot green" />
              <span className="term-titletext">yosef@portfolio: ~</span>
            </div>
            <div className="term-body">
              <p className="prompt-line">
                <span className="prompt-sigil">$</span> cat about.txt
              </p>
              <p style={{ color: 'var(--muted)', fontSize: 13.5, marginTop: 10 }}>
                Building things with Django, Laravel, React &amp; C++. Into competitive programming and clean,
                well-structured code.
              </p>
              <p className="prompt-line" style={{ marginTop: 18 }}>
                <span className="prompt-sigil">$</span> ./run_status.sh<span className="cursor" />
              </p>
              <p style={{ color: 'var(--accent)', fontSize: 13, marginTop: 10 }}>
                &gt; status: open to internships &amp; collaborations
              </p>
            </div>
          </div>
        </div>
      </section>

      <TechMarquee />

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">featured projects</h2>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
