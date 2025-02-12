import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
    </PageWrapper>
  );
}