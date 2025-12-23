import getBanner from '../services/strapi/getBanner';

const Banner = async () => {
  const banner = await getBanner();
  if (!banner) return null;
  const { mobile, desktop } = banner;

  return (
    <div className="relative h-[470px] w-full overflow-hidden xl:h-[502px]">
      <picture>
        <source media="(min-width: 1280px)" srcSet={desktop.src} />
        <img
          src={mobile.src}
          alt={mobile.alt}
          className="h-full w-full object-cover"
        />
      </picture>
    </div>
  );
};

export default Banner;
