import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin } from "lucide-react";

interface NavigationProps {
  activeSection: string;
}

const navItems = [
  { id: "hero", label: "Home" },
  { id: "summary", label: "About" },
  { id: "leadership", label: "Leadership" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Navigation({ activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const getActiveNav = () => {
    const mapping: Record<string, string> = {
      "hero": "hero",
      "credibility": "hero",
      "summary": "summary",
      "leadership": "leadership",
      "experience": "experience",
      "consulting": "experience",
      "skills": "skills",
      "hobbies": "contact",
      "dogs": "contact",
      "contact": "contact"
    };
    return mapping[activeSection] || activeSection;
  };

  const activeNav = getActiveNav();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-serif text-xl font-semibold text-foreground hover:text-primary transition-colors"
          data-testid="button-logo"
        >
          Ron Jones
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                activeNav === item.id
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              data-testid={`nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden sm:flex"
            asChild
          >
            <a
              href="https://linkedin.com/in/ronald-jjones"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-linkedin-nav"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              Connect
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                  activeNav === item.id
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                data-testid={`nav-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://linkedin.com/in/ronald-jjones"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-2 text-primary hover:bg-muted/50 rounded-md"
              data-testid="button-linkedin-mobile"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
