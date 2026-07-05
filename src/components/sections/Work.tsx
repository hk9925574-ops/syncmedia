"use client";

const work = [
  { label: "Aperture Skincare — Launch Film", tag: "Video / Post" },
  { label: "Northline Athletics — Campaign", tag: "Photography / Social" },
  { label: "Vantage Audio — Product Series", tag: "Video / AI Content" },
];

export default function Work() {
  return (
    <section id="work" className="relative bg-[#0B0710] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm tracking-[0.4em] text-[#FF6A3D] uppercase">Selected work</p>
        <h2 className="max-w-2xl text-4xl font-black text-white md:text-5xl">Recent projects.</h2>

        <div className="mt-16 flex flex-col divide-y divide-white/10 border-y border-white/10">
          {work.map((item) => (
            <div
              key={item.label}
              className="group flex cursor-pointer items-center justify-between py-8 transition hover:bg-[#FF6A3D]/[0.03]"
            >
              <span className="text-xl font-semibold text-white transition group-hover:text-[#FF6A3D] md:text-2xl">
                {item.label}
              </span>
              <span className="text-sm tracking-widest text-gray-500 uppercase">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
