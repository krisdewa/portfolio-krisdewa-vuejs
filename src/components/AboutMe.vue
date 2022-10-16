<template>
    <!-- ABOUT ME -->
    <div class="about" id="about">
        <div class="container">
            <h2 class="abouth2 text-center">About Me</h2>
            <span class="line rounded-pill"></span>
            <div class="aboutcon">
                <div class="row flex-column-reverse flex-md-row">
                    <div class="row">
                        <div class="col-md-4">
                            <img class="about_img img-fluid" src="frontend/hero/hero-krisna2.jpg" alt="hero" />
                        </div>

                        <div class="col-md-8 about-isi">
                            <h4 class="about-title">Hi There</h4>
                            <p class="about-description">
                                Alhamdulillah For Everything. <br />
                                So we will get acquainted for a moment so that we are more familiar. <br />
                                here is my brief personal data.
                            </p>
                            <div class="col-lg-8 col-md-12 about-r">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-12">
                                        <h5>Name</h5>
                                        <p class="section-description">Krisna Dewa Pratama</p>
                                        <h5>Email</h5>
                                        <p class="section-description">Krisnadp@gmail.com</p>
                                        <h5>Address</h5>
                                        <p class="section-description">Madiun, Indonesia</p>
                                    </div>
                                    <div class="col-xl-6 col-lg-12">
                                        <h5>School</h5>
                                        <p class="section-description">Universitas Ahmad Dahlan</p>
                                        <h5>Major</h5>
                                        <p class="section-description">Informatika</p>
                                        <h5>Focus in</h5>
                                        <p class="section-description">Web Developer & Cyber Security</p>
                                    </div>
                                    <div class="col-xl-6 col-lg-12"></div>
                                    <div class="col-xl-6 col-lg-12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END ABOUT ME-->
</template>

<script>
import $ from 'jquery'

export default {
    name: 'AboutMeComponent',
    props: {
        msg: String
    },
    mounted() {
        $(window).ready(function () {
            $(window).scroll(function () {

                // ABOUT ME ANIMATION
                if ($(window).scrollTop() >= $("#about").offset().top - 100) {
                    $(".about_img").addClass("show");
                    $(".about-isi").addClass("show");
                }

                // PORTFOLIO ANIMATION
                if ($(window).scrollTop() >= $("#project").offset().top - 100) {
                    $($("#project .project-item").get()).each(function (i) {
                        let item = $(this);
                        setTimeout(function () {
                            $(item).addClass("show");
                        }, i * 350);
                    });
                }
            });
        });
    },
}
</script>