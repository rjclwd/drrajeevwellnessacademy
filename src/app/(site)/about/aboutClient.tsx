"use client";

import { useState } from "react";
import {
  GraduationCap,
  Heart,
  Users,
  Award,
  BookOpen,
  Target,
  Lightbulb,
  Stethoscope,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Star,
  Globe,
  CheckCircle2,
  Play,
  Clock,
  UserCheck,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

export default function AboutClient() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (value: string) => {
    setActiveAccordion(activeAccordion === value ? null : value);
  };

  const stats = [
    { number: "10,000+", label: "Students Trained", icon: GraduationCap },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Countries Reached", icon: Globe },
    { number: "95%", label: "Success Rate", icon: Star },
  ];

  const approaches = [
    {
      id: "evidence",
      title: "Evidence-Based Learning",
      description:
        "We emphasize clinically grounded practices, integrating modern research to enhance traditional homeopathy.",
      icon: BookOpen,
      gradient: "from-primary to-ring",
      features: [
        {
          icon: Shield,
          text: "Research-backed methodologies",
          color: "text-primary",
        },
        { icon: TrendingUp, text: "Clinical case studies", color: "text-ring" },
        {
          icon: Zap,
          text: "Modern integration techniques",
          color: "text-accent",
        },
        {
          icon: Clock,
          text: "Continuous curriculum updates",
          color: "text-primary",
        },
      ],
      stats: {
        primary: "500+",
        secondary: "Research Papers",
        tertiary: "Referenced",
      },
      cta: "Explore Curriculum",
    },
    {
      id: "practical",
      title: "Practical Application",
      description:
        "Students gain hands-on experience through interactive workshops, case studies, and guided exercises.",
      icon: Stethoscope,
      gradient: "from-ring to-accent",
      features: [
        { icon: Play, text: "Interactive video workshops", color: "text-ring" },
        {
          icon: UserCheck,
          text: "Real patient case analysis",
          color: "text-accent",
        },
        {
          icon: Target,
          text: "Hands-on practice sessions",
          color: "text-primary",
        },
        { icon: Award, text: "Guided skill assessments", color: "text-ring" },
      ],
      stats: { primary: "100+", secondary: "Practice", tertiary: "Sessions" },
      cta: "Try Workshop",
    },
    {
      id: "community",
      title: "Community & Support",
      description:
        "Our learners join a vibrant community with mentorship, discussion forums, and ongoing support.",
      icon: Users,
      gradient: "from-accent to-primary",
      features: [
        {
          icon: Users,
          text: "Expert mentorship program",
          color: "text-accent",
        },
        { icon: Heart, text: "Peer support networks", color: "text-primary" },
        { icon: Globe, text: "24/7 global forum access", color: "text-ring" },
        {
          icon: Sparkles,
          text: "Monthly networking events",
          color: "text-accent",
        },
      ],
      stats: { primary: "24/7", secondary: "Community", tertiary: "Support" },
      cta: "Join Community",
    },
  ];

  const values = [
    {
      title: "Excellence",
      description: "Committed to the highest standards in education",
      icon: Award,
    },
    {
      title: "Innovation",
      description: "Embracing modern teaching methods and technology",
      icon: Lightbulb,
    },
    {
      title: "Compassion",
      description: "Caring for our students&apos; learning journey",
      icon: Heart,
    },
    {
      title: "Integrity",
      description: "Transparent, honest, and ethical practices",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-accent/10 to-ring/15 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 left-2/3 w-80 h-80 bg-gradient-to-r from-ring/10 to-primary/15 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-primary/30 to-ring/30 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-24 animate-fadeIn">
          <div className="inline-flex items-center gap-2 bg-secondary/80 border border-border/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              About Our Academy
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-primary via-ring to-accent bg-clip-text text-transparent leading-tight">
            Dr. Rajeev&apos;s
            <br />
            <span className="text-3xl sm:text-5xl md:text-7xl">
              Wellness Academy
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Empowering learners with clinically grounded, accessible homeopathy
            education that transforms lives.
            <br />
            <span className="text-primary font-medium">
              Where tradition meets innovation in wellness education.
            </span>
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-card/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/30 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-ring rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium text-center">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-24">
          <div className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-border/30 hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-ring rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                To provide comprehensive, evidence-informed homeopathy education
                that is practical, accessible, and empowers students and
                practitioners worldwide.
              </p>
              <div className="inline-flex items-center text-primary font-medium text-sm sm:text-base">
                <span>Empowering through education</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-border/30 hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-accent to-ring rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                To become a global hub for wellness education, fostering a
                community of skilled practitioners dedicated to holistic health.
              </p>
              <div className="inline-flex items-center text-accent font-medium text-sm sm:text-base">
                <span>Global wellness leadership</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-card/60 via-card/80 to-card/60 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-border/30 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-ring/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-primary to-ring rounded-full flex items-center justify-center mx-auto mb-6">
                          <Stethoscope className="w-12 h-12 sm:w-16 sm:h-16 text-primary-foreground" />
                        </div>
                        <p className="text-muted-foreground">
                          Dr. Rajeev&apos;s Photo
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-accent to-primary rounded-full opacity-20 blur-xl animate-pulse"></div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-4">
                    Meet Dr. Rajeev
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
                </div>

                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  With years of clinical experience and a passion for teaching,
                  Dr. Rajeev founded the academy to make wellness education
                  accessible to all. His approach blends modern research with
                  traditional homeopathy principles, creating a unique learning
                  experience that empowers practitioners worldwide.
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {["Clinical Expert", "Educator", "Researcher", "Author"].map(
                    (badge, i) => (
                      <span
                        key={i}
                        className="bg-secondary/60 border border-border/30 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-secondary-foreground backdrop-blur-sm"
                      >
                        {badge}
                      </span>
                    )
                  )}
                </div>

                <button className="group bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-3">
                  Contact Dr. Rajeev
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Our Approach Accordion */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-6">
              Our Approach
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we blend traditional wisdom with modern innovation to
              create transformative learning experiences.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {approaches.map((approach, index) => (
              <div
                key={approach.id}
                className={`group relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm rounded-3xl border transition-all duration-500 overflow-hidden ${
                  activeAccordion === approach.id
                    ? "border-primary/50 shadow-2xl shadow-primary/10 bg-gradient-to-br from-card to-card/90 scale-[1.02]"
                    : "border-border/30 hover:border-primary/30 hover:shadow-xl hover:scale-[1.01]"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Active indicator line */}
                {activeAccordion === approach.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-ring to-accent"></div>
                )}

                {/* Header Button */}
                <button
                  onClick={() => toggleAccordion(approach.id)}
                  className={`w-full p-4 sm:p-6 lg:p-8 text-left flex items-center justify-between transition-all duration-300 ${
                    activeAccordion === approach.id
                      ? "pb-2 sm:pb-4"
                      : "hover:bg-card/80"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-1 min-w-0">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${
                        approach.gradient
                      } rounded-2xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                        activeAccordion === approach.id
                          ? "scale-110 shadow-xl"
                          : "group-hover:scale-105"
                      }`}
                    >
                      <approach.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {approach.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                        {activeAccordion === approach.id
                          ? "Click to collapse details"
                          : "Click to expand and learn more"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    {/* Active badge */}
                    {activeAccordion === approach.id && (
                      <div className="hidden sm:flex items-center gap-1 text-xs text-primary font-bold bg-primary/10 px-2 py-1 rounded-full border border-primary/20 animate-pulse">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Active
                      </div>
                    )}
                    {/* Stats preview */}
                    <div className="hidden lg:flex flex-col items-end text-right">
                      <div className="text-lg font-bold text-primary">
                        {approach.stats.primary}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {approach.stats.secondary} {approach.stats.tertiary}
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground transition-all duration-300 ${
                        activeAccordion === approach.id
                          ? "rotate-180 text-primary scale-110"
                          : "group-hover:text-primary"
                      }`}
                    />
                  </div>
                </button>

                {/* Enhanced Expandable Content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeAccordion === approach.id
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                    <div className="ml-0 sm:ml-16 lg:ml-22 sm:pl-6 sm:border-l-2 border-border/30 space-y-6">
                      {/* Main Description */}
                      <div className="bg-gradient-to-r from-primary/5 via-transparent to-transparent p-4 sm:p-6 rounded-2xl border border-primary/10 backdrop-blur-sm">
                        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                          {approach.description}
                        </p>

                        {/* Mobile stats */}
                        <div className="lg:hidden bg-secondary/20 rounded-xl p-3 mb-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">
                              {approach.stats.primary}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {approach.stats.secondary}{" "}
                              {approach.stats.tertiary}
                            </div>
                          </div>
                        </div>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                          {approach.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-3 bg-background/50 rounded-xl border border-border/30 hover:border-primary/30 transition-colors duration-200"
                            >
                              <div
                                className={`w-8 h-8 rounded-lg bg-gradient-to-r ${approach.gradient} flex items-center justify-center flex-shrink-0`}
                              >
                                <feature.icon className="w-4 h-4 text-primary-foreground" />
                              </div>
                              <span
                                className={`text-sm font-medium ${feature.color}`}
                              >
                                {feature.text}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Call to Action */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-secondary/10 backdrop-blur-sm rounded-xl p-4 border border-secondary/20 gap-4">
                          <div>
                            <p className="text-sm font-bold text-foreground mb-1">
                              Ready to experience this approach?
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Join thousands of satisfied learners worldwide
                            </p>
                          </div>
                          <button
                            className={`bg-gradient-to-r ${approach.gradient} text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2 whitespace-nowrap`}
                          >
                            {approach.cta}
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Statistics */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 sm:p-6 bg-card/40 backdrop-blur-sm rounded-2xl border border-border/30 hover:bg-card/60 transition-colors duration-300">
              <div className="text-2xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">
                Core Methodologies
              </div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-card/40 backdrop-blur-sm rounded-2xl border border-border/30 hover:bg-card/60 transition-colors duration-300">
              <div className="text-2xl font-bold text-ring mb-2">100%</div>
              <div className="text-sm text-muted-foreground">
                Practical Focus
              </div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-card/40 backdrop-blur-sm rounded-2xl border border-border/30 hover:bg-card/60 transition-colors duration-300">
              <div className="text-2xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">
                Community Support
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-6">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at Dr. Rajeev&apos;s
              Wellness Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-border/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-ring/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-border/30">
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-ring to-accent bg-clip-text text-transparent mb-6">
              Join Our Learning Community
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Begin your journey in holistic wellness and homeopathy today.
              Transform your passion into expertise with our comprehensive
              programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-3">
                Explore Courses
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="group bg-secondary text-secondary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-secondary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-3">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
