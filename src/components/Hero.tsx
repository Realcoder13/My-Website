export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container-custom text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Harmanjeet Singh</h1>
        <p className="text-xl md:text-2xl mb-4">Senior Cloud Architect</p>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
          Specialized in Google Cloud Platform and Microsoft Azure with extensive experience in cloud infrastructure, architecture, and digital transformation.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
          <a href="#skills" className="btn-secondary bg-white text-blue-600 hover:bg-blue-50">
            View Skills
          </a>
        </div>
      </div>
    </section>
  );
}
