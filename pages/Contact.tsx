
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 800);
  };

  return (
    <div className="bg-slate-50 pb-20">
      <section className="bg-blue-600 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">We are here to assist you with any financial queries or membership details.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Details Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Phone size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Call Support</h4>
              <p className="text-slate-500 mb-1">Mon - Sat, 10:00 - 18:00</p>
              <p className="text-blue-600 font-bold">+91 98765 43210</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-4">
                <Mail size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Email Us</h4>
              <p className="text-slate-500 mb-1">General inquiries</p>
              <p className="text-blue-600 font-bold">contact@eibilnidhi.com</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Main Branch</h4>
              <p className="text-slate-500">123 Financial Plaza, Corporate Road,<br />Mumbai, MH 400001</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              {submitted ? (
                <div className="p-12 text-center py-24">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Message Received!</h2>
                  <p className="text-slate-600 text-lg mb-8">Thank you for reaching out. One of our relationship managers will contact you within 24 business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-blue-600 font-bold underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us an Inquiry</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input required type="text" placeholder="e.g. Rahul Sharma" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input required type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Interested In</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                      <option>General Inquiry</option>
                      <option>Gold Loan</option>
                      <option>Property Loan</option>
                      <option>Term Deposit</option>
                      <option>Savings Account</option>
                      <option>Become a Member</option>
                    </select>
                  </div>
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea rows={4} placeholder="How can we help you today?" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
                    Send Message <Send size={20} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-20 px-4">
        <div className="max-w-7xl mx-auto h-[400px] rounded-3xl overflow-hidden shadow-inner border border-slate-200 grayscale">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120638.19799295503!2d72.82229624999999!3d19.1098204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
