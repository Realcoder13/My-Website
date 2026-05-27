'use client';

import { useEffect, useRef } from 'react';

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.skill-card');
          cards.forEach((card, idx) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in-up');
            }, idx * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: 'Google Cloud Platform',
      icon: '☁️',
      color: 'from-blue-600 to-blue-700',
      items: ['Compute Engine', 'App Engine', 'Cloud Functions', 'Kubernetes Engine', 'BigQuery', 'Cloud Storage'],
    },
    {
      category: 'Microsoft Azure',
      icon: '⚡',
      color: 'from-cyan-600 to-cyan-700',
      items: ['Virtual Machines', 'App Service', 'Azure Functions', 'Azure Kubernetes Service', 'Cosmos DB', 'Azure Storage'],
    },
    {
      category: 'Cloud Architecture',
      icon: '🏗️',
      color: 'from-purple-600 to-purple-700',
      items: ['Infrastructure Design', 'Scalability Planning', 'Security & Compliance', 'Cost Optimization', 'Disaster Recovery', 'Migration Strategy'],
    },
    {
      category: 'DevOps & Tools',
      icon: '🔧',
      color: 'from-orange-600 to-orange-700',
      items: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Git', 'CI/CD Pipelines'],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-white to-gray-50" ref={skillsRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">Skills & Expertise</h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive technical expertise across cloud platforms, modern DevOps tools, and enterprise architecture patterns.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`skill-card opacity-0 group bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-blue-500 card-hover relative overflow-hidden`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {skill.category}
                </h3>
                <ul className="space-y-3">
                  {skill.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start group/item">
                      <span className={`bg-gradient-to-r ${skill.color} bg-clip-text text-transparent mr-3 font-bold text-lg`}>
                        ✓
                      </span>
                      <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-20 pt-20 border-t-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Also Proficient In</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'TypeScript', level: 'Expert' },
              { name: 'Next.js', level: 'Expert' },
              { name: 'React', level: 'Expert' },
              { name: 'Python', level: 'Advanced' },
              { name: 'GraphQL', level: 'Advanced' },
              { name: 'PostgreSQL', level: 'Advanced' },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="skill-card opacity-0 bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                <p className="font-bold text-gray-900">{skill.name}</p>
                <p className="text-blue-600 font-semibold text-sm">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
