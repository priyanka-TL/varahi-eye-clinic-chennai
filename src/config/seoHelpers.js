import { SITE_URL, SITE_NAME, DOCTOR, CONTACT, LOCATIONS, PRIMARY_LOCATION } from './site';

// Builds an absolute canonical URL from an app path ('/', '/about', ...).
export const canonicalFor = (path) => {
  const clean = path === '/' ? '' : path;
  return `${SITE_URL}${clean}`;
};

const DAY_MAP = {
  Monday: 'Monday', Tuesday: 'Tuesday', Wednesday: 'Wednesday',
  Thursday: 'Thursday', Friday: 'Friday', Saturday: 'Saturday', Sunday: 'Sunday',
};

const openingHoursSpecification = (location) =>
  (location.openingHours || []).map((slot) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: slot.days.map((d) => DAY_MAP[d]),
    opens: slot.opens,
    closes: slot.closes,
  }));

// One MedicalClinic entry per consultation center — used together on the
// Contact page so every branch is individually discoverable by Google.
export const buildLocationSchema = (location) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': `${canonicalFor('/contact')}#${location.id}`,
  name: location.name,
  medicalSpecialty: 'Ophthalmic',
  ...(location.isPrimary ? { telephone: CONTACT.phone } : {}),
  address: {
    '@type': 'PostalAddress',
    streetAddress: location.room ? `${location.room}, ${location.streetAddress}` : location.streetAddress,
    addressLocality: location.addressLocality,
    addressRegion: location.addressRegion,
    postalCode: location.postalCode,
    addressCountry: 'IN',
  },
  ...(location.geo ? { geo: { '@type': 'GeoCoordinates', latitude: location.geo.latitude, longitude: location.geo.longitude } } : {}),
  url: canonicalFor('/contact'),
  ...(location.openingHours ? { openingHoursSpecification: openingHoursSpecification(location) } : {}),
  ...(location.isPrimary ? { physician: { '@type': 'Physician', name: DOCTOR.name } } : {}),
});

export const buildAllLocationsSchema = () => LOCATIONS.map(buildLocationSchema);

// Primary MedicalBusiness entity — used site-wide (Home + Contact) as the
// canonical representation of the brand for Knowledge Panel / local pack.
export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: 'Sree Varahi Eye Clinic T. Nagar',
  description: 'Comprehensive eye care clinic in T. Nagar, Chennai offering cataract surgery, glaucoma management, diabetic eye screening, and computer vision syndrome counseling.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  priceRange: '₹₹',
  medicalSpecialty: 'Ophthalmic',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${PRIMARY_LOCATION.room}, ${PRIMARY_LOCATION.streetAddress}`,
    addressLocality: PRIMARY_LOCATION.addressLocality,
    addressRegion: PRIMARY_LOCATION.addressRegion,
    postalCode: PRIMARY_LOCATION.postalCode,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: PRIMARY_LOCATION.geo.latitude,
    longitude: PRIMARY_LOCATION.geo.longitude,
  },
  openingHoursSpecification: openingHoursSpecification(PRIMARY_LOCATION),
  sameAs: [CONTACT.instagram],
  areaServed: LOCATIONS.map((l) => l.addressLocality).filter((v, i, a) => a.indexOf(v) === i),
  founder: { '@type': 'Physician', name: DOCTOR.name },
});

export const buildPhysicianSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': `${canonicalFor('/doctor')}#physician`,
  name: DOCTOR.name,
  honorificSuffix: DOCTOR.credentials,
  medicalSpecialty: 'Ophthalmology',
  description: 'Senior ophthalmic surgeon with 20 years of experience specialized in cataract and glaucoma, trained at RIOGOH Chennai, ICare Eye Hospital Noida, Aravind Eye Hospital Tirunelveli, and Sankara Nethralaya Chennai.',
  image: `${SITE_URL}${DOCTOR.image}`,
  url: canonicalFor('/doctor'),
  worksFor: { '@id': `${SITE_URL}/#organization` },
  affiliation: LOCATIONS.map((l) => ({ '@type': 'MedicalClinic', name: l.name })),
  identifier: { '@type': 'PropertyValue', name: 'Medical Council Registration No.', value: '67048' },
  knowsLanguage: ['Tamil', 'English', 'Hindi', 'Telugu'],
});

export const buildBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: canonicalFor(item.path),
  })),
});

export const buildFaqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
});
