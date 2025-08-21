import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ochenta.90",
    logo: "/images/footer/instagram.svg",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UCmoocg2jeWF5OZwGXvi5dfw",
    logo: "/images/footer/youtube.svg",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ochenta.90",
    logo: "/images/footer/tiktok.svg",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/1t7L3htJvTcz93Fa9aMiI6?si=UOBAljXzSP-pWnYKDBEL5Q",
    logo: "/images/footer/spotify.svg",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4 items-center">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <Image src={social.logo} alt={social.name} width={32} height={32} />
        </Link>
      ))}
    </div>
  );
}
