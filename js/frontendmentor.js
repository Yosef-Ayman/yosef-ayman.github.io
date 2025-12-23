(function() {
    'use strict';

    const challenges = [
        {
            name: 'QR Code Component',
            difficulty: 'newbie',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/qr-code-component-main',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/qr-code-component-main',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/qr-code-component-main'
        },
        {
            name: 'Product Preview Card',
            difficulty: 'newbie',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/product-preview-card',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/product-preview-card',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/product-preview-card'
        },
        {
            name: 'NFT Preview Card',
            difficulty: 'newbie',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/nft-preview-card',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/nft-preview-card',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/nft-preview-card'
        },
        {
            name: 'Order Summary Card',
            difficulty: 'newbie',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/order-summary',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/order-summary',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/order-summary'
        },
        {
            name: 'Stats Preview Card',
            difficulty: 'newbie',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/stats-preview-card',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/stats-preview-card',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/stats-preview-card'
        },
        {
            name: '3 Column Preview Card',
            difficulty: 'newbie',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/3-column-preview-card',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/3-column-preview-card',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/3-column-preview-card'
        },
        {
            name: 'Social Proof Section',
            difficulty: 'newbie',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/social-proof-section-master',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/social-proof-section-master',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/social-proof-section-master'
        },
        {
            name: 'Four Card Feature',
            difficulty: 'newbie',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/four-card-feature',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/four-card-feature',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/four-card-feature'
        },
        {
            name: 'Single Price Grid',
            difficulty: 'newbie',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/single-price-grid-master',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/single-price-grid-master',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/single-price-grid-master'
        },
        {
            name: 'Huddle Landing Page',
            difficulty: 'junior',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/huddle-landing-page-with-single-introductory',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/huddle-landing-page-with-single-introductory',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/huddle-landing-page-with-single-introductory'
        },
        {
            name: 'Blog Preview Card',
            difficulty: 'newbie',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/blog-preview-card-main',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/blog-preview-card-main',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/blog-preview-card-main'
        },
        {
            name: 'Profile Card Component',
            difficulty: 'newbie',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/profile-card',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/profile-card',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/profile-card'
        },
        {
            name: 'Results Summary Component',
            difficulty: 'junior',
            technologies: ['html', 'css', 'js'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/results-summary',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/results-summary',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/results-summary'
        },
        {
            name: 'Social Links Profile',
            difficulty: 'newbie',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/social-links-profile',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/social-links-profile',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/social-links-profile'
        },
        {
            name: 'Recipe Page',
            difficulty: 'junior',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/recipe-page',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/recipe-page',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/recipe-page'
        },
        {
            name: 'Chat App CSS Illustration',
            difficulty: 'junior',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/chat-app-css-illustration-master',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/chat-app-css-illustration-master',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/chat-app-css-illustration-master'
        },
        {
            name: 'Clipboard Landing Page',
            difficulty: 'junior',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/clipboard-landing-page-master/',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/clipboard-landing-page-master/',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/clipboard-landing-page-master'
        },
        {
            name: 'Testimonials Grid Section',
            difficulty: 'junior',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/testimonials-grid-section-main',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/testimonials-grid-section-main',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/testimonials-grid-section-main'
        },
        {
            name: 'Bento Grid',
            difficulty: 'intermediate',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/bento-grid-main',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/bento-grid-main',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/bento-grid-main'
        },
        {
            name: 'Fylo Data Storage Component',
            difficulty: 'junior',
            technologies: ['html', 'css'],
            thumbnail: 'https://image.thum.io/get/https://yosef-ayman.github.io/frontend-mentor-challenges/fylo-data-storage-component-master',
            liveUrl: 'https://yosef-ayman.github.io/frontend-mentor-challenges/fylo-data-storage-component-master',
            sourceUrl: 'https://github.com/Yosef-Ayman/yosef-ayman.github.io/tree/main/frontend-mentor-challenges/fylo-data-storage-component-master'
        }
    ];

    function getDifficultyClass(difficulty) {
        const classes = {
            'newbie': 'badge-newbie',
            'junior': 'badge-junior',
            'intermediate': 'badge-intermediate'
        };
        return classes[difficulty] || 'badge-newbie';
    }

    function getTechIcons(technologies) {
        const icons = {
            'html': '<i class="fab fa-html5"></i>',
            'css': '<i class="fab fa-css3-alt"></i>',
            'js': '<i class="fab fa-js"></i>'
        };
        return technologies.map(tech => icons[tech] || '').join('');
    }

    function createChallengeCard(challenge, index) {
        const techIcons = getTechIcons(challenge.technologies);

        return `
            <article class="fm-card" data-tech="${challenge.technologies.join(',')}" style="animation-delay: ${index * 0.05}s">
                <div class="fm-card-thumbnail">
                    <img src="${challenge.thumbnail}" alt="${challenge.name}" loading="lazy">
                    <div class="fm-card-overlay">
                        <a href="${challenge.liveUrl}" target="_blank" rel="noopener noreferrer" class="fm-overlay-btn fm-btn-live">
                            <i class="fas fa-external-link-alt"></i> Live Preview
                        </a>
                        <a href="${challenge.sourceUrl}" target="_blank" rel="noopener noreferrer" class="fm-overlay-btn fm-btn-source">
                            <i class="fab fa-github"></i> Source Code
                        </a>
                    </div>
                </div>
                <div class="fm-card-content">
                    <h3 class="fm-card-title">${challenge.name}</h3>
                    <div class="fm-card-meta">
                        <div class="fm-tech-icons">${techIcons}</div>
                    </div>
                </div>
            </article>
        `;
    }

    function renderChallenges(filteredChallenges) {
        const grid = document.getElementById('challenges-grid');
        if (!grid) return;

        grid.innerHTML = filteredChallenges.length > 0
            ? filteredChallenges.map((challenge, index) => createChallengeCard(challenge, index)).join('')
            : '<p class="fm-no-results">No challenges found matching the selected filters.</p>';

        observeCards();
    }

    function filterChallenges() {
        const techFilter = document.getElementById('tech-filter')?.value || 'all';

        const filtered = challenges.filter(challenge => {
            const matchesTech = techFilter === 'all' || challenge.technologies.includes(techFilter);
            return matchesTech;
        });

        renderChallenges(filtered);
    }

    function observeCards() {
        const cards = document.querySelectorAll('.fm-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fm-card-visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        cards.forEach(card => observer.observe(card));
    }

    function init() {
        renderChallenges(challenges);

        const techFilter = document.getElementById('tech-filter');

        if (techFilter) {
            techFilter.addEventListener('change', filterChallenges);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
