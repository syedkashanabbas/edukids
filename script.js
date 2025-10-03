// GSAP Animations

// Animate Navbar
gsap.from(".logo", {
  opacity: 0,
  y: -30,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".nav-links li", {
  opacity: 0,
  y: -20,
  duration: 0.8,
  stagger: 0.15,
  delay: 0.5,
  ease: "power2.out",
});

// Animate Hero Section
gsap.from(".hero-heading", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  delay: 1,
  ease: "power3.out",
});

gsap.from(".hero-sub", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.8,
  ease: "power2.out",
});

// UFO floating animation (cute hover effect)
gsap.to(".ufo-img", {
  y: -10,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

// Girl image
gsap.from(".girl-img", {
  opacity: 0,
  x: -100,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".girl-img",
    start: "top 80%",
  },
});

// Boy image
gsap.from(".boy-img", {
  opacity: 0,
  x: 100,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".boy-img",
    start: "top 80%",
  },
});

// Center content
gsap.from(".text-center", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".text-center",
    start: "top 85%",
  },
});

gsap.from(".list-unstyled li", {
  scrollTrigger: ".list-unstyled",
  x: -50,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
  ease: "power2.out",
});

gsap.from("#student-img", {
  scrollTrigger: "#student-img",
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});
