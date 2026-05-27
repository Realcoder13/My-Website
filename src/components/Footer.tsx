export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 border-t-4 border-blue-600">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Harmanjeet Singh
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Senior Cloud Architect specializing in scalable cloud solutions and digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://linkedin.com/in/harmanjeetsingh" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">📍 LinkedIn</a></li>
              <li><a href="https://github.com/Realcoder13" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">💻 GitHub</a></li>
              <li><a href="mailto:hello@harmanjeet.com" className="hover:text-blue-400 transition-colors flex items-center gap-2">📧 Email</a></li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Built With</h4>
            <p className="text-gray-400 text-sm">Next.js • TypeScript • Tailwind CSS • React</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Harmanjeet Singh. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Crafted with ❤️ using Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
