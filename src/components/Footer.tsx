export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom text-center">
        <p className="mb-2">&copy; {currentYear} Harmanjeet Singh. All rights reserved.</p>
        <p className="text-gray-400">Crafted with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
