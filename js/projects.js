import { getProjects } from '../data/project.js';
import { getHeader } from '../includes/header.js';
import { getNavbar } from '../includes/navbar.js';
import { getFooter } from '../includes/footer.js';
import { htmlspecialchars } from './utils.js';

export function renderProjects() {
    const projects = getProjects();
    
    let projectsGrid = '';
    Object.keys(projects).forEach(id => {
        const project = projects[id];
        let tags = '';
        project.technologies.forEach(tag => {
            tags += `<span class="tag">${htmlspecialchars(tag)}</span>`;
        });
        
        projectsGrid += `
                <div class="project-card">
                    <h3 class="project-title">${htmlspecialchars(project.title)}</h3>
                    <p class="project-description">${htmlspecialchars(project.short_desc)}</p>
                    <div class="project-tags">
                        ${tags}
                    </div>
                    <div class="project-buttons">
                        <a href="project.html?id=${encodeURIComponent(id)}" class="btn btn-outline">View Details</a>
                        <a href="${htmlspecialchars(project.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
                    </div>
                </div>`;
    });
    
    return `${getHeader()}
${getNavbar()}

<section class="projects-page">
    <div class="container">
        <h1 class="page-title">My Projects</h1>
        <p class="page-intro">
            A collection of C++ projects showcasing my skills in software engineering, 
            object-oriented programming, algorithms, and problem-solving.
        </p>
        
        <div class="projects-grid">
            ${projectsGrid}
        </div>
    </div>
</section>

${getFooter()}`;
}