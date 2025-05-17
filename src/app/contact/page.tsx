// This is a Server Component
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Parkland Guitar Lessons',
  description:
    'Have questions about guitar lessons in Parkland, FL? Reach out using the contact form and get a response within 24 hours.',
  alternates: {
    canonical: 'https://www.parklandguitarlessons.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <ContactForm />
    </div>
  );
}
