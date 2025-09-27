import { Phone, Mail, MapPin, Sparkles, Heart } from "lucide-react";
import ContactFormClient from "./contactFormClient";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/80 border border-border/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Get In Touch
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-ring to-accent bg-clip-text text-transparent leading-tight">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your wellness journey? We&aposre here to guide you
            every step of the way.
            <br />
            <span className="inline-flex items-center gap-1 mt-2 text-primary">
              Let&aposs create something amazing together{" "}
              <Heart className="w-5 h-5 text-destructive" />
            </span>
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Phone,
              title: "Call Us",
              info: "+91 91175 20003",
              subtitle: "Mon-Fri: 9AM-6PM IST",
            },
            {
              icon: Mail,
              title: "Email Us",
              info: "info@drrajeevswellness.com",
              subtitle: "We respond within 2 hours",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              info: "123 Wellness Street",
              subtitle: "Mumbai, India - By appointment",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-card/80 backdrop-blur-sm rounded-3xl p-8 hover:bg-card/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-border/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-accent p-4 mb-6">
                <c.icon className="w-full h-full text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
              <p className="font-medium mb-2">{c.info}</p>
              <p className="text-sm text-muted-foreground">{c.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Client form */}
        <ContactFormClient />

        {/* Trust indicators */}
        <div className="text-center mt-16 opacity-70">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by 10,000+ wellness enthusiasts
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {[
              "🏆 Award Winning",
              "🔒 100% Secure",
              "⚡ Quick Response",
              "💝 Personal Care",
            ].map((badge, i) => (
              <span
                key={i}
                className="bg-secondary/60 border border-border/30 px-4 py-2 rounded-full text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
