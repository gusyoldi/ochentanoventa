interface BannerProps {
  img: {
    desktop: { src: string; alt: string };
    mobile: { src: string; alt: string };
  };
}

const Banner = ({ img }: BannerProps) => {
  return (
    <div className="relative h-[470px] w-full overflow-hidden xl:h-[502px]">
      <picture>
        <source media="(min-width: 1280px)" srcSet={img.desktop.src} />
        <img
          src={img.mobile.src}
          alt={img.mobile.alt}
          className="h-full w-full object-cover"
        />
      </picture>
    </div>
  );
};

export default Banner;
