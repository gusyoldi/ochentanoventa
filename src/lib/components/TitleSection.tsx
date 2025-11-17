type TitleSectionProps = {
  title: string;
  subtitle: string;
  variant?: 'default' | 'compact';
};

export default function TitleSection({
  title,
  subtitle,
  variant = 'default',
}: TitleSectionProps) {
  return (
    <div className="font-montserrat text-center leading-8 uppercase xl:col-span-1 xl:text-start xl:leading-14">
      <h2 className="text-heading-md xl:text-heading-xl font-extrabold text-nowrap">
        {title}
      </h2>
      <h3
        className={`text-gold text-heading-sm xl:text-heading-lg font-bold ${
          variant === 'compact' ? 'mb-3 xl:mb-5' : 'mb-5 xl:mb-10'
        }`}
      >
        {subtitle}
      </h3>
    </div>
  );
}
