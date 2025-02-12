import { About } from "@/components/sections/About";
import { Navbar } from "@/components/layout/Navbar";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <About />
        </main>
      </div>
    </PageWrapper>
  );
}