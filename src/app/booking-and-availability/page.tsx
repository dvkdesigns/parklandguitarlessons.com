// Server Component
import { Metadata } from 'next';
import BookingWidget from '@/components/BookingWidget';


export default function BookingPage() {
  return (
    <div className="p-4 mx-auto max-w-7xl">
      <h1 className="text-2xl font-bold mb-4">Book Your Lesson</h1>
      <p className="mb-6 text-lg">
        View available time slots and reserve your spot for a one-on-one guitar lesson. I offer flexible scheduling for both in-home and online sessions across Parkland, Coral Springs, and nearby areas.
      </p>

      <BookingWidget />

      <p className="mt-6 text-sm text-gray-600">
        Need help finding a time that works? Text me at <strong>(954) 249-8837</strong> and I’ll help you get set up.
      </p>
    </div>
  );
}
