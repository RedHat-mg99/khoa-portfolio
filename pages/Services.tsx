
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">What Could I Do</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Comprehensive quality assurance solutions are provided for high-capacity software teams and customers.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-3 border-t border-slate-50 pt-8">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Tools & Tech (Visual Cloud) */}
      <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen blur-3xl opacity-20 -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <h2 className="text-white text-3xl font-bold mb-12">My Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['Selenium', 'Java', 'Cypress', 'Linux', 'Postman', 'Jmeter', 'Jira', 'Docker', 'GitHub Actions', 'PostgresQL'].map((tool) => (
              <span key={tool} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-medium hover:bg-white/10 transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
