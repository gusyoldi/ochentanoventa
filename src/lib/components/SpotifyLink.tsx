import Image from 'next/image';

type SpotifyLinkProps = {
  href: string;
  text: string;
};

export default function SpotifyLink({ href, text }: SpotifyLinkProps) {
  return (
    <a
      className="font-roboto mx-auto mt-10 flex items-center justify-center gap-2 py-1 text-white uppercase hover:opacity-60 focus-visible:rounded-3xl"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/images/footer/spotify.png"
        alt="spotify-link"
        width={22}
        height={22}
      />
      <span>{text}</span>
    </a>
  );
}
