import { getProjects } from '../data/project.js';
import { getHeader } from '../includes/header.js';
import { getNavbar } from '../includes/navbar.js';
import { getFooter } from '../includes/footer.js';
import { htmlspecialchars } from './utils.js';

export function renderIndex() {
    const projects = getProjects();
    const featuredIds = ['simple-audio-player', 'tic-tac-toe', 'image-processing', 'frontend-mentor'];
    
    let projectsGrid = '';
    featuredIds.forEach(id => {
        if (projects[id]) {
            const project = projects[id];
            let tags = '';
            project.technologies.forEach(tag => {
                tags += `<span>${htmlspecialchars(tag)}</span>`;
            });
            
            projectsGrid += `
              <div class="project-card">
                <h3>${htmlspecialchars(project.title)}</h3>
                <p>
                  ${htmlspecialchars(project.short_desc)}
                </p>

                <div class="tags">
                  ${tags}
                </div>

                <a href="project.html?id=${encodeURIComponent(id)}" class="btn outline">View Details</a>
              </div>`;
        }
    });
    
    return `${getHeader()}
${getNavbar()}

  <section class="hero">
    <div class="container">
      <div class="about">
          <p class="intro">Hi, I'm</p>
          <h1>Yosef Ayman</h1>
          <h2>Sophomore at Cairo University | Faculty of Computers & AI</h2>

          <p class="bio">
            Passionate about Competitive Programming, Web Development, Algorithms &
            Problem Solving. Currently pursuing a Bachelor's in Computers &
            Artificial Intelligence at Cairo University.
          </p>

          <p class="location">📍 Giza, Egypt</p>

          <div class="buttons">
            <a href="projects.html" class="btn primary">View Projects</a>
            <a href="experience.html" class="btn outline">My Experience</a>
          </div>
      </div>
      <div class="photo">
          <img src="Yosef.jpg" alt="Yosef's photo" loading="lazy">
      </div>
    </div>
  </section>

  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>

      <div class="projects-grid">
      ${projectsGrid}
      </div>
    </div>
  </section>

${getFooter()}`;
}