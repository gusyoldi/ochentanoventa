import Image from 'next/image';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ochenta.90',
    logo: '/images/footer/instagram.png',
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/channel/UCmoocg2jeWF5OZwGXvi5dfw',
    logo: '/images/footer/youtube.png',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@ochenta.90',
    logo: '/images/footer/tiktok.png',
  },
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/artist/1t7L3htJvTcz93Fa9aMiI6?si=UOBAljXzSP-pWnYKDBEL5Q',
    logo: '/images/footer/spotify.png',
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((social) => (
        <a
          title={social.name}
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 rounded-2xl p-1"
        >
          <Image src={social.logo} alt={social.name} width={25} height={28} />
        </a>
      ))}
    </div>
  );
}
