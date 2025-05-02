import ButtonLink from './ButtonLink';

type HeroProps = {
  title: string;
  subtitle?: string;
  herocopy1?: string;
  herocopy2?: string;
  herocopy3?: string;

  imageSrc?: string;
};

export default function Hero({ title, subtitle, herocopy1, herocopy2,herocopy3, imageSrc }: HeroProps) {
  return (
    <section className="relative bg-white min-h-[650px] flex items-start justify-start overflow-hidden max-w-[1200px] mx-auto">
      {/* TEXT ACROSS TOP */}
      <div className="absolute top-0 left-0 w-full px-6 pt-16 z-20">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-700 max-w-3xl mb-8">{subtitle}</p>
          )}
          {(<p className="text-lg text-gray-700 max-w-3xl mb-8">{herocopy1}</p>
          )}
          {(<p className="text-lg text-gray-700 max-w-3xl mb-8">{herocopy2}</p>
          )}
          {(<p className="text-lg text-gray-700 max-w-[600px] mb-8">{herocopy3}</p>
          )}
          <ButtonLink href="/contact" label="Get Started" size="xl" />

        </div>
      </div>

      {/* IMAGE AT BOTTOM */}
      {imageSrc && (
        <div className="absolute bottom-0 right-0 w-full md:w-[50%] h-auto z-10">
          <img
            src={imageSrc}
            alt="Hero"
            width={800}
  height={600}
            className="w-full h-auto object-contain pointer-events-none hero-image"
          />
        </div>
      )}
    </section>
  );
}
