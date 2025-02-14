import { Projects } from "@/components/sections/Projects";
import { Navbar } from "@/components/layout/Navbar";

export default function ProjectsPage() {
  return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Projects />
        </main>
      </div>
  );
}