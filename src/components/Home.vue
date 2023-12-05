<template>
    <!-- Warna efek -->
    <div class="blur"></div>

    <!-- HOME -->
    <div class="hero">
        <div class="container">
            <div class="row flex-column-reverse flex-md-row">
                <div class="col-md-8">
                    <h2>
                        <span class="hi">Hi</span>, I'm a Krisna Dewa Pratama
                    </h2>
                    <div class="interest">
                        <p>Interest in <span class="typing"></span></p>
                    </div>
                    <p>
                        I'm from Madiun and I have been focus learning
                        programming since 2019 when I'm studying in College and
                        I'm also new learning Cyber Security since 2021. If you
                        want hire or discuss about project just contact me, by
                        click the button down bellow.
                    </p>
                    <!-- <a href="https://drive.google.com/file/d/1IWwpJG_B1oYYQ8qceeoNH2Y1FHKEpddF/view?usp=sharing"
                        target="_blank" class="btn btn-primary cv">Download CV</a> -->
                    <!-- <a href="mailto:krisnadp23@gmail.com" class="btn btn-primary contact">Let's Work Together</a> -->

                    <button class="btncv">
                        <a href="https://drive.google.com/file/d/1IWwpJG_B1oYYQ8qceeoNH2Y1FHKEpddF/view?usp=sharing"
                            target="_blank">
                            Download CV
                        </a>
                    </button>
                    <button class="btnmail">
                        <a href="mailto:krisnadp23@gmail.com">Let's Work Together</a>
                    </button>
                </div>
                <div class="col-md-4">
                    <!-- <img class="hero_img img-fluid" src="frontend/hero/main_foto .png" alt="Foto Krisdewa"
                        loading="lazy" /> -->
                    <img v-bind:src="home.main" class="hero_img img-fluid" alt="Foto Krisdewa" loading="lazy" />
                </div>
            </div>
        </div>
    </div>
    <!-- END HOME -->
</template>

<script>
export default {
    name: "HomeComponent",
    data() {
        return {
            home: {
                main: require('../assets/hero/main_foto.png')
            }
        };
    },
    // mounted() {
    //     const image = this.$el.querySelector(".hero_img[data-src]");

    //     if (image) {
    //         const imgOptions = {
    //             threshold: 0,
    //             rootMargin: "0px 0px 50px 0px",
    //         };

    //         const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    //             entries.forEach((entry) => {
    //                 if (!entry.isIntersecting) {
    //                     return;
    //                 } else {
    //                     preloadImage(entry.target);
    //                     imgObserver.unobserve(entry.target);
    //                 }
    //             });
    //         }, imgOptions);

    //         imgObserver.observe(image);
    //     }

    //     function preloadImage(img) {
    //         const src = img.getAttribute("data-src");
    //         if (!src) {
    //             return;
    //         }

    //         img.src = src;
    //     }
    // },
};
</script>