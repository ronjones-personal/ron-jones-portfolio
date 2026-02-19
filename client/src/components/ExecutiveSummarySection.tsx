import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    title: "Build",
    headline: "I build organizations, not just teams.",
    description: "Scaled SE, CS, and Services functions from early-stage to global organizations. Hired and developed directors, established operating rhythms, and created systems that drive revenue impact.",
    metrics: ["Global SE, CS, PS organizations", "Cross-functional leadership", "Multiple orgs built from ground up"]
  },
  {
    title: "Transform",
    headline: "I turn complexity into clarity.",
    description: "Modernized GTM motions that improved win rates. Restructured underperforming teams into high-velocity engines. Operationalized platforms that reduced onboarding time significantly.",
    metrics: ["30%+ win rate improvement", "Faster time-to-value", "97% retention achieved"]
  },
  {
    title: "Execute",
    headline: "I lead from the front.",
    description: "Hands-on operator who stays close to deals, customers, and teams. Direct engagement with C-suite buyers on enterprise deals. Track record of turning around struggling accounts and accelerating strategic wins.",
    metrics: ["Enterprise account leadership", "Cross-functional exec alignment", "Field-validated playbooks"]
  }
];

export function ExecutiveSummarySection() {
  return (
    <section id="summary" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A senior operator who combines strategic vision with hands-on execution across the full customer lifecycle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="border-t-2 border-t-primary">
              <CardContent className="pt-6">
                <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                  {pillar.title}
                </p>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {pillar.headline}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <div className="pt-4 border-t border-border space-y-1.5">
                  {pillar.metrics.map((metric, i) => (
                    <p key={i} className="text-xs text-foreground font-medium">
                      {metric}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
