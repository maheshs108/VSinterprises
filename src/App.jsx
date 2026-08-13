import React, { useState } from 'react'
import { Zap, Phone, Mail, MapPin, Wrench, Home, Lightbulb, Shield, Star, ChevronRight, Menu, X } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Residential Wiring',
      description: 'Complete electrical wiring for new homes and renovations. Safe and code-compliant installations.'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Commercial Services',
      description: 'Professional electrical solutions for offices, retail spaces, and commercial buildings.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Lighting Installation',
      description: 'Indoor and outdoor lighting design and installation for homes and businesses.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety Inspections',
      description: 'Comprehensive electrical safety inspections to ensure your property is safe and up to code.'
    }
  ]

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Homeowner',
      content: 'VS Interprisers did an excellent job rewiring our entire home. Professional, efficient, and very reasonably priced.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Business Owner',
      content: 'Their commercial electrical work was top-notch. Completed on time and within budget. Highly recommend!',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      role: 'Property Manager',
      content: 'We use VS Interprisers for all our properties. Reliable service and great communication throughout.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">VSinterprises</h1>
                <p className="text-sm text-gray-600">Professional Electrical Services</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">Testimonials</a>
              <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Contact Us
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 bg-white border-t border-gray-100">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 font-medium border-b border-gray-50">Home</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 font-medium border-b border-gray-50">Services</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 font-medium border-b border-gray-50">About</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 font-medium border-b border-gray-50">Testimonials</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 text-yellow-600 hover:bg-yellow-50 font-semibold">Contact Us</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Professional Electrical
                <span className="text-yellow-500"> Solutions</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
                VS Interprisers delivers top-quality electrical services for residential and commercial properties. 
                Licensed, insured, and committed to excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                >
                  Get a Quote
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a 
                  href="#services" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="md:hidden mt-6 sm:mt-8">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-1">15+</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-1">500+</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-1">100%</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-1">24/7</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Emergency Service</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1 md:mb-2">15+</div>
                    <div className="text-gray-300 text-sm md:text-base">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1 md:mb-2">500+</div>
                    <div className="text-gray-300 text-sm md:text-base">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1 md:mb-2">100%</div>
                    <div className="text-gray-300 text-sm md:text-base">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1 md:mb-2">24/7</div>
                    <div className="text-gray-300 text-sm md:text-base">Emergency Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive electrical solutions tailored to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-yellow-500 transition-colors">
                  <div className="text-yellow-600 group-hover:text-white transition-colors">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">{service.icon}</div>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">About VSinterprises</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                VSinterprises has been serving the community with professional electrical services for over 15 years. 
                Our team of licensed electricians is dedicated to providing safe, reliable, and efficient electrical solutions.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                We specialize in residential and commercial electrical work, from simple repairs to complete installations. 
                Our commitment to quality and customer satisfaction has made us a trusted name in the industry.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">Licensed & Insured Electricians</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">24/7 Emergency Services</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">Competitive Pricing</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Why Choose Us?</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-sm sm:text-base">Experienced and certified professionals</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-sm sm:text-base">Quality workmanship guaranteed</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-sm sm:text-base">Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-sm sm:text-base">Timely project completion</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-sm sm:text-base">Excellent customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What Our Clients Say</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
                Ready to start your project? Contact us today for a free consultation and quote.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:+919876543210" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm sm:text-base">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:info@vsinterprises.com" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm sm:text-base">info@vsinterprises.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Address</h3>
                    <p className="text-gray-400 text-sm sm:text-base">123 Electrical Street, City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send Us a Message</h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                      placeholder="Tell us about your project"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 sm:py-4 rounded-lg transition-colors active:scale-95 text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">VSinterprises</h3>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">Professional electrical services for residential and commercial properties.</p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm sm:text-base">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm sm:text-base">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm sm:text-base">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm sm:text-base">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="text-gray-400 text-sm sm:text-base">Residential Wiring</li>
                <li className="text-gray-400 text-sm sm:text-base">Commercial Services</li>
                <li className="text-gray-400 text-sm sm:text-base">Lighting Installation</li>
                <li className="text-gray-400 text-sm sm:text-base">Safety Inspections</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact Info</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+919876543210" className="hover:text-yellow-500 transition-colors text-sm sm:text-base">+91 98765 43210</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@vsinterprises.com" className="hover:text-yellow-500 transition-colors text-sm sm:text-base">info@vsinterprises.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm sm:text-base">123 Electrical Street</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">© 2026 VSinterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
