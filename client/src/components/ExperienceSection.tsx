import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

interface Role {
  company: string;
  title: string;
  dates: string;
  metric?: string;
  impact: string[];
  current?: boolean;
}

const roles: Role[] = [
  {
    company: "Coherent",
    title: "VP, Solutions Engineering & Client Strategy",
    dates: "2023 – Present",
    metric: "Fortune 500 Insurance Clients",
    current: true,
    impact: [
      "Built repeatable POV and delivery frameworks improving conversion rates and reducing time-to-value",
      "Led cross-portfolio GTM strategy for Fortune 500 insurance clients across multiple product lines",
      "Aligned Product and Engineering investment to field-validated customer outcomes, influencing roadmap priorities",
      "Direct executive engagement with C-suite buyers on multi-million dollar enterprise deals"
    ]
  },
  {
    company: "Totango",
    title: "Senior Director, Solutions Engineering & Customer Success",
    dates: "2021 – 2023",
    metric: "$30M+ ARR Responsibility",
    impact: [
      "Scaled and led a global organization spanning Solutions Engineering, Customer Success, and Professional Services",
      "Standardized onboarding frameworks that improved adoption metrics and time-to-value",
      "Improved enterprise deal outcomes through outcome-first discovery and value-led execution",
      "Established executive engagement model with VP and C-level stakeholders across strategic accounts"
    ]
  },
  {
    company: "Trimble",
    title: "Director, Solutions Engineering",
    dates: "2019 – 2021",
    metric: "Enterprise & Federal Markets",
    impact: [
      "Led enterprise and federal technical sales motions for complex multi-stakeholder deals",
      "Transitioned services-heavy delivery model to scalable software execution, improving margin",
      "Earned multiple leadership and performance awards including top SE leadership recognition",
      "Built federal go-to-market capability, opening new revenue streams in government sector"
    ]
  },
  {
    company: "Advanced Solutions",
    title: "Enterprise Solutions Engineer & Engagement Lead",
    dates: "2016 – 2019",
    metric: "Enterprise Account Growth",
    impact: [
      "Led discovery and solution alignment across enterprise accounts, increasing average deal size",
      "Built repeatable delivery processes that improved implementation success rates",
      "Served as engagement lead for strategic accounts requiring multi-product solutions"
    ]
  },
  {
    company: "Industrial Air Centers",
    title: "Solutions Engineer",
    dates: "2013 – 2016",
    metric: "Industrial Sector",
    impact: [
      "Supported technical sales cycles and solution positioning for industrial clients",
      "Translated complex requirements into adoption-ready implementation plans"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Career Trajectory
          </h2>
          <p className="text-lg text-muted-foreground">
            Progressive leadership across SE, CS, and Services in enterprise SaaS
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-5 top-2 bottom-2 w-0.5 bg-border" />

          <div className="space-y-10">
            {roles.map((role) => (
              <div key={role.company + role.title} className="relative pl-12 md:pl-14">
                <div className="absolute left-0 top-1 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <Building2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-foreground">{role.company}</h3>
                        {role.current && (
                          <Badge variant="default" className="text-xs">Current</Badge>
                        )}
                      </div>
                      <p className="text-base text-foreground font-medium">{role.title}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{role.dates}</span>
                  </div>
                  
                  {role.metric && (
                    <div>
                      <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                        {role.metric}
                      </Badge>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {role.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
