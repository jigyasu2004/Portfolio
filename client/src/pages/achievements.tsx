import { Achievements } from "@/components/sections/Achievements";
import { Navbar } from "@/components/layout/Navbar";

export default function AchievementsPage() {
  return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Achievements />
        </main>
      </div>
  );
}