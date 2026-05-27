'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.hero-animate');
          elements.forEach((el, idx) => {
            setTimeout(() => {
              el.classList.add('animate-fade-in-up');
            }, idx * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-800/75"></div>

      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <div className="container-custom text-center relative z-10">
        <div className="hero-animate opacity-0">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
            Harmanjeet Singh
          </h1>
        </div>
        <div className="hero-animate opacity-0">
          <p className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Senior Cloud Architect
          </p>
        </div>
        <div className="hero-animate opacity-0">
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Specialized in Google Cloud Platform and Microsoft Azure with extensive experience in cloud infrastructure, architecture, and digital transformation. Building scalable, secure, and innovative cloud solutions.
          </p>
        </div>
        <div className="hero-animate opacity-0 flex gap-4 justify-center flex-wrap mt-12">
          <a
            href="#contact"
            className="btn-primary animate-pulse-glow"
            aria-label="Get in touch with Harmanjeet Singh"
          >
            Get In Touch
          </a>
          <a
            href="#skills"
            className="btn-secondary"
            aria-label="View my skills and expertise"
          >
            View Skills
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
