export default function Footer() {
  return (
    <footer className="bg-blue-700 py-4 text-center">
      <div className="container mx-auto">
        <p>&copy;2025. JustDevRae. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-cyan-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-cyan-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-cyan-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
