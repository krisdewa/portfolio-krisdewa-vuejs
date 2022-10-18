<template>
    <!-- EXPERIENCE -->
    <div class="experience" id="experience">
        <h2 class="text-center">Experience</h2>
        <span class="line rounded-pill"></span>
        <div class="container">
            <div class="port">
                <div class="carousel"
                    data-flickity='{ "imagesLoaded": true, "autoPlay": true , "percentPosition": false, "wrapAround": true }'>
                    <img src="frontend/certificate/programmingcontest.png             " alt="ddp">
                    <img src="frontend/certificate/ddp2.jpg                           " alt="ddp">
                    <img src="frontend/certificate/haxoracademy.jpg                   " alt="" />
                    <img src="frontend/certificate/piagamupc.jpg                      " alt="" />
                    <img src="frontend/certificate/lsp1.jpg                           " alt="" />
                    <img src="frontend/certificate/lsp2.jpg                           " alt="" />
                    <img src="frontend/certificate/panitiatdays.jpg                   " alt="" />
                    <img src="frontend/certificate/dicodingreact.jpg                  " alt="" />
                    <img src="frontend/certificate/dicodingjs.jpg                     " alt="" />
                    <img src="frontend/certificate/dicodingpweb.jpg                   " alt="" />
                    <img src="frontend/certificate/dicodingfe.jpg                     " alt="" />
                    <img src="frontend/certificate/dicodingc.jpg                      " alt="" />
                    <img src="frontend/certificate/dicodingjava.jpg                   " alt="" />
                    <img src="frontend/certificate/dicodingsolid.jpg                  " alt="" />
                    <img src="frontend/certificate/ftth.jpg                           " alt="" />
                    <img src="frontend/certificate/acp1.jpg                           " alt="" />
                    <img src="frontend/certificate/acp2.jpg                           " alt="" />
                    <img src="frontend/certificate/acp3.jpg                           " alt="" />
                    <img src="frontend/certificate/seagate1.jpg                       " alt="" />
                    <img src="frontend/certificate/seagate2.jpg                       " alt="" />
                    <img src="frontend/certificate/alterrabackendgolang.jpg           " alt="" />
                    <img src="frontend/certificate/alterrajs.jpg                      " alt="" />
                    <img src="frontend/certificate/googleanalytic.jpg                 " alt="" />
                    <img src="frontend/certificate/hariseninfullstack.jpg             " alt="" />
                    <img src="frontend/certificate/hariseninuiux.jpg                  " alt="" />
                    <img src="frontend/certificate/informationsecurity.jpg            " alt="" />
                    <img src="frontend/certificate/bssnseminar.jpg                    " alt="" />
                    <img src="frontend/certificate/bssnsibermin.jpg                   " alt="" />
                    <img src="frontend/certificate/microsoftinnovatif.jpg             " alt="" />
                    <img src="frontend/certificate/Aguna Course Python fundamental.jpg" alt="" />
                    <img src="frontend/certificate/Aguna Course Virtual Machine.jpg   " alt="" />

                    <!-- <img src="frontend/certificate/udemyethicalhack.jpg               " alt="" />
                    <img src="frontend/certificate/udemyhackandroid.jpg               " alt="" />
                    <img src="frontend/certificate/udemyc++.jpg                       " alt="" />
                    <img src="frontend/certificate/udemypremiere.jpg                  " alt="" />
                    <img src="frontend/certificate/udemyyt.jpg                        " alt="" /> -->
                    <!-- <img src="frontend/certificate/webinarrelata.jpg                  " alt="" /> -->

                    <!-- {{-- <img src="{{ asset('certificate/webinarbemfti.jpg                  ') }}    " alt="" /> --}}
                    {{-- <img src="{{ asset('certificate/webinarpermikomnas.png  ') }}               " alt="" /> --}}
                    {{-- <img src="{{ asset('certificate/webinarcybersecurity.jpg') }}               " alt="" /> --}}
                    {{-- <img src="{{ asset('certificate/mdt.jpg                 ') }}               " alt="" /> --}}
                    {{-- <img src="{{ asset('certificate/webinarbssn1.jpg        ') }}               " alt="" /> --}}
                    {{-- <img src="{{ asset('certificate/webinarinsightus.jpg    ') }}               " alt="" /> --}} -->
                    <!-- <img src="assets/certificate/literasidigital.jpg" alt="" /> -->
                    <!-- <img src="assets/certificate/webinarkominfo.jpg" alt="" /> -->
                    <!-- <img src="assets/certificate/webinarpersada.jpg" alt="" /> -->
                    <!-- <img src="assets/certificate/webinarLD5.jpg" alt="" /> -->
                    <!-- <img src="assets/certificate/webinarLD6.jpg" alt="" /> -->
                    <!-- <img src="assets/certificate/webinariqbal.jpg" alt="" /> -->

                </div>
            </div>
        </div>
    </div>
    <!-- END EXPERIENCE -->
</template>

<script>
export default {
    name: "ExperienceComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.carousel-cell {
    width: 100%;
    /* full width */
    height: 160px;
    /* height of carousel */
    margin-right: 10px;
}

.flickity-page-dots {
    bottom: -40px;
}

/* white circles */
.flickity-page-dots .dot {
    width: 12px;
    height: 12px;
    opacity: 1;
    background: transparent;
    border: 2px solid #f05454;
}

/* fill-in selected dot */
.flickity-page-dots .dot.is-selected {
    background: #f05454;
}

/* STYLE NEXT PREV BUTTON */
.flickity-button {
    background: #f05454;
    transition: 0.5s;
}

.flickity-button:hover {
    background: #ef9a9a;
}

.flickity-prev-next-button {
    width: 30px;
    height: 30px;
    border-radius: 5px;
}

/* icon color */
.flickity-button-icon {
    fill: #fff;
}

/* position outside */
.flickity-prev-next-button.previous {
    left: -40px;
}

.flickity-prev-next-button.next {
    right: -40px;
}

@media screen and (max-width: 768px) {
    .flickity-page-dots {
        bottom: -60px;
    }

    .flickity-page-dots .dot {
        background: transparent;
        border: 2px solid transparent;
    }

    /* fill-in selected dot */
    .flickity-page-dots .dot.is-selected {
        background: transparent;
    }

}
</style>