// === MUSIC BUTTON FUNCTIONALITY ===

function toggleMusic() {
  const music = document.getElementById("bg-music");

  if (!music) {
    console.error("🎵 bg-music element not found!");
    return;
  }

  if (music.paused) {
    music.play().catch((e) => console.error("Cannot play music:", e));
  } else {
    music.pause();
  }
}

// === GSAP SCROLL ANIMATIONS ===

window.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".story").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  } else {
    console.warn("⚠ GSAP or ScrollTrigger not loaded.");
  }
});