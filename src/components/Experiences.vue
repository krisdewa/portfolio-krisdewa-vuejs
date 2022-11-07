<template>
    <!-- EXPERIENCE -->
    <div class="experience" id="experience">
        <h2 class="text-center">Experience</h2>
        <span class="line rounded-pill"></span>
        <div class="container">
            <!-- <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 mb-4" v-for="(ser, index) in sertif" :key="index">
                    <img v-bind:src="ser.img" alt="" class="img">
                </div>
            </div> -->
            <carousel :items-to-show="1.5" class="carousel">
                <slide v-for="slide in sertif" :key="slide">
                    <img v-bind:src="slide.img" alt="">
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
        </div>
    </div>
    <!-- END EXPERIENCE -->
</template>

<script>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: "ExperienceComponent",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    async setup() {
        const sertif = ref([])

        // await new Promise(resolve => setTimeout(resolve, 5000));

        sertif.value = [
            { img: "frontend/certificate/programmingcontest.png" },
            { img: "frontend/certificate/ddp2.jpg" },
            { img: "frontend/certificate/haxoracademy.jpg" },
            { img: "frontend/certificate/piagamupc.jpg" },
            { img: "frontend/certificate/lsp1.jpg" },
            { img: "frontend/certificate/lsp2.jpg" },
            { img: "frontend/certificate/panitiatdays.jpg" },
            { img: "frontend/certificate/dicodingreact.jpg" },
            { img: "frontend/certificate/dicodingjs.jpg" },
            { img: "frontend/certificate/dicodingpweb.jpg" },
            { img: "frontend/certificate/dicodingfe.jpg" },
            { img: "frontend/certificate/dicodingc.jpg" },
            { img: "frontend/certificate/dicodingjava.jpg" },
            { img: "frontend/certificate/dicodingsolid.jpg" },
            { img: "frontend/certificate/ftth.jpg" },
            { img: "frontend/certificate/acp1.jpg" },
            { img: "frontend/certificate/acp2.jpg" },
            { img: "frontend/certificate/acp3.jpg" },
            { img: "frontend/certificate/seagate1.jpg" },
            { img: "frontend/certificate/seagate2.jpg" },
            { img: "frontend/certificate/alterrabackendgolang.jpg" },
            { img: "frontend/certificate/alterrajs.jpg" },
            { img: "frontend/certificate/googleanalytic.jpg" },
            { img: "frontend/certificate/hariseninfullstack.jpg" },
            { img: "frontend/certificate/hariseninuiux.jpg" },
            { img: "frontend/certificate/informationsecurity.jpg" },
            { img: "frontend/certificate/bssnsibermin.jpg" },
            { img: "frontend/certificate/microsoftinnovatif.jpg" },
            { img: "frontend/certificate/Aguna Course Python fundamental.jpg" },
            { img: "frontend/certificate/Aguna Course Virtual Machine.jpg" },
            { img: "frontend/certificate/bssnseminar.jpg" },
        ]

        return {
            sertif
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    width: 100%;
    height: 600px;
}

.carousel {
    border-radius: 10px;
}
</style>