import { Skills } from "@/components/sections/Skills";
import { Navbar } from "@/components/layout/Navbar";

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Skills />
      </main>
    </div>
  );
}
