export default function Skills() {
  const skills = [
    {
      category: 'Google Cloud Platform',
      items: ['Compute Engine', 'App Engine', 'Cloud Functions', 'Kubernetes Engine', 'BigQuery', 'Cloud Storage'],
    },
    {
      category: 'Microsoft Azure',
      items: ['Virtual Machines', 'App Service', 'Azure Functions', 'Azure Kubernetes Service', 'Cosmos DB', 'Azure Storage'],
    },
    {
      category: 'Cloud Architecture',
      items: ['Infrastructure Design', 'Scalability Planning', 'Security & Compliance', 'Cost Optimization', 'Disaster Recovery', 'Migration Strategy'],
    },
    {
      category: 'DevOps & Tools',
      items: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Git', 'CI/CD Pipelines'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
