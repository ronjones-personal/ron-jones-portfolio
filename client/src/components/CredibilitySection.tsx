import { TrendingUp, Users, Target, Settings } from "lucide-react";

const impacts = [
  {
    icon: TrendingUp,
    metric: "Revenue Impact",
    description: "Improved win rates and deal velocity through value-led discovery and POV discipline"
  },
  {
    icon: Target,
    metric: "Conversion Excellence",
    description: "Up to 40% POV-to-close improvement by defining clear exit criteria and delivery readiness"
  },
  {
    icon: Users,
    metric: "Team Building",
    description: "Built and scaled global SE, CS, and Professional Services organizations"
  },
  {
    icon: Settings,
    metric: "Operational Systems",
    description: "Standardized onboarding, QBRs, renewal readiness, and customer health frameworks"
  }
];

export function CredibilitySection() {
  return (
    <section id="credibility" className="py-16 px-6 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((item) => (
            <div key={item.metric} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.metric}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
