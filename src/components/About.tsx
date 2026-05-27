export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a Senior Cloud Architect with expertise in cloud domain and infrastructure. I hold a Google Associate Cloud Engineer (ACE) certification and have hands-on experience with modern cloud platforms.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Originally from New Delhi, India, I earned my B.Tech in Computer Science there. In 2019, I moved to Canada and pursued post-graduation in Web Design and Development from Conestoga College.
            </p>
            <p className="text-lg text-gray-700 italic">
              "Only by taking chances can we truly improve our lives. The hardest but most crucial step is embracing honesty."
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Quick Info</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="text-gray-600">Toronto, Ontario, Canada</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Education</p>
                <p className="text-gray-600">B.Tech in Computer Science</p>
                <p className="text-gray-600">Web Design & Development (Conestoga College)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Certifications</p>
                <p className="text-gray-600">Google Associate Cloud Engineer (ACE)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
