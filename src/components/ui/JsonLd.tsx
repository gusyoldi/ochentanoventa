import { SITE_CONFIG } from '@/config/site';

const JsonLd = () => {
  const musicGroupSchema = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    logo: `${SITE_CONFIG.url}/images/logo.png`, // Assuming exists or fallback to home
    genre: ['Rock Argentino', 'Rock Nacional'],
    sameAs: [
      'https://www.instagram.com/ochenta.90',
      'https://www.youtube.com/channel/UCmoocg2jeWF5OZwGXvi5dfw',
      'https://www.tiktok.com/@ochenta.90',
      'https://open.spotify.com/artist/1t7L3htJvTcz93Fa9aMiI6?si=UOBAljXzSP-pWnYKDBEL5Q',
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Banda para eventos y casamientos',
    provider: {
      '@type': 'MusicGroup',
      name: SITE_CONFIG.name,
    },
    areaServed: {
      '@type': 'City',
      name: 'Buenos Aires',
    },
    description: 'Show de clásicos del rock argentino versionados para eventos sociales y corporativos.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([musicGroupSchema, serviceSchema]),
      }}
    />
  );
};

export default JsonLd;
