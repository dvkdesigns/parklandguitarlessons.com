type ParklandMapProps = {
  title: string;
  subtitle: string;
};

export default function ParklandMap({ title, subtitle }: ParklandMapProps) {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 mb-8">
          {subtitle}
        </p>
        <div className="aspect-w-16 aspect-h-9 w-full shadow-lg overflow-hidden ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.2557887103854!2d-80.24124268498405!3d26.31024768339812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9066d3c418b0f%3A0x90536fbb2cc13e7!2sParkland%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-100"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
