(function() {
    'use strict';

    const isHomePage = window.location.pathname.includes('index.html') || 
                      window.location.pathname === '/' || 
                      window.location.pathname.endsWith('/');

    const canvas = document.createElement('canvas');
    canvas.className = 'network-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const config = {
        nodeCount: 25,
        connectionDistance: 200,
        nodeRadius: 2,
        lineWidth: 0.5,
        nodeColor: 'rgba(220, 202, 136, 0.4)',
        lineColor: 'rgba(220, 202, 136, 0.15)',
        hoverLineColor: 'rgba(220, 202, 136, 0.3)',
        nodeSpeed: 0.3,
        exclusionRadius: 0,
        exclusionCenter: { x: 0, y: 0 },
        hoverAttraction: false,
        hoverGlow: 0
    };

    const nodes = [];

    let profileImage = null;
    let profileImageRect = null;

    function distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isInExclusionZone(x, y) {
        if (!profileImageRect || config.exclusionRadius === 0) return false;
        
        const dist = distance(x, y, config.exclusionCenter.x, config.exclusionCenter.y);
        return dist < config.exclusionRadius;
    }

    function getExclusionInfluence(x, y) {
        if (!profileImageRect || config.exclusionRadius === 0) return 0;
        
        const dist = distance(x, y, config.exclusionCenter.x, config.exclusionCenter.y);
        const influenceRadius = config.exclusionRadius * 1.5;
        
        if (dist > influenceRadius) return 0;
        if (dist < config.exclusionRadius) return 1;
        
        const falloff = (dist - config.exclusionRadius) / (influenceRadius - config.exclusionRadius);
        return 1 - falloff;
    }

    function updateExclusionZone() {
        if (!isHomePage) {
            config.exclusionRadius = 0;
            return;
        }

        profileImage = document.querySelector('.profile-image');
        if (!profileImage) {
            config.exclusionRadius = 0;
            return;
        }

        profileImageRect = profileImage.getBoundingClientRect();
        const centerX = profileImageRect.left + profileImageRect.width / 2;
        const centerY = profileImageRect.top + profileImageRect.height / 2;
        const radius = Math.max(profileImageRect.width, profileImageRect.height) / 2 + 30;

        config.exclusionCenter.x = centerX;
        config.exclusionCenter.y = centerY;
        config.exclusionRadius = radius;
    }

    function initNodes() {
        nodes.length = 0;
        
        for (let i = 0; i < config.nodeCount; i++) {
            let x, y;
            let attempts = 0;
            const maxAttempts = 50;

            do {
                x = Math.random() * canvas.width;
                y = Math.random() * canvas.height;
                attempts++;
            } while (isInExclusionZone(x, y) && attempts < maxAttempts);

            nodes.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * config.nodeSpeed,
                vy: (Math.random() - 0.5) * config.nodeSpeed,
                connections: []
            });
        }
    }

    function updateNodes() {
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

            node.x = Math.max(0, Math.min(canvas.width, node.x));
            node.y = Math.max(0, Math.min(canvas.height, node.y));

            const influence = getExclusionInfluence(node.x, node.y);
            if (influence > 0) {
                const dx = node.x - config.exclusionCenter.x;
                const dy = node.y - config.exclusionCenter.y;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                
                const force = influence * 2;
                node.vx += (dx / dist) * force;
                node.vy += (dy / dist) * force;
                
                node.vx *= 0.95;
                node.vy *= 0.95;
            }

            if (config.hoverAttraction && profileImageRect) {
                const dx = node.x - config.exclusionCenter.x;
                const dy = node.y - config.exclusionCenter.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const attractionRadius = config.exclusionRadius * 1.3;
                
                if (dist > config.exclusionRadius && dist < attractionRadius) {
                    const angle = Math.atan2(dy, dx);
                    const targetX = config.exclusionCenter.x + Math.cos(angle) * config.exclusionRadius;
                    const targetY = config.exclusionCenter.y + Math.sin(angle) * config.exclusionRadius;
                    
                    const pullX = (targetX - node.x) * 0.01;
                    const pullY = (targetY - node.y) * 0.01;
                    
                    node.vx += pullX;
                    node.vy += pullY;
                }
            }
        });
    }

    function findConnections() {
        nodes.forEach(node => {
            node.connections = [];
            
            nodes.forEach(otherNode => {
                if (node === otherNode) return;
                
                const dist = distance(node.x, node.y, otherNode.x, otherNode.y);
                if (dist < config.connectionDistance) {
                    node.connections.push({
                        node: otherNode,
                        distance: dist
                    });
                }
            });
        });
    }

    function drawConnection(node1, node2) {
        const x1 = node1.x;
        const y1 = node1.y;
        const x2 = node2.x;
        const y2 = node2.y;

        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        const influence = getExclusionInfluence(midX, midY);

        const opacity = 1 - influence * 0.8;
        if (opacity < 0.1) return;

        ctx.save();
        ctx.strokeStyle = config.hoverAttraction ? config.hoverLineColor : config.lineColor;
        ctx.globalAlpha = opacity;
        ctx.lineWidth = config.lineWidth;
        ctx.beginPath();

        if (influence > 0.1) {
            const dx = x2 - x1;
            const dy = y2 - y1;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx);
            
            const perpAngle = angle + Math.PI / 2;
            const offset = influence * 30;
            const controlX = midX + Math.cos(perpAngle) * offset;
            const controlY = midY + Math.sin(perpAngle) * offset;
            
            ctx.moveTo(x1, y1);
            ctx.quadraticCurveTo(controlX, controlY, x2, y2);
        } else {
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
        }

        ctx.stroke();
        ctx.restore();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        updateExclusionZone();

        findConnections();
        nodes.forEach(node => {
            node.connections.forEach(conn => {
                drawConnection(node, conn.node);
            });
        });

        nodes.forEach(node => {
            const influence = getExclusionInfluence(node.x, node.y);
            const opacity = 1 - influence * 0.7;
            
            if (opacity < 0.1) return;

            ctx.save();
            ctx.fillStyle = config.nodeColor;
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.arc(node.x, node.y, config.nodeRadius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });

        if (config.hoverGlow > 0 && profileImageRect) {
            ctx.save();
            ctx.globalAlpha = config.hoverGlow * 0.3;
            ctx.strokeStyle = 'rgba(220, 202, 136, 1)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(
                config.exclusionCenter.x,
                config.exclusionCenter.y,
                config.exclusionRadius,
                0,
                Math.PI * 2
            );
            ctx.stroke();
            ctx.restore();
        }
    }

    function animate() {
        updateNodes();
        draw();
        animationFrameId = requestAnimationFrame(animate);
    }

    function handleResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        updateExclusionZone();
        initNodes();
    }

    function setupProfileImageHover() {
        if (!isHomePage) return;

        const checkForImage = setInterval(() => {
            profileImage = document.querySelector('.profile-image');
            if (profileImage) {
                clearInterval(checkForImage);
                
                profileImage.addEventListener('mouseenter', () => {
                    config.hoverAttraction = true;
                });

                profileImage.addEventListener('mouseleave', () => {
                    config.hoverAttraction = false;
                    config.hoverGlow = 0;
                });

                let glowDirection = 1;
                setInterval(() => {
                    if (config.hoverAttraction) {
                        config.hoverGlow += glowDirection * 0.05;
                        if (config.hoverGlow >= 1) glowDirection = -1;
                        if (config.hoverGlow <= 0.3) glowDirection = 1;
                    }
                }, 50);
            }
        }, 100);

        setTimeout(() => clearInterval(checkForImage), 5000);
    }

    function init() {
        handleResize();
        window.addEventListener('resize', handleResize);
        setupProfileImageHover();
        animate();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
