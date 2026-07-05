"use client";

export default function Navbar() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-6 mt-6 flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-10 backdrop-blur-2xl">
        <h1 className="cursor-pointer text-2xl font-black tracking-[0.35em] text-white transition hover:text-[#FF6A3D]">
          SYNCMEDIA
        </h1>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium uppercase tracking-[0.25em] text-gray-300 transition duration-300 hover:text-[#FF6A3D]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-[#FF6A3D]/50 bg-[#FF6A3D]/10 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#ffbf9e] transition hover:bg-[#FF6A3D] hover:text-black"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}