import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Contact />
        </main>
      </div>
    </PageWrapper>
  );
}