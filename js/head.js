(function() {
    const head = document.head;

    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/svg+xml';
    favicon.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M64 160C64 124.7 92.7 96 128 96L512 96C547.3 96 576 124.7 576 160L576 400L512 400L512 160L128 160L128 400L64 400L64 160zM0 467.2C0 456.6 8.6 448 19.2 448L620.8 448C631.4 448 640 456.6 640 467.2C640 509.6 605.6 544 563.2 544L76.8 544C34.4 544 0 509.6 0 467.2zM281 273L250 304L281 335C290.4 344.4 290.4 359.6 281 368.9C271.6 378.2 256.4 378.3 247.1 368.9L199.1 320.9C189.7 311.5 189.7 296.3 199.1 287L247.1 239C256.5 229.6 271.7 229.6 281 239C290.3 248.4 290.4 263.6 281 272.9zM393 239L441 287C450.4 296.4 450.4 311.6 441 320.9L393 368.9C383.6 378.3 368.4 378.3 359.1 368.9C349.8 359.5 349.7 344.3 359.1 335L390.1 304L359.1 273C349.7 263.6 349.7 248.4 359.1 239.1C368.5 229.8 383.7 229.7 393 239.1z"/></svg>`;
    head.appendChild(favicon);

    const metas = [
        {name: 'description', content: 'مطور الواجهات الأمامية يوسف أيمن - طالب بكلية الحاسبات والذكاء الاصطناعي جامعة القاهرة | Yosef Ayman Frontend Developer - Computers and Artificial Intelligence Student at Cairo University | Passionate about Web Development, Competitive Programming & Problem Solving'},
        {name: 'keywords', content: 'Yosef Ayman, يوسف أيمن, frontend developer, مطور واجهات أمامية, web development, تطوير المواقع, FCAI, كلية الحاسبات والذكاء الاصطناعي, Cairo University, جامعة القاهرة, HTML, CSS, JavaScript, competitive programming, البرمجة التنافسية, portfolio, معرض أعمال, Frontend Mentor challenges, React, responsive design'},
        {name: 'author', content: 'Yosef Ayman'},
        {name: 'theme-color', content: '#2589bd'},
        {name: 'language', content: 'English, Arabic'},
        {name: 'geo.region', content: 'EG-C'},
        {name: 'geo.placename', content: 'Giza, Egypt'}
    ];

    metas.forEach(m => {
        const meta = document.createElement('meta');
        Object.keys(m).forEach(key => meta.setAttribute(key, m[key]));
        head.appendChild(meta);
    });

    const ogs = [
        {property: 'og:title', content: 'Yosef Ayman | Frontend Projects'},
        {property: 'og:description', content: 'Portfolio of Yosef Ayman | يوسف أيمن | Competitive Programming, Web Development, Algorithms & Problem Solving'},
        {property: 'og:image', content: 'https://www.facebook.com/photo/?fbid=1036547234958689&set=a.101628075117281'},
        {property: 'og:url', content: 'https://yosef-ayman.github.io/'},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: 'Yosef Ayman Portfolio'}
    ];
    ogs.forEach(o => {
        const meta = document.createElement('meta');
        Object.keys(o).forEach(key => meta.setAttribute(key, o[key]));
        head.appendChild(meta);
    });

    const twitter = [
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'Yosef Ayman | يوسف أيمن'},
        {name: 'twitter:description', content: 'Frontend Developer | مطور واجهات أمامية | Portfolio & Frontend Mentor Challenges'},
        {name: 'twitter:image', content: 'https://www.facebook.com/photo/?fbid=1036547234958689&set=a.101628075117281'}
    ];
    twitter.forEach(t => {
        const meta = document.createElement('meta');
        Object.keys(t).forEach(key => meta.setAttribute(key, t[key]));
        head.appendChild(meta);
    });

    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://yosef-ayman.github.io/';
    head.appendChild(canonical);

    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://image.thum.io';
    head.appendChild(preconnect);
})();
