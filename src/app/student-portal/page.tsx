import StudentPortalLoginWidget from "@/components/StudentPortalLoginWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Portal Login | Parkland Guitar Lessons",
  description:
    "Log in to the Parkland Guitar Lessons student portal to access lesson resources, schedule updates, and more.",
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
