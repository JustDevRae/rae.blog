export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 border-t py-6 mobile:flex-col">
      <p>&copy;2025. JustDevRae. All rights reserved.</p>
      <div className="flex items-center justify-center gap-2">
        <a
          href="https://github.com/JustDevRae"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
        <a
          href="mailto:ksrae165@gamil.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
