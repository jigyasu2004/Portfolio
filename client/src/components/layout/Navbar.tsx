import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="link" className="text-xl font-bold p-0">
                Jigyasu Patel
              </Button>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                <Button
                  variant="link"
                  className={location === link.href ? "text-primary" : "text-muted-foreground"}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                <Button
                  variant="link"
                  className={`block w-full text-left ${
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}