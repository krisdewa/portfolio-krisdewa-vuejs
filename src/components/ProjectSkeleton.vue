<template>
    <!-- PROJECT -->
    <div class="project" id="project">
        <div class="container">
            <h3 class="section-title text-center projecth3">Portofolio Project</h3>
            <span class="line rounded-pill"></span>
            <div class="row justify-content-center">

                <div class="col-lg-4 col-md-6 mb-4" v-for="n in 9" :key="n++">
                    <div class="card">
                        <AnimatedPlaceholder width="" height="220px" borderRadius="5px" />
                        <div class="card-body">
                            <h5 class="card-title">
                                <AnimatedPlaceholder width="100px" height="20px" borderRadius="5px" />
                            </h5>
                            <p class="card-text">
                                <AnimatedPlaceholder width="150px" height="20px" borderRadius="5px" />
                            </p>
                            <div class="row justify-content-center">
                                <div class="col-lg-6 mt-1">
                                    <div class="d-grid gap-2">
                                        <p class="btn-sm btn-back text-center">-</p>
                                        <a target="_blank" class="btn btn-sm btn-custom">Visit</a>
                                    </div>
                                </div>
                                <div class="col-lg-6 mt-1">
                                    <div class="d-grid gap-2">
                                        <a class="btn-sm btn-back text-center">-</a>
                                        <a class="btn btn-sm btn-custom">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END PROJECT -->
    </div>
</template>

<script>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue'

export default {
    name: "ProjectComponent",
    components: {
        AnimatedPlaceholder
    },
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