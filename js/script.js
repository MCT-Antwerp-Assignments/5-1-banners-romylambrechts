var clickTag = "https://www.nike.com/be/w/nieuwe-releases-schoenen-3n82yzy7ok";

document.querySelector(".banner").addEventListener("click", () => {
    window.open(clickTag);
});

const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power3.inOut" } });

// frame 1 
tl.to(".banner__frame--1", {
    opacity: 1,
    duration: 0.5
})
    .to({}, { duration: 4.5 })

    // naar frame 2
    .to(".banner__frame--1", {
        opacity: 0,
        duration: 0.6
    })
    .to(".banner__frame--2", {
        opacity: 1,
        duration: 0.6
    }, "<") // < zorgt ervoor dat het tegelijk start

    // schoen overgang
    .fromTo(".shoe_frame2",
        { x: 250, opacity: 0},
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.2"
    )

    // tekst laten bewegen
    .fromTo(".banner__frame--2 h1",
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4 },
        "<"
    )

    .to({}, { duration: 3.8 })

    // naar frame 3
    .to(".banner__frame--2", {
        opacity: 0,
        duration: 0.6
    })
    .to(".banner__frame--3", {
        opacity: 1,
        duration: 0.6
    }, "<")

    .to(".shoe_frame2", {
        y: -120,
        duration: 1.2,
        ease: "power2.inOut"
    }, "<")

    // frame 3
    .from(".buynow", {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, "-=0.4")

    .from(".logo_frame3", {
        opacity: 1,
        duration: 0.6
    }, "-=0.5")

    .to({}, { duration: 4.5 });