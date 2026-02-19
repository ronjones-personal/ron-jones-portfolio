import { Code, Database, Server, Cloud, GitBranch, Layers } from "lucide-react";

export function TechnicalSkillsSection() {
  const skillGroups = [
    {
      icon: Code,
      title: "Languages & Development",
      skills: ["Python", "JavaScript / TypeScript", "SQL", "HTML / CSS", "Shell scripting"]
    },
    {
      icon: Layers,
      title: "API & Integration",
      skills: ["REST API design", "Webhook integrations", "OAuth / authentication flows", "Data transformation"]
    },
    {
      icon: Database,
      title: "Data & Automation",
      skills: ["ETL pipelines", "Business process automation", "Legacy system modernization", "Reporting dashboards"]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: ["AWS / GCP fundamentals", "Docker containerization", "CI/CD workflows", "Environment management"]
    },
    {
      icon: Server,
      title: "Tools & Platforms",
      skills: ["Salesforce ecosystem", "Customer Success platforms", "Demo automation tools", "Analytics platforms"]
    },
    {
      icon: GitBranch,
      title: "Development Practices",
      skills: ["Git version control", "Rapid prototyping", "Technical documentation", "Solution architecture"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on technical fluency that bridges the gap between engineering teams and customer-facing execution
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

        <p className="text-center text-muted-foreground mt-10 italic">
          Technology is a means to outcomes, not the goal.
        </p>
      </div>
    </section>
  );
}
