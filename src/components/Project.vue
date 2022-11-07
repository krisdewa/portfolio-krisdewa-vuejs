<template>
    <!-- PROJECT -->
    <div class="project" id="project">
        <div class="container">
            <h3 class="section-title text-center projecth3">Portofolio Project</h3>
            <span class="line rounded-pill"></span>
            <div class="row justify-content-center">

                <div class="col-lg-4 col-md-6 mb-4" v-for="(porto, index) in portfolio" :key="index">
                    <div class="card">
                        <img v-bind:src="porto.img" class="w-100 rounded" loading="lazy" />
                        <div class="card-body">
                            <h5 class="card-title"> {{ porto.title }} </h5>
                            <p class="card-text">{{ porto.deskripsi }}</p>
                            <div class="row justify-content-center">
                                <div class="col-lg-6 mt-1">
                                    <div class="d-grid gap-2">
                                        <p class="btn-sm btn-back text-center">-</p>
                                        <a v-bind:href="porto.link" target="_blank"
                                            class="btn btn-sm btn-custom">Visit</a>
                                    </div>
                                </div>
                                <div class="col-lg-6 mt-1">
                                    <div class="d-grid gap-2">
                                        <a class="btn-sm btn-back text-center">-</a>
                                        <a v-bind:href="porto.repo" class="btn btn-sm btn-custom"
                                            target="_blank">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="col-lg-4 col-md-6 mb-4">
                    <div class="project-item show rounded">
                        <img src="frontend/portfolio/yogsmap.png" class="w-100" loading="lazy" />
                        <div class="overlay-project">
                            <div class="justify-content-center text-center">
                                <h4 class="project-title text-center mb-4">YOGSMAP(Php)</h4>
                                <a class="viewproject" href="https://yogsmap.krisdewa.my.id" target="_blank">LINK</a>
                                <a class="viewproject" href="https://github.com/krisdewa/yogsmap"
                                    target="_blank">REPO</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="project-item show rounded">
                        <img src="frontend/portfolio/webprofile1.png" class="w-100" loading="lazy" />
                        <div class="overlay-project">
                            <div class="justify-content-center text-center">
                                <h4 class="project-title text-center mb-4">WEB PROFILE(Vue js)</h4>
                                <a class="viewproject" href="https://krisproject.my.id" target="_blank">LINK</a>
                                <a class="viewproject" href="https://github.com/krisdewa/portfolio-krisdewa-vuejs"
                                    target="_blank">REPO</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="project-item show rounded">
                        <img src="frontend/portfolio/apotek.png" class="w-100" loading="lazy" />
                        <div class="overlay-project">
                            <div class="justify-content-center text-center">
                                <h4 class="project-title text-center mb-4">APOTEK-24</h4>
                                <a class="viewproject" href="https://apotek.krisdewa.my.id" target="_blank">LINK</a>
                                <a class="viewproject" href="https://github.com/krisdewa/PHP-CRUD-Apotek"
                                    target="_blank">REPO</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="project-item show rounded">
                        <img src="frontend/portfolio/kostqita.png" class="w-100" loading="lazy" />
                        <div class="overlay-project">
                            <div class="justify-content-center text-center">
                                <h4 class="project-title text-center mb-4">KOST QITA(CodeIgniter)</h4>
                                <a class="viewproject" href="https://here.krisdewa.my.id" target="_blank">LINK</a>
                                <a class="viewproject" href="#" target="_blank">REPO</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="project-item show rounded">
                        <img src="frontend/portfolio/ppdbsekolahkakseto.png" class="w-100" loading="lazy" />
                        <div class="overlay-project">
                            <div class="justify-content-center text-center">
                                <h4 class="text-center">SIK SekolahKakSeto</h4>
                                <a class="viewproject" href="#" target="_blank">LINK</a>
                                <a class="viewproject" href=""
                                    target="_blank">REPO</a>
                        </div>
                    </div>
                </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="project-item show rounded">
                        <img src="frontend/portfolio/linkkrisdewa.png" class="w-100" loading="lazy" />
                        <div class="overlay-project">
                            <div class="justify-content-center text-center">
                                <h4 class="text-center">Clone LinkTree (ReactJS)</h4>
                                <a class="viewproject" href="https://link.krisproject.my.id" target="_blank">LINK</a>
                                <a class="viewproject" href="https://github.com/krisdewa/clone-linktree-react"
                                    target="_blank">REPO</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="project-item show rounded">
                        <img src="frontend/portfolio/quran.png" class="w-100" loading="lazy" />
                        <div class="overlay-project">
                            <div class="justify-content-center text-center">
                                <h4 class="text-center">Quran (VueJS - Fetching API)</h4>
                                <a class="viewproject" href="https://quran.krisproject.my.id" target="_blank">LINK</a>
                                <a class="viewproject" href="https://github.com/krisdewa/" target="_blank">REPO</a>
                            </div>
                        </div>
                    </div>
                </div> -->

                <!-- <div class="col-lg-4 col-md-6 mb-4">
                    <div class="project-item show rounded">
                        <img src="frontend/portfolio/comingsoon.jpg" class="w-100" loading="lazy" />
                        <div class="overlay-project">
                            <h4 class="text-center">Coming Soon</h4>
                            <a class="viewproject" href="https://here.krisdewa.my.id" target="_blank">Coming
                                Soon</a>
                            <a class="viewproject" href="https://here.krisdewa.my.id" target="_blank">REPO</a>
                        </div>
                    </div>
                </div> -->

                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card">
                        <img src="frontend/portfolio/comingsoon.jpg" class="w-100 rounded" loading="lazy" />
                        <div class="card-body">
                            <h5 class="card-title">Coming Soon</h5>
                            <p class="card-text"></p>
                            <div class="row justify-content-center">
                                <div class="col-lg-6 mt-1">
                                    <div class="d-grid gap-2">
                                        <p class="btn-sm btn-back text-center">-</p>
                                        <a href="#" target="_blank" class="btn btn-sm btn-custom">Visit</a>
                                    </div>
                                </div>
                                <div class="col-lg-6 mt-1">
                                    <div class="d-grid gap-2">
                                        <a class="btn-sm btn-back text-center">-</a>
                                        <a href="#" class="btn btn-sm btn-custom">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- NOTE -->
                <!-- {{-- <p class="note text-center">*Mohon maaf Project masih sedikit.')</p> --}} -->
                <!--  -->
            </div>
        </div>
        <!-- END PROJECT -->
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: "ProjectComponent",
    async setup() {
        const portfolio = ref([])

        await new Promise(resolve => setTimeout(resolve, 5000));

        portfolio.value = [
            {
                img: 'frontend/portfolio/adjineon.png',
                title: "CV Adjineon Advertising Jambi",
                deskripsi: "",
                link: "https://adjineon.com",
                repo: "#"
            },
            {
                img: 'frontend/portfolio/yogsmap.png',
                title: "YOGSMAP",
                deskripsi: "",
                link: "https://yogsmap.krisdewa.my.id",
                repo: "https://github.com/krisdewa/yogsmap"
            },
            {
                img: 'frontend/portfolio/webprofile1.png',
                title: "WEB PROFILE",
                deskripsi: "",
                link: "https://krisproject.my.id",
                repo: "https://github.com/krisdewa/portfolio-krisdewa-vuejs"
            },
            {
                img: 'frontend/portfolio/apotek.png',
                title: "APOTEK-24",
                deskripsi: "",
                link: "https://apotek.krisdewa.my.id",
                repo: "https://github.com/krisdewa/PHP-CRUD-Apotek"
            },
            {
                img: 'frontend/portfolio/kostqita.png',
                title: "KOST QITA",
                deskripsi: "",
                link: "https://here.krisdewa.my.id",
                repo: "#"
            },
            {
                img: 'frontend/portfolio/ppdbsekolahkakseto.png',
                title: "SIK Sekolah Kak Seto",
                deskripsi: "",
                link: "https://sekolahkakseto.sch.id/",
                repo: "#"
            },
            {
                img: 'frontend/portfolio/linkkrisdewa.png',
                title: "Clone LinkTree",
                deskripsi: "",
                link: "https://link.krisproject.my.id",
                repo: "https://github.com/krisdewa/clone-linktree-react"
            },
            {
                img: 'frontend/portfolio/quran.png',
                title: "Quran (VueJS)",
                deskripsi: "",
                link: "https://quran.krisproject.my.id",
                repo: "https://"
            },
        ]

        return {
            portfolio
        }
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    background-color: #2d3541;
    color: #fff;
    border-radius: 10px;
}

.btn-back {
    background: none;
    color: #ffffff;
    border: 1px solid #fdfdfd;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.4s linear;
    position: absolute;
    width: 170px;
}

.btn-custom {
    background-color: #f05454;
    color: #ffffff;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.10s linear;
    position: relative;
    margin: 6px 6px;
    width: 170px;
}

.btn-custom:hover {
    position: absolute;
    width: 170px;
    transition: 0.4s linear;
    margin: 3px 3px;
}

@media (max-width: 1000px) {
    .btn-custom {
        margin: 0px 0px;
        width: 100%;
    }

    .btn-custom:hover {
        margin: 0px 0px;
        width: 100%;
        position: relative;
        color: #bb7171;
    }

    .btn-back {
        display: none;
    }
}
</style>