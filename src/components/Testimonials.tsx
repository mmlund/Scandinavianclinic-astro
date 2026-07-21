import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Karen",
      text: "My recovery from hip replacement surgery had stalled despite months of physiotherapy and exercise. Thankfully, Eva took my case and very patiently and systematically assessed and teased out my chronic back and hip problems. After a short treatment program of massage and corrective exercise I am now pain free for the first time in many years. I also have a clear understanding of how to prevent relapses and maintain my strength and normal functioning. I most appreciated Eva's individualized approach and her ability to clearly explain my rehabilitation program."
    },
    {
      name: "Mike",
      text: "When you are injured – due to sports or activities you pursue— your life is upended. Eva sets things right with her considered approach. Her knowledge and technique have delivered me from pain. And her recommendations on how to move forward has helped to prevent future injury occurrence. I have recommended Eva to my family and friends. The result is always the same – relief from pain and a return to an active life. She works magic."
    },
    {
      name: "Brandon",
      text: "I had suffered a debilitating hamstring injury and no treatment methods were working. I went on for months unable to recover and my life was completely put on hold. Eva Andersson started me on the DNS program and I began to see the benefits immediately. With Eva's guidance through DNS, I have made full recovery. Now I am in the best shape of my life and I am able to pursue my dream of joining the Canadian Armed Forces. Eva's knowledge of DNS is invaluable to anyone struggling with a sports related injury or looking to improve their athletic performance."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-base md:text-lg font-semibold text-accent mb-2 uppercase tracking-wider">
            RMT Patient Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real Results, Real People in North Vancouver
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from RMT patients who have experienced lasting pain relief and improved movement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border-0 shadow-card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-secondary/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="text-accent mb-4" size={32} />
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Patient</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
