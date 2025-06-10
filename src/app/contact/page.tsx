// This is a Server Component
import { Metadata } from "next";
import ContactWidget from "@/components/ContactWidget";

export const metadata: Metadata = {
  title: "Contact | Parkland Guitar Lessons",
  description:
    "Have questions about guitar lessons in Parkland, FL? Reach out using the contact form and get a response within 24 hours.",
  alternates: {
    canonical: "https://www.parklandguitarlessons.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="p-4 mx-auto max-w-7xl">
      <h1 className="text-2xl font-bold mb-4">
        Contact Parkland Guitar Lessons
      </h1>
      <div className=" flex gap-4">
        <div className="w-3/4">
          <p className="mb-6 text-lg">
            Have a question about lessons, scheduling, or pricing? Whether
            you're just getting started or picking guitar back up, I’d love to
            hear from you. I offer private, one-on-one guitar lessons in
            Parkland, Coral Springs, and surrounding areas — either in your home
            or online.
          </p>
          <ContactWidget />
          <p className="mb-6 text-lg mt-2">
            Fill out the form below and I’ll get back to you within 24 hours.
            You can also text me directly at <strong>(954) 249-8837</strong> for
            a quicker response.
          </p>
        </div>

        <div className="co">
          <div className="bg-gray-50 border rounded-lg p-4 text-sm">
            <p>
              <strong>Phone:</strong> (954) 249-8837
            </p>
            <p>
              <strong>Based in:</strong> Parkland, FL
            </p>
            <p>
              Serving: Parkland, Coral Springs, Coconut Creek, Boca Raton &
              nearby
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
