import { useState } from "react";
import { profile } from "../data/siteData";

const iconPaths = {
  mail: "/email.png",
  linkedin: "/linkedin.webp",
  resume: "/download.png",
};

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="relative">
      <div
        className="h-40 w-full bg-cover bg-center sm:h-56"
        style={{ backgroundImage: `url(${profile.bannerUrl})` }}
      />
      <div className="mx-auto -mt-12 w-full max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-6 backdrop-blur">
          <div className="flex flex-col items-center text-center">
            <img
              src={profile.photo}
              alt={profile.name}
              onClick={() => setShowModal(true)}
              className="h-28 w-28 cursor-pointer rounded-full border-4 border-neutral-800 object-cover transition hover:scale-105"
            />

            <h1 className="mt-4 text-2xl font-semibold text-white">
              {profile.name}
            </h1>
            <p className="text-lg text-neutral-300">
              {profile.title} • {profile.company}
            </p>
            <p className="mt-2 max-w-3xl text-neutral-300">{profile.blurb}</p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {profile.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={l.label}
                  className="inline-flex items-center gap-2 rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
                >
                  {iconPaths[l.icon] && (
                    <img
                      src={iconPaths[l.icon]}
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-4 object-contain"
                    />
                  )}
                  <span>{l.label}</span>
                </a>
              ))}

              <a
                href={profile.resumeUrl}
                download="resume_josephbryant"
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-800 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700"
              >
                {iconPaths.resume && (
                  <img
                    src={iconPaths.resume}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 object-contain"
                  />
                )}
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowModal(false)}
        >
          <img
            src={profile.photo}
            alt={profile.name}
            className="max-h-[90%] max-w-[90%] rounded-xl shadow-lg"
          />
        </div>
      )}
    </header>
  );
}
