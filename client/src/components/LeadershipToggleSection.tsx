import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, ArrowRight, Rocket, BarChart3, Users, TrendingUp, Sparkles, Mic } from "lucide-react";

const seCapabilities = [
  {
    icon: Sparkles,
    title: "Value Selling",
    metric: "Business outcome focus",
    outcomes: [
      "Discovery tied to executive priorities and measurable business outcomes",
      "Solution positioning that connects technical capability to revenue impact",
      "Qualification frameworks that identify deals worth winning"
    ]
  },
  {
    icon: Mic,
    title: "Storytelling Demos",
    metric: "Executive-ready narratives",
    outcomes: [
      "Demos that tell a compelling business story, not a feature walkthrough",
      "Technical narratives that resonate with C-suite and line-of-business buyers",
      "Live proof points that create urgency and differentiation"
    ]
  },
  {
    icon: Target,
    title: "Compelling Events",
    metric: "30%+ win rate lift",
    outcomes: [
      "POV frameworks with clear success criteria and exit gates",
      "Technical validation milestones that accelerate deal velocity",
      "Competitive positioning that wins head-to-head evaluations"
    ]
  },
  {
    icon: ArrowRight,
    title: "Handoffs & Velocity",
    metric: "Seamless transitions",
    outcomes: [
      "Clean transitions from sales to implementation to Customer Success",
      "Documented success criteria that carry through the lifecycle",
      "Pre-aligned delivery expectations that reduce implementation friction"
    ]
  }
];

const csCapabilities = [
  {
    icon: Rocket,
    title: "Onboarding & Adoption",
    metric: "Faster time-to-value",
    outcomes: [
      "Structured onboarding frameworks that accelerate customer activation",
      "Adoption milestones tied to business outcomes, not feature usage",
      "Proactive intervention when customers fall off the success path"
    ]
  },
  {
    icon: BarChart3,
    title: "Retention & Renewal",
    metric: "97% gross retention",
    outcomes: [
      "QBR discipline that surfaces risk early and reinforces value delivered",
      "Renewal forecasting with clear signals and escalation paths",
      "Health scoring that predicts outcomes, not just tracks activity"
    ]
  },
  {
    icon: Users,
    title: "Executive Alignment",
    metric: "C-suite engagement",
    outcomes: [
      "Multi-stakeholder engagement across complex enterprise accounts",
      "Executive sponsorship programs with VP and C-level buyers",
      "Voice of Customer programs that influence product and GTM priorities"
    ]
  },
  {
    icon: TrendingUp,
    title: "Expansion & Growth",
    metric: "Net revenue retention",
    outcomes: [
      "Expansion motions driven by demonstrated value, not sales pressure",
      "Cross-sell and upsell identification through adoption patterns",
      "Customer advocacy that generates referrals and strategic references"
    ]
  }
];

export function LeadershipToggleSection() {
  const [activeTab, setActiveTab] = useState<"se" | "cs">("se");

  const capabilities = activeTab === "se" ? seCapabilities : csCapabilities;
  const title = activeTab === "se" ? "SE as a Revenue Multiplier" : "CS as a Growth Engine";
  const subtitle = activeTab === "se" 
    ? "I build SE organizations that don't just support deals—they shape them through value selling, compelling demos, and strategic technical validation."
    : "Customer Success isn't support with a different title. I build CS organizations that drive retention, expansion, and advocacy through systematic value delivery.";
  const closingLine = activeTab === "se"
    ? "What we sell must be adoptable, defensible, and repeatable."
    : "Customers should experience one company, not a collection of teams.";

  return (
    <section id="leadership" className="py-20 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex rounded-lg bg-muted p-1 mb-6">
            <Button
              variant={activeTab === "se" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("se")}
              className="px-6"
              data-testid="button-toggle-se"
            >
              Solutions Engineering
            </Button>
            <Button
              variant={activeTab === "cs" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("cs")}
              className="px-6"
              data-testid="button-toggle-cs"
            >
              Customer Success
            </Button>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
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
          {closingLine}
        </p>
      </div>
    </section>
  );
}
