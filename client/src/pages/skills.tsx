import { Skills } from "@/components/sections/Skills";
import { Navbar } from "@/components/layout/Navbar";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function SkillsPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Skills />
        </main>
      </div>
    </PageWrapper>
  );
}