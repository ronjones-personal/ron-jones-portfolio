import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import ronPhoto from "@assets/TSW-0421_1767727791718.jpeg";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-12 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-primary font-medium">
                Solutions Engineering & Customer Success Executive
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                I build and scale customer-facing technical organizations.
              </h1>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
              <p>
                15+ years building and leading Solutions Engineering, Customer Success, and Professional Services organizations that win complex enterprise deals and deliver measurable customer outcomes.
              </p>
              <p>
                I specialize in transforming technical platforms into clear business value—architecting data-driven operating models that increase adoption, accelerate time-to-value, and drive expansion revenue across finance, insurance, and compliance-heavy sectors.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 py-4 border-y border-border">
              <div>
                <p className="text-3xl font-bold text-foreground">$30M+</p>
                <p className="text-sm text-muted-foreground">Annual revenue influenced</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">30%+</p>
                <p className="text-sm text-muted-foreground">Win rate improvement</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">97%</p>
                <p className="text-sm text-muted-foreground">Customer retention achieved</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a
                  href="https://linkedin.com/in/ronald-jjones"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-linkedin-hero"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("experience")}
                data-testid="button-view-experience"
              >
                View Experience
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-2xl overflow-hidden bg-muted border border-border shadow-2xl">
              <img
                src={ronPhoto}
                alt="Ron Jones"
                className="w-full h-full object-cover object-top"
                data-testid="img-hero-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
