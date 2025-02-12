import { Achievements } from "@/components/sections/Achievements";
import { Navbar } from "@/components/layout/Navbar";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function AchievementsPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Achievements />
        </main>
      </div>
    </PageWrapper>
  );
}