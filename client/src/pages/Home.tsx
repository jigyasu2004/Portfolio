import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
        </main>
      </div>
    </PageWrapper>
  );
}