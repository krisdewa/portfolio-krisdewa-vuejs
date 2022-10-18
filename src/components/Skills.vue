<template>
    <!-- SKILLS -->
    <div class="skills" id="skills">
        <div class="container">
            <h2 class="skillsh2">Skills</h2>
            <span class="line rounded-pill"></span>
            <!-- CODE SKILL -->
            <!-- <div class="backskill"> -->
            <div class="programming text-center">
                <a href="https://www.php.net/" target="_blank"><img src="frontend/icon/php.svg" class="php"
                        alt="php" /></a>
                <a href="https://laravel.com/" target="_blank"><img src="frontend/icon/laravel.svg" class="laravel"
                        alt="laravel" /></a>
                <a href="https://codeigniter.com/" target="_blank"><img src="frontend/icon/codeigniter.svg"
                        class="img-svg" alt="codeigniter" /></a>
                <a href="https://www.python.org/" target="_blank"><img src="frontend/icon/python.svg" class="img-svg"
                        alt="py" /></a>
                <a href="https://www.mysql.com/" target="_blank"><img src="frontend/icon/mysql.svg" class="img-svg"
                        alt="mysql" /></a>
                <a href="https://id.wikipedia.org/wiki/HTML" target="_blank"><img src="frontend/icon/html.svg"
                        alt="html" /></a>
                <a href="https://en.wikipedia.org/wiki/CSS" target="_blank"><img src="frontend/icon/css.svg"
                        alt="css" /></a>
                <a href="https://id.wikipedia.org/wiki/JavaScript" target="_blank"><img
                        src="frontend/icon/javascript.svg" alt="javascript" /></a>
                <a href="https://getbootstrap.com/" target="_blank"><img src="frontend/icon/bootstrap.svg"
                        class="img-svg" alt="bootstrap" /></a>
                <a href="https://reactjs.org/" target="_blank"><img src="frontend/icon/reactjs.svg" class="img-svg"
                        alt="reactjs" /></a>
                <a href="https://vuejs.org/" target="_blank"><img src="frontend/icon/vuejs.svg" class="img-svg"
                        alt="vuejs" /></a>
                <!-- <img src="assets/icon/git.svg" alt="git" /> -->
                <!-- <img src="assets/icon/github.svg" alt="php" /> -->
            </div>
            <!-- </div> -->
            <!-- END CODE SKILL -->

            <!-- TOOLS -->
            <h2 class="toolsh2 mt-5">Tools</h2>
            <span class="line rounded-pill"></span>
            <!-- <div class="backtool"> -->
            <div class="tools text-center">
                <!-- <img src="./assets/icon/photoshop.svg" alt="photoshop" /> -->
                <a href="https://code.visualstudio.com/" target="_blank">
                    <img class="img-svg" src="frontend/icon/vscode.svg" alt="vscode" />
                </a>
                <a href="https://filmora.wondershare.net/filmora-video-editor.html?gclid=CjwKCAjw9aiIBhA1EiwAJ_GTSkhAwcp5LzvwB2z2vAAr5zck5z_1TaB8jGz3r0kQn_b8gMcRWJhlZRoCT3gQAvD_BwE"
                    target="_blank"><img class="img-svg" src="frontend/icon/filmora.svg" alt="filmora" /></a>
                <a href="https://www.figma.com" target="_blank"><img class="img-svg" src="frontend/icon/figma.svg"
                        alt="figma" /></a>
                <a href="https://www.jetbrains.com/phpstorm/" target="_blank"><img class="img-svg"
                        src="frontend/icon/phpstorm.svg" alt="phpstorm" /></a>
                <a href="https://www.jetbrains.com/idea/" target="_blank"><img class="img-svg"
                        src="frontend/icon/IntelliJ_idea.svg" alt="phpstorm" /></a>
            </div>
            <!-- </div> -->
            <!-- END TOOLS -->
        </div>
    </div>
    <!-- SKILL & TOOL -->
</template>

<script>
export default {
    name: "SkillComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.img-svg {
    max-width: 110px;
}
</style>