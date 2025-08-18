export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        {title && (
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}