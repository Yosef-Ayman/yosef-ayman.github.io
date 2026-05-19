import { Helmet } from 'react-helmet-async';
import { SITE } from '../data/site.js';

export default function Seo({ title, description = SITE.description, path = '/', image = SITE.ogImage, type = 'website' }) {
  const pageTitle = title ? `${title} | ${SITE.name}` : SITE.defaultTitle;
  const canonical = new URL(path, SITE.url).toString();
  const ogImage = image.startsWith('http') ? image : new URL(image, SITE.url).toString();

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={SITE.author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
