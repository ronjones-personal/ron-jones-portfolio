import { Card, CardContent } from "@/components/ui/card";
import { Target, Presentation, ArrowRight, MessageSquare } from "lucide-react";

const capabilities = [
  {
    icon: Target,
    title: "Discovery to Close",
    metric: "40% POV-to-close improvement",
    outcomes: [
      "Outcome-driven discovery tied to executive priorities and business impact",
      "POV frameworks with clear exit criteria that accelerate deal velocity",
      "Technical narratives that resonate with C-suite and technical evaluators"
    ]
  },
  {
    icon: Presentation,
    title: "Executive Engagement",
    metric: "Enterprise deals to $5M+",
    outcomes: [
      "Executive-ready demos that tell a business story, not a feature tour",
      "Multi-threaded engagement across VP and C-level stakeholders",
      "Strategic positioning that connects platform value to board-level outcomes"
    ]
  },
  {
    icon: ArrowRight,
    title: "Handoffs & Velocity",
    metric: "50% faster time-to-value",
    outcomes: [
      "Clean transitions from sales to implementation to Customer Success",
      "Documented success criteria that carry through the lifecycle",
      "Pre-aligned delivery expectations that reduce implementation friction"
    ]
  },
  {
    icon: MessageSquare,
    title: "Field Intelligence",
    metric: "Product roadmap influence",
    outcomes: [
      "Field-to-product feedback loops that shape investment priorities",
      "Competitive intelligence that strengthens positioning and win rates",
      "Pattern recognition across deals that improves playbook effectiveness"
    ]
  }
];

export function SELeadershipSection() {
  return (
    <section id="se-leadership" className="py-20 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Solutions Engineering Leadership
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            SE as a Revenue Multiplier
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I build SE organizations that don't just support deals—they shape them. Technical credibility meets commercial instinct to accelerate pipeline and improve win rates across enterprise segments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <Card key={cap.title}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <cap.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{cap.title}</h3>
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {cap.metric}
                  </span>
                </div>
                <ul className="space-y-2">
                  {cap.outcomes.map((outcome, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5 shrink-0">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10 italic">
          What we sell must be adoptable, defensible, and repeatable.
        </p>
      </div>
    </section>
  );
}
