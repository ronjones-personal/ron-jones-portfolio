import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ron is an exceptionally talented engineer with remarkable interpersonal skills; his capacity to take on new challenges and his vast knowledge of technology and business processes ensure his future success with any organization.",
    name: "Jack Martin",
    title: "Manager Territory Sales - Manufacturing",
    company: "Advanced Solution Technologies",
    context: "Worked together on the same team"
  },
  {
    quote: "Ron is so successful because he can break complex ideas and solutions down so that my grandmother could understand it—then want to buy it.",
    name: "Andrew Ketcham",
    title: "Enterprise Account Executive",
    company: "Salesforce",
    context: "Professional reference"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What Others Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Perspectives from colleagues and leaders I've worked with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative">
              <CardContent className="pt-8 pb-6">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
                <blockquote className="text-foreground leading-relaxed mb-6 pl-2">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
