'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.about-animate');
          elements.forEach((el, idx) => {
            setTimeout(() => {
              el.classList.add('animate-fade-in-up');
            }, idx * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50" ref={aboutRef}>
      <div className="container-custom">
        <div className="about-animate opacity-0 mb-16">
          <h2 className="section-title mb-8">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="about-animate opacity-0 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              I'm a Senior Cloud Architect with deep expertise in designing and implementing enterprise-grade cloud solutions. With my Google Associate Cloud Engineer (ACE) certification and years of hands-on experience, I help organizations harness the power of cloud technology.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Originally from New Delhi, India, I earned my B.Tech in Computer Science. In 2019, I relocated to Canada to pursue post-graduation in Web Design and Development from Conestoga College, combining academic knowledge with practical expertise.
            </p>
            <blockquote className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50/50 rounded-r-lg italic text-gray-800 font-semibold">
              "Only by taking chances can we truly improve our lives. The hardest but most crucial step is embracing honesty."
            </blockquote>
            <div className="flex gap-4 pt-4">
              <a
                href="#skills"
                className="btn-primary inline-block"
                aria-label="View my technical skills"
              >
                Explore Skills
              </a>
            </div>
          </div>
          <div className="about-animate opacity-0">
            <div className="grid grid-cols-2 gap-6">
              {/* Professional Image */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  alt="Professional portrait of Harmanjeet Singh"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Quick Info Cards */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <h3 className="text-2xl font-bold mb-2">5+</h3>
                <p className="text-blue-100 font-medium">Years Cloud Experience</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-cyan-100 font-medium">Projects Delivered</p>
              </div>

              <div className="bg-white border-2 border-blue-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <p className="font-semibold text-gray-900 mb-1">📍 Location</p>
                <p className="text-gray-600 font-medium">Toronto, Ontario, Canada</p>
              </div>
              <div className="bg-white border-2 border-blue-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <p className="font-semibold text-gray-900 mb-1">🎓 Education</p>
                <p className="text-gray-600 font-medium text-sm">B.Tech CS | Web Design & Dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
