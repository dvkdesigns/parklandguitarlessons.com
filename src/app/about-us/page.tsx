// app/about/page.tsx
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Dan Kariamis | Parkland Guitar Lessons",
  description:
    "Learn more about Dan Kariamis, founder of Parkland Guitar Lessons. From web developer to guitar teacher, discover how music and passion created a new path.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <Image
        src="/images/me.jpg"
        alt="Dan Kariamis"
        width={400}
        height={400}
        className="rounded-full mb-6 float-right ml-10"
      />
      <h2 className="text-3xl font-bold">Dan Kariamis</h2>
      <h3>Founder of Parkland Guitar Lessons</h3>
      <h4>Musician, Guitar Teacher and Father</h4>
      <h4 className="mb-10">Specializes in Acoustic, Electric and Bass.</h4>

      <p className="text-lg mb-6">
        <strong>Hi, I’m Dan Kariamis</strong> — musician, teacher, web
        developer, and founder of Parkland Guitar Lessons.
      </p>

      <p className="mb-6">
        For over 15 years, I worked in web development and digital marketing,
        building high-performing websites and helping businesses grow online.
        But in early 2024, I was laid off. What started as a short break turned
        into 15 months of non-stop job hunting. I sent out thousands of
        applications and faced more rejections than I could’ve imagined.
      </p>

      <p className="mb-6">
        Rather than give up, I decided to pivot toward something I’ve always
        loved — music and teaching. I picked up my guitar, leaned into my
        lifelong passion, and combined it with my web skills to launch{" "}
        <strong>Parkland Guitar Lessons</strong>.
      </p>

      <p className="mb-6">
        This isn’t just another guitar school. I created a space where students
        of all ages and experience levels can learn guitar in a fun, supportive,
        and fully personalized environment. Whether you prefer in-person
        lessons, online sessions, or in-home instruction, I tailor each lesson
        to your goals, learning style, and pace.
      </p>

      <p className="mb-6">
        My long-term mission is to build more than just a lesson program. I
        envision a full creative space — complete with a rehearsal studio, a
        small gear shop, and a place where students can perform, record, and
        connect with fellow musicians.
      </p>

      <div className="border-l-4 border-blue-500 pl-4 my-8">
        <p className="italic text-gray-700">
          I play everything from ballads to rock anthems. I teach with patience,
          humor, and a focus on building real confidence. I’ve got two amazing
          daughters who inspire me every day. And I believe learning music
          should feel personal, practical, and fun.
        </p>
      </div>

      <p className="mb-6">
        Whether you're looking for guitar lessons, help choosing gear, or just
        someone to jam and grow with — I'd love to be part of your musical
        journey.
      </p>

      <p className="text-xl font-semibold mt-8">Let’s play.</p>
      <p className="text-xl font-bold">– Dan</p>

      <hr className="m-20" />

      <div>
        <Image
          src="/images/FotoGuitar.JPEG"
          alt="Juan Gronda"
          width={400}
          height={400}
          className="rounded-full mb-6 float-right ml-10"
        />
        <h2 className="text-3xl font-bold">Juan Gronda</h2>
        <h3>Parkland Guitar Lessons Teacher</h3>
        <h4>Musician, Guitar Teacher and Bilingual (Spanish Speaking)</h4>
        <h4 className="mb-10">Specializes in Acoustic, Electric and Bass.</h4>

        <p className="text-lg mb-6">
          <strong>Meet Juan – Guitar Instructor</strong> With over 20 years of
          guitar experience and more than 7 years of teaching under his belt,
          Juan brings passion, patience, and a deep love of music to every
          lesson. Originally from Argentina, Juan has taught students of all
          ages and skill levels—helping complete beginners strum their first
          chords and guiding advanced players through solo techniques,
          improvisation, and performance prep.
        </p>

        <p className="mb-6">
          Juan’s style is friendly and flexible. Whether you’re into rock,
          blues, fingerstyle acoustic, or even heavier genres like metal, he’ll
          build a custom lesson plan based on your goals. Students love his
          ability to explain music in a simple, clear way—and his focus on
          making every lesson fun and rewarding.
        </p>

        <p className="mb-6">
          He has performed in live bands, studio projects, and even acoustic
          duos on cruise ships, giving him a well-rounded performance background
          to draw from. Juan also makes the most of modern tools like YouTube,
          Guitar Pro, and backing tracks to keep things engaging and help
          students progress quickly—whether in person or online.
        </p>

        <p className="mb-6">
          Conoce a Juan – Profesor de Guitarra Con más de 20 años de experiencia
          tocando la guitarra y más de 7 años enseñando, Juan aporta pasión,
          paciencia y un verdadero amor por la música en cada clase. Originario
          de Argentina, ha trabajado con estudiantes de todas las edades y
          niveles, desde principiantes que aprenden sus primeros acordes hasta
          guitarristas avanzados que quieren mejorar su técnica, improvisación y
          preparación para presentaciones.
        </p>

        <p className="mb-6">
          Su estilo de enseñanza es amigable y adaptable. Ya sea que te guste el
          rock, el blues, el estilo acústico fingerstyle o incluso géneros más
          pesados como el metal, Juan creará un plan de estudio personalizado
          según tus objetivos. Los estudiantes valoran su capacidad para
          explicar conceptos musicales de forma clara y sencilla, además de su
          enfoque en hacer cada clase divertida y productiva.
        </p>

        <div className="border-l-4 border-blue-500 pl-4 my-8">
          <p className="italic text-gray-700">
            Juan también cuenta con una sólida experiencia como guitarrista en
            vivo, en estudios de grabación y como parte de dúos acústicos en
            cruceros. Utiliza herramientas modernas como YouTube, Guitar Pro y
            pistas de acompañamiento para hacer que el aprendizaje sea dinámico,
            ya sea en persona o en línea.
          </p>
        </div>

        <p className="text-xl font-semibold mt-8">Aprendamos juntos.</p>
        <p className="text-xl font-bold">– Juan</p>
      </div>

      <hr className="m-20" />

      <div>
        <Image
          src="/images/IMG_6024.JPG"
          alt="Dylan Selph"
          width={400}
          height={400}
          className="rounded-full mb-6 float-right ml-10"
        />
        <h2 className="text-3xl font-bold">Dylan Selph</h2>
        <h3>Melbourne Guitar Lessons Teacher</h3>
        <h4>Musician, Guitar Teacher</h4>
        <h4 className="mb-10">
          Specializes in Acoustic, Electric and Bass, Piano and Mandolin.
        </h4>

        <p className="text-lg mb-6">
          <strong>Meet Dylan – Guitar Instructor in Melbourne, FL</strong> Based
          in Melbourne, Florida, Dylan Selph is a passionate guitarist and
          performer with deep roots in the local music scene. Known for his
          high-energy performances and uncanny impersonation of Angus Young,
          Dylan plays lead guitar and is a National Touring Musician with Razors
          Edge a Tribute to AC/DC.
        </p>

        <p className="mb-6">
          Now offering{" "}
          <a href="/guitar-lessons-melbourne-fl">
            guitar lessons in Melbourne, FL
          </a>
          , he can teach all styles of music Country, Rock, Jazz, Blues,
          Bluegrass, Metal, RnB Pop, you name it ! Dylan brings stage experience
          and a love for teaching music into every lesson. Whether you're
          picking up a guitar for the first time or looking to refine your lead
          playing, Dylan can help you grow with personalized instruction
          tailored to your goals.
        </p>

        <p className="mb-6">
          🎸 Ready to rock?{" "}
          <a href="/booking-and-availability">
            Book a lesson with Dylan in Melbourne today
          </a>
        </p>

        <p className="text-xl font-bold">– Dylan</p>
      </div>
    </main>
  );
}
