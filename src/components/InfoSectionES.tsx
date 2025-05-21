'use client';
import { usePathname } from 'next/navigation';

export default function InfoSection() {
  const pathname = usePathname();
  const isSpanish = pathname?.startsWith('/es/');

  if (!isSpanish) return null;

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE — Subtitle + Bullets */}
        <div className="text-right">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Por Qué Nuestras Clases Funcionan
          </h2>
          <p className="italic text-gray-600 mb-6">
            Más que acordes — formamos músicos seguros.
          </p>
          <ul className="list-none text-orange-600 text-2xl">
            <li className="leading-relaxed mb-7">
              Clases a Domicilio
              <br />
              <small className="text-gray-600">
                <i>Aprende donde te sientas más cómodo—en casa.</i>
              </small>
            </li>
            <li className="leading-relaxed mb-7">
              Horarios Flexibles
              <br />
              <small className="text-gray-600">
                <i>Clases que se ajustan a tu vida ocupada.</i>
              </small>
            </li>
            <li className="leading-relaxed mb-7">
              Enfócate en tus Estilos Favoritos
              <br />
              <small className="text-gray-600">
                <i>Rock, pop, blues—enseñamos lo que te apasiona.</i>
              </small>
            </li>
            <li className="leading-relaxed mb-7">
              Preparación para Presentaciones
              <br />
              <small className="text-gray-600">
                <i>Súbete al escenario con confianza y habilidad.</i>
              </small>
            </li>
            <li className="leading-relaxed mb-7">
              Ambiente Amigable y de Apoyo
              <br />
              <small className="text-gray-600">
                <i>Sin presión, solo avances a tu ritmo.</i>
              </small>
            </li>
            <li className="leading-relaxed mb-7">
              Sin Compromisos a Largo Plazo
              <br />
              <small className="text-gray-600">
                <i>Empieza cuando quieras, detente cuando necesites.</i>
              </small>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE — Paragraphs */}
        <div className="space-y-8">
          <div>
            <p className="text-gray-700 leading-relaxed mb-5">
              Libera tu potencial musical con clases de guitarra personalizadas según tu estilo, ritmo y objetivos. Seas principiante o avanzado, te guiamos en cada paso.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5">
              Cada estudiante aprende de forma diferente. Por eso, adaptamos las clases a tus intereses y fortalezas. Aprende tus canciones favoritas o profundiza en teoría musical a tu ritmo.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5">
              La vida es ocupada. Con horarios flexibles y opciones de reprogramación sin complicaciones, aprender guitarra es fácil y conveniente.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5">
              Nuestros instructores son guitarristas expertos y apasionados por la enseñanza. Te ayudan a evitar errores comunes y avanzar más rápido.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5">
              Olvídate del tráfico y los desplazamientos. Llevamos la música hasta ti para que practiques cómodamente en casa.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5">
              Desde los 8 hasta los 80 años, nuestras clases se adaptan a todos. Ya seas principiante o músico con experiencia, te ayudamos a alcanzar tus metas personales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
