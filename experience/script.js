$(document).ready(function () {
  // Navbar toggle
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  // Close navbar on scroll or load
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    // Show/hide scroll-to-top button
    if ($(window).scrollTop() > 100) {
      $("#scroll-top").addClass("active");
    } else {
      $("#scroll-top").removeClass("active");
    }
  });

  // ScrollReveal animations
  ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 1000,
    reset: true,
  }).reveal(".experience .timeline .container", { interval: 200 });
});