import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Contact />
      </main>
    </div>
  );
}
