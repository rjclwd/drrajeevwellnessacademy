import React from "react";
import { 
  Globe, 
  Phone, 
  Instagram, 
  Facebook, 
  Youtube, 
  CreditCard, 
  QrCode,
  Mail,
  MapPin,
  Clock,
  Shield,
  FileText,
  Heart,
  ExternalLink,
  Smartphone
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-primary-foreground">
                Dr. Rajeev&apos;s Clinic
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 text-sm lg:text-base">
                Providing holistic healthcare solutions through homeopathy and natural healing methods. 
                Your wellness journey starts here with personalized care and proven treatments.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
                <div>
                  <p className="text-primary-foreground/90">
                    123 Health Street, Medical District<br />
                    Ranchi, Jharkhand 834001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a 
                  href="tel:+911234567890" 
                  className="text-primary-foreground/90 hover:text-accent transition-colors"
                >
                  +91 123 456 7890
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a 
                  href="mailto:info@rajeevclinic.com" 
                  className="text-primary-foreground/90 hover:text-accent transition-colors"
                >
                  info@rajeevclinic.com
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-accent shrink-0" />
                <div className="text-primary-foreground/90">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Websites */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent" />
              Our Websites
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="http://www.rajeevclinic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors group"
                >
                  <span>Rajeev Clinic</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors group"
                >
                  <span>Homeopathy Guide</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors group"
                >
                  <span>Health Blog</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors group"
                >
                  <span>Online Consultation</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors group"
                >
                  <span>Patient Portal</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent" />
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Homeopathy Treatment
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Skin Care Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Child Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Respiratory Care
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Digestive Health
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Wellness Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Online Courses
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent" />
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Dr. Rajeev
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Patient Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Health Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Emergency Care
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Payment Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Social Media */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-primary-foreground">
                Connect With Us
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-200 group"
                >
                  <Facebook className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-200 group"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-200 group"
                >
                  <Youtube className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
                <a
                  href="tel:+911234567890"
                  className="w-10 h-10 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-200 group"
                >
                  <Smartphone className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-primary-foreground">
                Payment Methods
              </h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl">
                  <CreditCard className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-primary-foreground">
                    Cards Accepted
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl">
                  <QrCode className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-primary-foreground">
                    UPI/QR Pay
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 p-6 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-primary-foreground mb-2">
                Stay Updated with Health Tips
              </h4>
              <p className="text-primary-foreground/80 text-sm">
                Get the latest health advice and homeopathy insights delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-3 bg-background/90 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-foreground text-sm"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent/90 hover:scale-105 transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 bg-primary/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80">
              <p>© {currentYear} Dr. Rajeev&apos;s Clinic. All rights reserved.</p>
              <span className="hidden md:block">|</span>
              <p className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-rose-400" /> for your wellness
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-primary-foreground/80">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors flex items-center gap-1">
                <Shield className="w-4 h-4" />
                Medical Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}