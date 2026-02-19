import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Briefcase, Linkedin } from "lucide-react";
import dogsPhoto from "@assets/IMG_A13ECE5F-65B7-4D82-81D6-21598C095541_1767635811529.jpeg";

export function AboutSection() {
  const highlights = [
    {
      icon: Briefcase,
      title: "15+ Years",
      description: "Enterprise Leadership",
    },
    {
      icon: Award,
      title: "President's Club",
      description: "Multiple Awards",
    },
    {
      icon: GraduationCap,
      title: "MBA",
      description: "Business & Marketing",
    },
  ];

  const skills = [
    "Enterprise SaaS",
    "GTM Strategy",
    "Value Engineering",
    "MEDDIC",
    "Customer Lifecycle",
    "Team Scaling",
    "APIs & Integrations",
    "Cloud Architecture",
    "AI/ML Solutions",
    "Data Pipelines",
  ];

  return (
    <section id="about" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building organizations that deliver exceptional outcomes from first touch to long-term success
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-foreground leading-relaxed text-lg">
              I lead pre-sales and post-sales organizations that win complex enterprise deals 
              and deliver measurable customer outcomes. My approach bridges technical excellence 
              with business strategy—architecting data-driven operating models that increase 
              adoption, forecast accuracy, and expansion revenue.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in transforming complex technical platforms into clear business value 
              for finance, insurance, government, and compliance-heavy sectors. Whether building 
              Solutions Engineering teams that close 7-8 figure deals or Customer Success 
              organizations that drive retention and growth, I bring a unique combination of 
              technical depth and commercial acumen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outside of work, I apply the same problem-solving mindset to 3D printing, drone 
              building, home automation, and DIY projects. This hands-on technical curiosity 
              keeps me connected to the engineering challenges our customers face.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden bg-muted aspect-square">
              <img
                src={dogsPhoto}
                alt="Ron's dogs relaxing in the yard"
                className="w-full h-full object-cover"
                data-testid="img-dogs"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              My companions at home keeping me grounded
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item) => (
            <Card key={item.title} className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="p-6 bg-muted/50 rounded-xl border border-border mb-8">
          <blockquote className="text-center">
            <p className="text-foreground italic text-lg mb-4">
              "Ron's ability to build rockstar pre/post-sales teams is second to none. 
              He hit the ground running, immediately impacting our revenue targets. 
              Our clients loved interacting with Ron and appreciated his candor and 
              mutual accountability. Our organization will never give a feature demo again."
            </p>
            <cite className="text-muted-foreground text-sm not-italic">
              — Curtis B., CRO, Totango
            </cite>
          </blockquote>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Ready to discuss how I can help scale your go-to-market organization?
          </p>
          <Button asChild>
            <a
              href="https://linkedin.com/in/ronald-jjones"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-linkedin-about"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Let's Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
