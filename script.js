// Wait for DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  
  // GSAP Animation Timeline
  const timeline = gsap.timeline({ defaults: { duration: 2, ease: "power2.out" } });

  // Animate Equity and Debt Flows coming in
  timeline.fromTo(".equity-flow", { opacity: 0, x: -100 }, { opacity: 1, x: 0 }, "+=0.5");
  timeline.fromTo(".debt-flow", { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, "-=1.5");

  // Animate Data Centers appearing after flows
  timeline.fromTo(".datacenter", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, stagger: 0.3 });

  // Text Animations for Equity and Debt Labels
  timeline.fromTo(".equity-text", { opacity: 0, x: -50 }, { opacity: 1, x: 0 }, "-=1");
  timeline.fromTo(".debt-text", { opacity: 0, y: -50 }, { opacity: 1, y: 0 }, "-=1");
});
