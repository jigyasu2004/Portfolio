import { About } from "@/components/sections/About";
import { Navbar } from "@/components/layout/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
      </main>
    </div>
  );
}
