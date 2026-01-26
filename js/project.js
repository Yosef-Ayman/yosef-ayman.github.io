import { getProjects } from '../data/project.js';
import { fmProjects } from '../data/frontend_mentor.js';
import { getHeader } from '../includes/header.js';
import { getNavbar } from '../includes/navbar.js';
import { getFooter } from '../includes/footer.js';
import { htmlspecialchars, getUrlParam } from './utils.js';

export function renderProject() {
    const projectId = getUrlParam('id') ? getUrlParam('id').trim() : '';
    const sanitizedProjectId = htmlspecialchars(projectId);
    
    const projects = getProjects();
    
    let project = null;
    if (sanitizedProjectId && projects[sanitizedProjectId]) {
        project = projects[sanitizedProjectId];
    }
    
    const techIcons = {
        'html': 'fab fa-html5',
        'css': 'fab fa-css3-alt',
        'js': 'fab fa-js',
        'php': 'fab fa-php'
    };
    
    if (project) {
        let featuresHtml = '';
        project.features.forEach(feature => {
            featuresHtml += `
                    <div class="feature-card">
                        ${htmlspecialchars(feature)}
                    </div>`;
        });
        
        let technologiesHtml = '';
        project.technologies.forEach(tech => {
            technologiesHtml += `<span>${htmlspecialchars(tech)}</span>`;
        });
        
        let highlightsHtml = '';
        if (project.highlights && project.highlights.length > 0) {
            project.highlights.forEach(highlight => {
                highlightsHtml += `<li>${htmlspecialchars(highlight)}</li>`;
            });
        }
        
        let fmChallengesHtml = '';
        if (sanitizedProjectId === 'frontend-mentor') {
            fmProjects.forEach((p, i) => {
                const techIconsHtml = p.fm_meta.map(tech => {
                    if (techIcons[tech]) {
                        return `<i class="${techIcons[tech]}"></i>`;
                    }
                    return '';
                }).join('');
                
                fmChallengesHtml += `
                    <article class="fm-card fm-card-visible" data-tech="${htmlspecialchars(p.fm_meta.join(','))}" style="animation-delay: ${i * 0.05}s">
                        <div class="fm-card-thumbnail">
                            <img src="../data/screenshots/${htmlspecialchars(p.slug)}.png" alt="${htmlspecialchars(p.fm_title)}" loading="lazy">
                            <div class="fm-card-overlay">
                                <a href="${htmlspecialchars(p.live)}" target="_blank" rel="noopener noreferrer" class="fm-overlay-btn fm-btn-live">
                                    <i class="fas fa-external-link-alt"></i> Live Preview
                                </a>
                                <a href="${htmlspecialchars(p.github)}" target="_blank" rel="noopener noreferrer" class="fm-overlay-btn fm-btn-source">
                                    <i class="fab fa-github"></i> Source Code
                                </a>
                            </div>
                        </div>
                        <div class="fm-card-content">
                            <a href="${htmlspecialchars(p.live)}" target="_blank" rel="noopener noreferrer">
                                <h3 class="fm-card-title">${htmlspecialchars(p.fm_title)}</h3>
                            </a>
                            <div class="fm-card-meta">
                                <div class="fm-tech-icons">
                                    ${techIconsHtml}
                                </div>
                            </div>
                        </div>
                    </article>`;
            });
        }
        
        let liveButtonHtml = '';
        if (project.live) {
            liveButtonHtml = `<a href="${htmlspecialchars(project.live)}" target="_blank" rel="noopener noreferrer" class="btn outline live-preview"> <i class="fas fa-external-link-alt"></i> Live Preview</a>`;
        }
        
        let highlightsSectionHtml = '';
        if (project.highlights && project.highlights.length > 0) {
            highlightsSectionHtml = `
        <section class="highlights">
            <h2 class="section-title">Project Highlights</h2>
            <ul>
                ${highlightsHtml}
            </ul>
        </section>`;
        }
        
        let fmSectionHtml = '';
        if (sanitizedProjectId === 'frontend-mentor') {
            fmSectionHtml = `
            <section class="fm-challenges-grid" id="challenges-grid">
                ${fmChallengesHtml}
            </section>`;
        }
        
        return `${getHeader()}
${getNavbar()}

    <div class="project-page">
        <div class="project-hero">
            <h1>${htmlspecialchars(project.title)}</h1>
            <div class="project-meta">${htmlspecialchars(project.short_desc)}</div>
            <p class="project-summary">${htmlspecialchars(project.about)}</p>
        </div>
        
        <div class="card">
            <h3>About the Project</h3>
            <p style="color: #9ca3af; line-height: 1.7;">${htmlspecialchars(project.about)}</p>
        </div>
        
        <section class="features">
            <h2 class="section-title">Features</h2>
            <div class="features-grid">
                ${featuresHtml}
            </div>
        </section>
        
        <section class="technologies">
            <h2 class="section-title">Technologies</h2>
            <div class="tech-list">
                ${technologiesHtml}
            </div>
        </section>
        
        ${highlightsSectionHtml}

        ${fmSectionHtml}

        <div class="center-btn">
            <a href="${htmlspecialchars(project.github)}" target="_blank" rel="noopener noreferrer" class="btn primary"> <i class="fa-brands fa-github"></i> View on GitHub </a>
            ${liveButtonHtml}
        </div>
    </div>
${getFooter()}`;
    } else {
        return `${getHeader()}
${getNavbar()}

    <section class="project-detail-page">
        <div class="container">
            <div class="error-message">
                <h1 class="page-title">Project Not Found</h1>
                <p>The project you're looking for doesn't exist or has been removed.</p>
                <a href="projects.html" class="btn primary">Back to Projects</a>
            </div>
        </div>
    </section>
${getFooter()}`;
    }
}