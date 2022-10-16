$(document).ready(function () {
    var typed = new Typed(".typing", {
        strings: [
            "Web Developer",
            "Cyber Security Enthusiast",
            "Programmer",
            "Content Creator",
        ],
        typeSpeed: 70,
        loop: true,
        // startDelay: 1000,
        backSpeed: 40,
        backDelay: 1000,
    });
});

$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});
