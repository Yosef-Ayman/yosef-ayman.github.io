(function() {
    'use strict';

    function getBasePath() {
        const path = window.location.pathname;
        if (path.includes('/projects/')) {
            return '../';
        }
        return './';
    }

    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        return filename;
    }

    function updateNavLinks(basePath, currentPage) {
        const navLinks = document.querySelectorAll('[data-nav-link]');
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('data-nav-link');
            const href = basePath === '../' ? basePath + linkPage : linkPage;
            link.setAttribute('href', href);
            
            if (linkPage === currentPage || 
                (currentPage === '' && linkPage === 'index.html') ||
                (currentPage === 'index.html' && linkPage === 'index.html')) {
                link.classList.add('active');
            }
        });
        
        const regularNavLinks = document.querySelectorAll('.nav-links a');
        regularNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                if (basePath === '../' && !href.startsWith('../')) {
                    const linkPage = href.split('/').pop();
                    if (linkPage === 'index.html' || linkPage === 'projects.html' || linkPage === 'experience.html') {
                        link.setAttribute('href', basePath + linkPage);
                    }
                }
            }
        });
    }

    function loadHeader() {
        const basePath = getBasePath();
        const headerPath = basePath + 'partials/header.html';
        const headerElement = document.getElementById('header');
        
        if (!headerElement) {
            console.warn('Header element with id="header" not found');
            return;
        }

        fetch(headerPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load header: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                headerElement.innerHTML = html;
                
                const currentPage = getCurrentPage();
                updateNavLinks(basePath, currentPage);
                
                if (typeof initializeNavbar === 'function') {
                    initializeNavbar();
                }
            })
            .catch(error => {
                console.error('Error loading header:', error);
                headerElement.innerHTML = '<p style="color: red;">Error loading header</p>';
            });
    }

    function loadFooter() {
        const basePath = getBasePath();
        const footerPath = basePath + 'partials/footer.html';
        const footerElement = document.getElementById('footer');
        
        if (!footerElement) {
            console.warn('Footer element with id="footer" not found');
            return;
        }

        fetch(footerPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load footer: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                footerElement.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                footerElement.innerHTML = '<p style="color: red;">Error loading footer</p>';
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            loadHeader();
            loadFooter();
        });
    } else {
        loadHeader();
        loadFooter();
    }
})();
