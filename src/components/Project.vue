<template>
    <!-- PROJECT -->
    <div class="project" id="project">
        <div class="container">
            <h3 class="section-title text-center projecth3">Portofolio Project</h3>
            <span class="line rounded-pill"></span>
            <div class="row justify-content-center">

                <div class="col-lg-4 col-md-6 mb-4" v-for="(porto, index) in portfolio" :key="index">
                    <div class="card">
                        <img v-bind:src="porto.img" class="w-100 rounded" loading="lazy" :alt="porto.alt" />
                        <div class="card-body">
                            <h5 class="card-title"> {{ porto.title }} </h5>

                            <!-- <p class="card-text text-secondary-subtle bg-danger"> {{ porto.deskripsi }} </p> -->

                            <div :class="porto.bgd" class="badge text-wrap text-dark m-1">
                                {{ porto.deskripsi }}
                            </div>
                            <div :class="porto.bgd1" class="badge text-wrap text-dark m-1">
                                {{ porto.deskripsi1 }}
                            </div>
                            <div :class="porto.bgd2" class="badge text-wrap text-dark m-1">
                                {{ porto.deskripsi2 }}
                            </div>
                            <div :class="porto.bgd3" class="badge text-wrap text-dark m-1">
                                {{ porto.deskripsi3 }}
                            </div>

                            <div class="row justify-content-center mt-3">
                                <div class="col-lg-6 mt-1">
                                    <div class="d-grid gap-2">
                                        <p class="btn-sm btn-back text-center">-</p>
                                        <a v-bind:href="porto.link" target="_blank" class="btn btn-sm btn-custom">Visit</a>
                                    </div>
                                </div>
                                <div class="col-lg-6 mt-1">
                                    <div class="d-grid gap-2">
                                        <a class="btn-sm btn-back text-center">-</a>
                                        <a v-bind:href="porto.repo" class="btn btn-sm btn-custom" target="_blank">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="col-lg-4 col-md-6 mb-4">
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
                                        <a href="#" class="btn btn-sm btn-custom">Repository</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->

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
                alt: "Adjineon Advertising Jambi",
                title: "Adjineon Advertising Jambi",
                bgd: "bg-primary",
                deskripsi: "PHP",
                bgd1: "bg-light",
                deskripsi1: "MySQL",
                link: "https://adjineon.com",
                repo: "https://adjineon.com"
            },
            {
                img: 'frontend/portfolio/yogsmap.png',
                alt: "Yogsmap(Yogyakarta Map)",
                title: "Yogsmap(Yogyakarta Map)",
                bgd: "bg-primary",
                deskripsi: "PHP",
                bgd1: "bg-warning",
                deskripsi1: "Javascript",
                bgd2: "bg-light",
                deskripsi2: "MySQL",
                link: "https://github.com/krisdewa/yogsmap",
                repo: "https://github.com/krisdewa/yogsmap"
            },
            {
                img: 'frontend/portfolio/webprofile1.png',
                alt: "Web Profile KrisDewa",
                title: "Web Profile KrisDewa",
                bgd: "bg-success",
                deskripsi: "Vue.Js",
                bgd1: "bg-warning",
                deskripsi1: "CSS",
                bgd2: "bg-primary",
                deskripsi2: "Bootstrap",
                link: "https://krisproject.my.id",
                repo: "https://github.com/krisdewa/portfolio-krisdewa-vuejs"
            },
            {
                img: 'frontend/portfolio/apotek.png',
                alt: "Apotek-24",
                title: "Apotek-24",
                bgd: "bg-primary",
                deskripsi: "PHP",
                bgd1: "bg-warning",
                deskripsi1: "JS",
                bgd2: "bg-light",
                deskripsi2: "MySQL",
                link: "https://github.com/krisdewa/PHP-CRUD-Apotek",
                repo: "https://github.com/krisdewa/PHP-CRUD-Apotek"
            },
            {
                img: 'frontend/portfolio/kostqita.png',
                alt: "Kost Qita Yogyakarta",
                title: "Kost Qita Yogyakarta",
                bgd: "bg-primary bg-opacity-50",
                deskripsi: "CodeIgniter",
                bgd1: "bg-light",
                deskripsi1: "MySQL",
                link: "https://kostqita.com",
                repo: "https://kostqita.com"
            },
            {
                img: 'frontend/portfolio/ppdbsekolahkakseto.png',
                alt: "PPDB Sekolah Kak Seto",
                title: "Sistem Kolaborasi Sekolah Kak Seto",
                bgd: "bg-primary",
                deskripsi: "CodeIgniter",
                bgd1: "bg-danger",
                deskripsi1: "Laravel",
                bgd2: "bg-secondary",
                deskripsi2: "light",
                link: "https://sekolahkakseto.sch.id/",
                repo: "https://sekolahkakseto.sch.id/"
            },
            {
                img: 'frontend/portfolio/linkkrisdewa.png',
                alt: "Link KrisDewa",
                title: "Clone LinkTree(React.Js)",
                bgd: "bg-primary",
                deskripsi: "React.Js",
                bgd1: "bg-warning",
                deskripsi1: "CSS",
                bgd2: "bg-info",
                deskripsi2: "Particles.Js",
                link: "https://link.krisproject.my.id",
                repo: "https://github.com/krisdewa/clone-linktree-react"
            },
            {
                img: 'frontend/portfolio/quran.png',
                alt: "Al-Quran Online",
                title: "Quran Online",
                bgd: "bg-success",
                deskripsi: "Vue.Js",
                bgd1: "bg-warning text-light",
                deskripsi1: "Axios",
                bgd2: "bg-info",
                deskripsi2: "API Quran",
                link: "https://quran.krisproject.my.id",
                repo: "https://github.com/krisdewa/Al-Quran-Online"
            },
            {
                img: 'frontend/portfolio/comingsoon.jpg',
                alt: "Coming Soon",
                title: "Coming Soon",
                bgd: "bg-info",
                deskripsi: "Golang",
                bgd1: "bg-light",
                deskripsi1: "Express.Js",
                link: "https://github.com/krisdewa",
                repo: "https://github.com/krisdewa"
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