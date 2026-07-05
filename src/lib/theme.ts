// Shared palette for the SyncMedia site — 3D scene + UI both read from here.
// Moving off cyan-on-black (generic "AI dashboard" default) to a warm,
// film/production-grade palette: think tally-light red-orange + violet sync-pulse,
// against a warm near-black instead of pure void black.
export const theme = {
  void: "#0B0710",      // background
  ink: "#1B1224",        // panel/card surfaces
  ember: "#FF6A3D",      // primary accent — record-light energy
  violet: "#A855F7",     // secondary accent — the "sync" pulse/connection color
  champagne: "#F2C879",  // tertiary highlight — used sparingly for rim light
  paper: "#F5EFE8",      // primary text, warm off-white (not pure white)
  fog: "#1A0F14",
} as const;
