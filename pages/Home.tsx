
import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <a href="#/contact">
                <span className="inline-block py-1 px-3 rounded-full bg-green-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-6">
                  Available for New challenge
                </span>
              </a>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                I Dedicate <span className="text-blue-600">Excellence</span> in Every Product.
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                Hi, I'm {PERSONAL_INFO.fullName}. A {PERSONAL_INFO.role} focuses on reliable User Experience and Automation on Product Delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/resume"
                  className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                >
                  View My Resume
                </Link>
                <Link
                  to="/contact"
                  className="bg-blue-500 border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  Let's Connect!
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <img
                  src="/assets/home/PVCKhoa-personal-cs1.jpg"
                  alt="{PERSONAL_INFO.fullName} Profile"
                  className="rounded-2xl w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">High Quality</p>
                    <p className="text-xs text-slate-500">Zero Critical Defects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">My Vision</h2>
        <p className="text-lg text-slate-600 leading-relaxed italic">
          "{PERSONAL_INFO.summary}"
        </p>
        <div className="mt-12 flex justify-center gap-8 text-slate-400">
          <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-600"></div> Agile Strategy</span>
          <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-600"></div> Make Automation</span>
          <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-600"></div> Detail Instructor</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
