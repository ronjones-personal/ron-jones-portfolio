import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Scale, Cpu, Building2, HeartPulse, Target } from "lucide-react";

export function ConsultingSection() {
  const services = [
    {
      icon: Wrench,
      title: "Engineering Modernization",
      description: "Legacy system transformation and process automation for manufacturing and construction firms.",
      results: [
        { metric: "30%", label: "Production increase" },
        { metric: "15%", label: "Cost reduction" }
      ]
    },
    {
      icon: Scale,
      title: "Expert Witness Consulting",
      description: "Technical analysis and testimony for consumer product liability and manufacturing defect cases.",
      results: [
        { metric: "6+", label: "Cases consulted" },
        { metric: "Expert", label: "Testimony provided" }
      ]
    },
    {
      icon: Cpu,
      title: "Automation & Integration",
      description: "Quote-to-build systems, workflow automation, and data pipeline development.",
      results: [
        { metric: "50%", label: "Process time reduction" },
        { metric: "Custom", label: "Solutions delivered" }
      ]
    }
  ];

  const caseStudies = [
    {
      icon: Building2,
      client: "National Operations & Logistics Provider",
      impact: "Multi-million dollar enterprise deal",
      outcomes: [
        "Designed enterprise sales and pre-sales frameworks shifting from feature-focused to value-first engagements",
        "Built discovery, demo, and POC processes emphasizing business objectives and executive alignment",
        "Enabled pursuit of larger, more complex enterprise opportunities"
      ]
    },
    {
      icon: HeartPulse,
      client: "Healthcare Technology Startup",
      impact: "10-year government contract secured",
      outcomes: [
        "Advised on architecture, integrations, and platform readiness for government-scale deployments",
        "Improved customer success processes, onboarding methodology, and adoption practices",
        "Contributed to securing a 10-year contract with Los Angeles County for tele-mental-health services"
      ]
    }
  ];

  return (
    <section id="consulting" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary">Selective Engagements</Badge>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            RJJ Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic consulting across pre-sales, post-sales, and solution design for organizations undergoing transformation. Engineering modernization, automation, and expert witness services since 2018.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <div className="flex gap-4 pt-2 border-t border-border">
                  {service.results.map((result, i) => (
                    <div key={i} className="text-center flex-1">
                      <p className="text-lg font-bold text-primary">{result.metric}</p>
                      <p className="text-xs text-muted-foreground">{result.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
            Strategic Advisory Engagements
          </h3>
          <p className="text-muted-foreground">
            Discovery, demo modernization, value engineering, and customer success alignment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <Card key={study.client}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <study.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{study.client}</h3>
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30 mt-1">
                      {study.impact}
                    </Badge>
                  </div>
                </div>
                <ul className="space-y-2">
                  {study.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 shrink-0">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
