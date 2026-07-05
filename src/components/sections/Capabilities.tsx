"use client";

const capabilities = [
  { emoji: "🎥", title: "Video Production", copy: "Commercial, brand, and narrative shoots — planned, shot, and edited in-house." },
  { emoji: "📷", title: "Photography", copy: "Product, lifestyle, and campaign photography with full retouching." },
  { emoji: "🎬", title: "Post & VFX", copy: "Color grading, motion graphics, and visual effects for every format." },
  { emoji: "🎵", title: "Audio & Sound", copy: "Original scoring, sound design, and mix for video and social." },
  { emoji: "🤖", title: "AI-Powered Content", copy: "Generative tooling layered into real production pipelines, not gimmicks." },
  { emoji: "☁", title: "Social & Distribution", copy: "Platform-native cuts and campaign rollout across every channel." },
];

export default function Capabilities() {
  return (
    <section id="services" className="relative bg-[#0B0710] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm tracking-[0.4em] text-[#FF6A3D] uppercase">What we do</p>
        <h2 className="max-w-2xl text-4xl font-black text-white md:text-5xl">
          One studio, every format.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-300 hover:border-[#FF6A3D]/40 hover:bg-[#FF6A3D]/[0.04]"
            >
              <span className="text-3xl">{cap.emoji}</span>
              <h3 className="mt-5 text-lg font-semibold text-white">{cap.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">{cap.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
