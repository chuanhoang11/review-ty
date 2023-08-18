export default function ScrollTriggerModule() {
  var t1 = new TimelineMax({ paused: true });

  t1.to(".menu", 1, {
    left: 0,
    ease: Sine.easeIn,
  });

  t1.staggerFrom(
    ".menu .menu-link",
    0.8,
    { y: "100%", opacity: 1, ease: Sine.easeOut },
    "0.1",
    "-=0.1"
  );

  t1.staggerFrom(
    ".menu-ct-item",
    0.8,
    { y: "100%", opacity: 0, ease: Sine.easeOut },
    "0.1",
    "-=0.8"
  );

  t1.reverse();
  $(document).on("click", ".menu-open", function () {
    t1.reversed(!t1.reversed());
  });
  $(document).on("click", ".menu-link", function () {
    t1.reversed(!t1.reversed());
  });
}
