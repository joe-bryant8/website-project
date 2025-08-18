import Section from "./Section";
import { education } from "../data/siteData";

function EduCard({ item }) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-neutral-900 p-5">
      {/* Logo in top-right */}
      {item.logo && (
        <div className="absolute right-4 top-4 rounded bg-white/10 p-1">
          <img
            src={item.logo}
            alt={`${item.school} logo`}
            className="h-10 w-10 object-contain"
          />
        </div>
      )}

      <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
      <p className="text-neutral-300">{item.school}</p>
      <p className="text-neutral-400 text-sm">
        {item.start} – {item.end}
      </p>

      {item.notes && <p className="mt-2 text-neutral-300">{item.notes}</p>}
    </div>
  );
}

export default function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((e, i) => (
          <EduCard key={i} item={e} />
        ))}
      </div>
    </Section>
  );
}
