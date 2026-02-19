import { Card, CardContent } from "@/components/ui/card";
import { Rocket, BarChart3, Users, TrendingUp } from "lucide-react";

const capabilities = [
  {
    icon: Rocket,
    title: "Onboarding & Adoption",
    metric: "50% faster time-to-value",
    outcomes: [
      "Structured onboarding frameworks that accelerate customer activation",
      "Adoption milestones tied to business outcomes, not feature usage",
      "Proactive intervention when customers fall off the success path"
    ]
  },
  {
    icon: BarChart3,
    title: "Retention & Renewal",
    metric: "90%+ gross retention",
    outcomes: [
      "QBR discipline that surfaces risk early and reinforces value delivered",
      "Renewal forecasting with clear signals and escalation paths",
      "Health scoring that predicts outcomes, not just tracks activity"
    ]
  },
  {
    icon: Users,
    title: "Executive Alignment",
    metric: "C-suite engagement model",
    outcomes: [
      "Multi-stakeholder engagement across complex enterprise accounts",
      "Executive sponsorship programs with VP and C-level buyers",
      "Voice of Customer programs that influence product and GTM priorities"
    ]
  },
  {
    icon: TrendingUp,
    title: "Expansion & Growth",
    metric: "110%+ NRR contribution",
    outcomes: [
      "Expansion motions driven by demonstrated value, not sales pressure",
      "Cross-sell and upsell identification through adoption patterns",
      "Customer advocacy that generates referrals and strategic references"
    ]
  }
];

export function CSLeadershipSection() {
  return (
    <section id="cs-leadership" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Customer Success Leadership
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            CS as a Growth Engine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Customer Success isn't support with a different title. I build CS organizations that drive retention, expansion, and advocacy through systematic value delivery at enterprise scale.
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
          Customers should experience one company, not a collection of teams.
        </p>
      </div>
    </section>
  );
}
