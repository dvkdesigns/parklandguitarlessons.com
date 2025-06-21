import StudentPortalLoginWidget from "@/components/StudentPortalLoginWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parkland Student Portal | Parkland Guitar Lessons",
  description:
    "Access your personalized Parkland Student Portal. Schedule lessons, view resources, and track your progress with Parkland Guitar Lessons.",
  alternates: {
    canonical: "https://www.parklandguitarlessons.com/student-portal",
  },
};

export default function StudentPortalPage() {
  return (
    <>
      <StudentPortalLoginWidget />
    </>
  );
}
