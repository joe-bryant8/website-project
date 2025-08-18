export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <p className="text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Joe Bryant.
        </p>
      </div>
    </footer>
  );
}
