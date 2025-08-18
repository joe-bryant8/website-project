import { experience } from "../data/siteData";

function RoleCard({ item }) {
  return (
    <div className="relative border-l border-neutral-700 pl-6 text-left">
      <div className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-blue-500 ring-2 ring-neutral-900" />
      <h3 className="text-lg font-semibold text-white">{item.role}</h3>
      <p className="text-neutral-400">
        {item.company} • {item.start} – {item.end}
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-300">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight text-white">
          Experience
        </h2>

        <div className="space-y-8">
          {experience.map((item, idx) => (
            <RoleCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
