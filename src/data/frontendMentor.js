const screenshotModules = import.meta.glob('../assets/images/screenshots/*.png', {
  eager: true,
  query: '?url',
  import: 'default'
});

function screenshotFor(slug) {
  return screenshotModules[`../assets/images/screenshots/${slug}.png`];
}

export const frontendMentorProjects = [
  ['calculator-app-main', 'Calculator App', ['html', 'css', 'js']],
  ['pricing-component-with-toggle-master', 'Pricing Component With Toggle', ['html', 'css', 'js']],
  ['ping-coming-soon-page-master', 'Ping Coming Soon Page', ['html', 'css', 'js']],
  ['faq-accordion-main', 'FAQ Accordion', ['html', 'css', 'js']],
  ['digitalbank-landing-page-master', 'Digital Bank Landing Page', ['html', 'css']],
  ['qr-code-component-main', 'QR Code Component', ['html', 'css']],
  ['product-preview-card', 'Product Preview Card', ['html', 'css']],
  ['nft-preview-card', 'NFT Preview Card', ['html', 'css']],
  ['order-summary', 'Order Summary Card', ['html', 'css']],
  ['stats-preview-card', 'Stats Preview Card', ['html', 'css']],
  ['3-column-preview-card', '3 Column Preview Card', ['html', 'css']],
  ['social-proof-section-master', 'Social Proof Section', ['html', 'css']],
  ['four-card-feature', 'Four Card Feature', ['html', 'css']],
  ['single-price-grid-master', 'Single Price Grid', ['html', 'css']],
  ['huddle-landing-page-with-single-introductory', 'Huddle Landing Page', ['html', 'css']],
  ['blog-preview-card-main', 'Blog Preview Card', ['html', 'css']],
  ['profile-card', 'Profile Card Component', ['html', 'css']],
  ['results-summary', 'Results Summary Component', ['html', 'css']],
  ['social-links-profile', 'Social Links Profile', ['html', 'css']],
  ['recipe-page', 'Recipe Page', ['html', 'css']],
  ['chat-app-css-illustration-master', 'Chat App CSS Illustration', ['html', 'css']],
  ['clipboard-landing-page-master', 'Clipboard Landing Page', ['html', 'css']],
  ['testimonials-grid-section-main', 'Testimonials Grid Section', ['html', 'css']],
  ['bento-grid-main', 'Bento Grid', ['html', 'css']],
  ['fylo-data-storage-component-master', 'Fylo Data Storage Component', ['html', 'css']]
].map(([slug, title, technologies]) => ({
  slug,
  title,
  technologies,
  screenshot: screenshotFor(slug),
  github: `https://github.com/Yosef-Ayman/frontend-mentor-challenges/tree/main/${slug}`,
  live: `https://yosef-ayman.github.io/frontend-mentor-challenges/${slug}`
}));
