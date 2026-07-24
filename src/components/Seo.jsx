import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME } from '../config/site';
import { canonicalFor } from '../config/seoHelpers';

const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

// Central SEO tag renderer: every page passes its title/description/path
// here instead of hand-writing Helmet blocks, so canonical + Open Graph +
// Twitter Card + JSON-LD stay consistent and never get forgotten on a page.
const Seo = ({ title, description, path, image, type = 'website', jsonLd, noindex = false }) => {
  const url = canonicalFor(path);
  const ogImage = image || DEFAULT_IMAGE;
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
};

export default Seo;
