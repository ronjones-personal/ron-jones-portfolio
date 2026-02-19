import { Target, Users, Presentation, TrendingUp, MessageSquare, BarChart3 } from "lucide-react";

export function BusinessSkillsSection() {
  const skillGroups = [
    {
      icon: Target,
      title: "Sales & GTM Strategy",
      skills: ["Enterprise sales methodology", "Value-based selling", "Competitive positioning", "Deal qualification & forecasting"]
    },
    {
      icon: Presentation,
      title: "Executive Communication",
      skills: ["C-suite presentations", "Business case development", "Storytelling & narrative design", "Board-level reporting"]
    },
    {
      icon: Users,
      title: "Team Leadership",
      skills: ["Org design & scaling", "Hiring & talent development", "Performance management", "Cross-functional alignment"]
    },
    {
      icon: TrendingUp,
      title: "Customer Success",
      skills: ["Retention & expansion strategy", "Health scoring & analytics", "QBR methodology", "Voice of Customer programs"]
    },
    {
      icon: MessageSquare,
      title: "Stakeholder Management",
      skills: ["Executive sponsorship", "Multi-threaded relationships", "Partner & vendor management", "Conflict resolution"]
    },
    {
      icon: BarChart3,
      title: "Operations & Process",
      skills: ["Playbook development", "Operating rhythms", "KPI design & tracking", "Process optimization"]
    }
  ];

  return (
    <section id="business-skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Leadership & Business Acumen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic capabilities that drive organizational outcomes and executive-level impact
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-card rounded-lg p-5 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                  <group.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
              </div>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5 shrink-0">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
