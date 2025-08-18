import "./index.css";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200">
      <Hero />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <Footer />
    </main>
  );
}
