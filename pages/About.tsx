
import React from 'react';
// Added missing Landmark import from lucide-react
import { Shield, Target, Eye, Handshake, Landmark } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Eibil Nidhi</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Commitment to transparency, integrity, and the financial well-being of our members.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A Legacy of Trust & Growth</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Eibil Nidhi Limited was founded with a singular vision: to empower the common man through financial literacy and affordable credit. As a Nidhi company, we operate strictly under the rules of the Ministry of Corporate Affairs, ensuring that our operations are transparent and member-centric.
                </p>
                <p>
                  Our primary objective is to encourage and afford all facilities for cultivating thrift and saving habits and to render all financial assistance to its members only by receiving long and short term deposits and in particular recurring, fixed and other deposits.
                </p>
                <p>
                  With years of experience in the financial sector, our leadership brings together the best of traditional values and modern banking practices.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573164060897-425941c30243?auto=format&fit=crop&q=80&w=1200" 
                alt="Office Environment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted and preferred Nidhi company in India, setting benchmarks in member satisfaction and secure financial management, while contributing to the overall economic development of our community.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide safe, secure, and rewarding investment opportunities to our members and to provide quick, collateral-based credit solutions at competitive rates with the highest level of professionalism and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-4 rotate-3 group hover:rotate-0 transition-transform">
                <Shield size={32} />
              </div>
              <h4 className="font-bold">Trust</h4>
              <p className="text-sm text-slate-500 mt-2">Built on 100% transparency</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-4 -rotate-3 group hover:rotate-0 transition-transform">
                <Handshake size={32} />
              </div>
              <h4 className="font-bold">Member First</h4>
              <p className="text-sm text-slate-500 mt-2">Member satisfaction is our ROI</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-4 rotate-6 group hover:rotate-0 transition-transform">
                <Target size={32} />
              </div>
              <h4 className="font-bold">Integrity</h4>
              <p className="text-sm text-slate-500 mt-2">Commitment to ethical practices</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-4 -rotate-6 group hover:rotate-0 transition-transform">
                <Landmark size={32} />
              </div>
              <h4 className="font-bold">Security</h4>
              <p className="text-sm text-slate-500 mt-2">Your money is safe with us</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
