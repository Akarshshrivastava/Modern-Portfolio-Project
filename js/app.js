// Selectors
const themeLg = document.querySelector(".nav-theme");
const themeSm = document.querySelector(".theme");

// Event Listeners
themeLg.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
themeSm.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// GSAP
const tl = gsap.timeline({
  defaults: { ease: "slow" },
});
tl.from(".illus", {
  opacity: 0,
  duration: 2,
})
  .to(
    "#red1",
    {
      x: "130px",
      repeat: -1,
      yoyo: true,
      duration: 0.6,
    },
    "-=5"
  )
  .to(
    "#red2",
    {
      x: "90px",
      repeat: -1,
      yoyo: true,
      duration: 0.8,
    },
    "-=5"
  )
  .to(
    "#yellow1",
    {
      x: "130px",
      repeat: -1,
      yoyo: true,
      duration: 0.6,
    },
    "-=5"
  )
  .to(
    "#red4",
    {
      x: "120px",
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    },
    "-=5"
  );
const tl2 = gsap.timeline({ defaults: { ease: "power4" } });
tl2
  .from(".hero img", {
    opacity: 0,
    y: "-20%",
    duration: 2,
    delay: 1,
  })
  .from(
    ".hero .hero-title",
    {
      opacity: 0,
      y: "75%",
      duration: 1,
    },
    "-=2"
  )
  .from(
    ".hero .hero-btns #hero-btn",
    {
      opacity: 0,
      y: "100%",
      duration: 0.4,
      stagger: 0.1,
    },
    "-=1"
  )
  .from(
    ".navbar",
    {
      opacity: 0,
      x: "-100%",
      duration: 1.8,
    },
    "-=2.2"
  );
const scrollAbt = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    scrub: true,
    start: "200px bottom",
    end: "-100px top",
  },
});
scrollAbt
  .from(".about .title", {
    x: "-60%",
    opacity: 0,
    duration: 1,
    delay: 0.4,
  })
  .from(".about .about-content span", {
    y: "50%",
    opacity: 0,
    duration: 2,
    delay: 1,
    stagger: 1,
  })
  .from(".about .about-btn", {
    y: "50%",
    opacity: 0,
    duration: 0.6,
  });
const scrollSkills = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    scrub: true,
    start: "260px bottom",
    end: "top top",
  },
});
scrollSkills
  .from(".skills .title", {
    x: "-60%",
    opacity: 0,
    duration: 1,
  })
  .from(".skills .card-holder .card", {
    x: "-20%",
    opacity: 0,
    duration: 2,
    stagger: 0.6,
    delay: 0.8,
  });
const scrollProjects = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    scrub: true,
    start: "100px bottom",
    end: "-200px top",
  },
});
scrollProjects
.from(".projects .title", {
  x: "-60%",
  opacity: 0,
  duration: 1,
})
.from(".projects .card-row .card", {
  x: "-20%",
  opacity: 0,
  duration: 2,
  stagger: 0.6,
  delay: 0.8,
});
  const scrollContacts = gsap.timeline({
    scrollTrigger: {
      trigger: ".contacts",
      scrub: true,
      start: "70% bottom",
      end: "-160px center",
    },
  });
  scrollContacts.from(".contacts .title", {
    x: "-60%",
    opacity: 0,
    duration: 0.8,
  }).from(".contacts .contact-icons-row", {
    x: "-80%",
    opacity: 0,
    duration: 1.6,
    stagger: 0.4,
    delay: 1,
  });