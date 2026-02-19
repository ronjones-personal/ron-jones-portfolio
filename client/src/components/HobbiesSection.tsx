import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Camera, Box, Server } from "lucide-react";

interface HobbyCard {
  icon: typeof Wrench;
  title: string;
  description: string;
}

const hobbies: HobbyCard[] = [
  {
    icon: Wrench,
    title: "DIY and Home Renovation",
    description: "Four full home renovations, end-to-end system rebuilds requiring planning and execution"
  },
  {
    icon: Camera,
    title: "Drone and Aerial Photography",
    description: "Technical precision and perspective through aerial photo and video work"
  },
  {
    icon: Box,
    title: "3D Printing and Design",
    description: "Iterative modeling, prototyping, and physical problem solving"
  },
  {
    icon: Server,
    title: "Home Coding and Automation",
    description: "Personal projects using Docker and automation tooling, including home media infrastructure"
  }
];

export function HobbiesSection() {
  return (
    <section id="hobbies" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-10 text-center">
          Curiosity Outside of Work
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {hobbies.map((hobby) => (
            <Card key={hobby.title}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <hobby.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
