import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, TrendingUp, Target, Globe, Shield, BarChart3, ShoppingCart, ArrowRight, Check, Star, Award, Users, DollarSign, Zap } from 'lucide-react';

export default function EcomNexus() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic PPC Marketing",
      description: "Advanced bid management, keyword optimization, and ACoS reduction strategies for maximum ROI.",
      features: ["Bid Optimization", "Keyword Research", "ROI Tracking"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Listing Optimization",
      description: "Complete listing optimization across Amazon, Walmart, and major platforms with A/B testing.",
      features: ["A/B Testing", "Conversion Optimization", "Multi-Platform"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Strategies",
      description: "Data-driven growth strategies that scale your business with proven methodologies.",
      features: ["Market Analysis", "Scalable Solutions", "Performance Tracking"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Brand Protection",
      description: "Build and protect your brand with registry management and enhanced content.",
      features: ["Brand Registry", "Content Protection", "Strategic Positioning"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Expansion",
      description: "International marketplace expansion with cross-border selling strategies.",
      features: ["Cross-Border", "Global Markets", "Localization"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Multi-Channel Marketing",
      description: "Comprehensive campaigns for maximum brand visibility and customer acquisition.",
      features: ["Omnichannel", "Campaign Management", "Analytics"]
    }
  ];

  const marketplaces = [
    "Amazon", "Walmart", "eBay", "Shopify", "Target", "Etsy", 
    "Flipkart", "Meesho", "JioMart", "Myntra"
  ];

  const stats = [
    { icon: <Globe className="w-8 h-8" />, value: "5+", label: "Countries", desc: "USA, India, UAE, Japan, Singapore" },
    { icon: <Users className="w-8 h-8" />, value: "500+", label: "Brands Served", desc: "Successfully completed" },
    { icon: <Award className="w-8 h-8" />, value: "1000+", label: "Projects", desc: "Delivered with excellence" },
    { icon: <DollarSign className="w-8 h-8" />, value: "$100M+", label: "Revenue", desc: "Generated for clients" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechVentures Inc",
      image: "SJ",
      text: "ECOM NEXUS transformed our marketplace presence. Their data-driven approach and strategic insights helped us achieve 300% growth in just 6 months. The team is professional, responsive, and truly invested in our success."
    },
    {
      name: "Michael Chen",
      role: "VP of Marketing",
      company: "Global Retail Co",
      image: "MC",
      text: "Working with ECOM NEXUS has been a game-changer. Their expertise in PPC optimization reduced our ACoS by 40% while doubling our revenue. They're not just service providers; they're strategic partners."
    },
    {
      name: "Priya Sharma",
      role: "Founder",
      company: "BeautyBrands Online",
      image: "PS",
      text: "The listing optimization services provided by ECOM NEXUS helped us rank #1 in our category. Their attention to detail and commitment to results is unmatched. Highly recommend their services!"
    },
    {
      name: "David Martinez",
      role: "Director of Operations",
      company: "HomeGoods Plus",
      image: "DM",
      text: "ECOM NEXUS helped us expand internationally with ease. Their cross-border strategies and global marketplace expertise opened up new revenue streams we never thought possible. Outstanding results!"
    }
  ];

  const whyChooseUs = [
    { title: "Data-Driven Decisions", desc: "D3M Strategy for measurable results" },
    { title: "Proven Track Record", desc: "500+ successful brand partnerships" },
    { title: "Expert Team", desc: "Dedicated specialists for each platform" },
    { title: "Transparent Reporting", desc: "Real-time analytics and insights" },
    { title: "Scalable Solutions", desc: "Grow with your business needs" },
    { title: "24/7 Support", desc: "Always here when you need us" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 bg-white shadow-md"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-teal-600"
          >
            ECOM NEXUS
          </motion.div>
          
          <div className="hidden md:flex gap-8 items-center">
            {['Services', 'Why Us', 'Testimonials', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer text-gray-700 hover:text-teal-600 transition-colors font-medium"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-700 transition-colors"
            >
              Get Started
            </motion.button>
          </div>

          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-20 px-6"
          >
            {['Services', 'Why Us', 'Testimonials', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="block py-4 text-xl border-b border-gray-200 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                ✨ This is the ECOM NEXUS advantage
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
            >
              India's No.1 E-Commerce<br />
              <span className="text-teal-600">Marketing Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
            >
              Data-driven strategies. Marketplace mastery. Exponential growth.<br />
              Transform your marketplace presence into a growth engine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors"
              >
                Start Growing Today <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-colors"
              >
                View Case Studies
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100"
              >
                <div className="flex justify-center mb-4 text-teal-600">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why You Should Choose Us? 🎯
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data detectives, analytics alchemists, conversion champions. We're the D3M data squad.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for marketplace domination
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="p-8 rounded-2xl bg-white shadow-md border border-gray-100"
              >
                <div className="w-16 h-16 rounded-xl bg-teal-600 flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-6 flex items-center text-teal-600 font-semibold cursor-pointer"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplaces */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Platforms We Work On
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Expertise across all major marketplaces
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {marketplaces.map((marketplace, i) => (
                <motion.div
                  key={marketplace}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-8 py-4 rounded-full bg-white shadow-md border border-gray-200 font-semibold text-gray-700 hover:shadow-lg hover:border-teal-600 hover:text-teal-600 transition-all"
                >
                  {marketplace}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Hear From Our Clients
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of successful brands
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
              >
                <div className="flex gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center text-white text-xl font-bold">
                    {testimonials[activeTestimonial].image}
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-teal-600 font-medium">
                      {testimonials[activeTestimonial].role}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonials[activeTestimonial].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === activeTestimonial ? 'bg-teal-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's transform your marketplace presence into a growth engine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 transition-colors"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-teal-600 mb-4">
                ECOM NEXUS
              </div>
              <p className="text-gray-600 mb-4">
                India's No.1 E-Commerce Marketing Company. Transforming marketplace presence into growth engines.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['About Us', 'Services', 'Case Studies', 'Blog', 'Contact'].map((link) => (
                  <div key={link}>
                    <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
              <div className="space-y-2 text-gray-600">
                <p>Email: info@ecomnexus.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
            <p>© 2025 ECOM NEXUS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}