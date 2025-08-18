import Section from "./Section";
import { skills } from "../data/siteData";
import "./SkillsSection.css";

function SkillBar({ name, percent }) {
  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between">
        <span className="text-neutral-200">{name}</span>
        <span className="text-sm text-neutral-400 percent">{percent}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-neutral-800">
        <div
          className="h-2 rounded-full bg-cyan-400"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
          aria-label={name}
        />
      </div>
    </div>
  );
}

function Group({ title, items }) {
  // sort descending by percent for each card
  const sorted = [...items].sort((a, b) => b.percent - a.percent);
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900 p-5">
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      <div className="space-y-4">
        {sorted.map((s) => (
          <SkillBar key={s.name} name={s.name} percent={s.percent} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills & Hobbies">
      <div className="grid gap-4 sm:grid-cols-2">
        <Group title="Technical Skills" items={skills.technical} />
        <Group title="Frameworks & Tools" items={skills.frameworks} />
        {skills.softSkills?.length > 0 && (
          <Group title="Soft Skills" items={skills.softSkills} />
        )}
      </div>
    </Section>
  );
}
