import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export default function Home() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to submit contact form");
      return response.json();
    },
    onSuccess: () => {
      alert("Thank you for contacting us! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    },
    onError: () => {
      alert("Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Where Digital Meets Luxury
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Premium digital marketing services in Dubai and UAE. Expert SEO, PPC, web design, 
            and branding solutions for luxury brands.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Free Proposal
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "SEO", icon: "🔍", desc: "Dominate search results with data-driven SEO strategies" },
              { title: "Paid Ads", icon: "💰", desc: "ROI-focused campaigns across Google, Meta, TikTok, LinkedIn" },
              { title: "Web Design", icon: "🎨", desc: "Premium websites that convert visitors into customers" },
              { title: "Branding", icon: "✨", desc: "Build a luxury brand that stands out in the market" },
              { title: "AI & Automation", icon: "🤖", desc: "Leverage cutting-edge AI for marketing automation" },
              { title: "Creative Strategy", icon: "💡", desc: "Strategic content that engages and converts" },
            ].map((service, idx) => (
              <div 
                key={idx}
                className="p-8 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-8">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12">
            Ready to elevate your digital presence? Contact us today for a free consultation.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {mutation.isPending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">LuxDigital</h3>
          <p className="text-gray-400 mb-6">Premium Digital Marketing Agency Dubai</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://linkedin.com/company/luxdigital" className="hover:text-gold-500 transition-colors">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://instagram.com/luxdigital" className="hover:text-gold-500 transition-colors">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://twitter.com/luxdigital" className="hover:text-gold-500 transition-colors">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} LuxDigital. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
