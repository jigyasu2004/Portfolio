import { Projects } from "@/components/sections/Projects";
import { Navbar } from "@/components/layout/Navbar";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Projects />
        </main>
      </div>
    </PageWrapper>
  );
}