export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-8" style={{ backgroundColor: '#1e293b' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p style={{ color: '#cbd5e1' }}>
          &copy; {currentYear} Nick McGuffin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}