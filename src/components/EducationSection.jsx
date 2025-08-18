import Section from "./Section";
import { education } from "../data/siteData";

function EduCard({ item }) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-neutral-900 p-5">
      {item.logo && (
        <div className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded bg-white/10 p-0.5 sm:p-1">
          <img
            src={item.logo}
            alt={`${item.school} logo`}
            className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain"
          />
        </div>
      )}

      <div className="pr-16 sm:pr-20">
        <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
        <p className="text-neutral-300">{item.school}</p>
        <p className="text-sm text-neutral-400">
          {item.start} – {item.end}
        </p>
        {item.notes && <p className="mt-2 text-neutral-300">{item.notes}</p>}
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
    <Section id="education" title="Education" centerTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((e, i) => (
          <EduCard key={i} item={e} />
        ))}
      </div>
    </Section>
  );
}
