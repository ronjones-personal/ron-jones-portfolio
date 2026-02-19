import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
          Let's Talk
        </h2>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
          If you're building or scaling a Solutions Engineering or Customer Success organization and need a senior leader who operates at both the strategic and execution level, I'd welcome the conversation.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <a
              href="https://linkedin.com/in/ronald-jjones"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-linkedin-contact"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="mailto:ron@ronaldjones.me"
              data-testid="button-email-contact"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </a>
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Ron Jones, MBA
          </p>
        </div>
      </div>
    </section>
  );
}
