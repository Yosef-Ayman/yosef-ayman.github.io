(function() {
    'use strict';

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        return;
    }

    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    const cursorRing = document.createElement('div');
    cursorRing.className = 'cursor-ring';
    document.body.appendChild(cursorRing);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    function animateRing() {
        const dx = mouseX - ringX;
        const dy = mouseY - ringY;
        
        ringX += dx * 0.15;
        ringY += dy * 0.15;
        
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        
        requestAnimationFrame(animateRing);
    }
    animateRing();

    const interactiveElements = document.querySelectorAll(
        'a, button, .btn, input, textarea, select, [role="button"], .project-card, .project-links a'
    );

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorRing.classList.add('hover');
        });

        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorRing.classList.remove('hover');
        });
    });

    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
        cursorRing.classList.add('click');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
        cursorRing.classList.remove('click');
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorRing.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorRing.style.opacity = '1';
    });

    cursor.style.opacity = '1';
    cursorRing.style.opacity = '1';
})();
