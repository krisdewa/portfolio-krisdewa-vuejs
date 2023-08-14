<template>
        <!-- SKILLS -->
        <div class="skills" id="skills">
                <div class="container">
                        <h2 class="skillsh2">Skills</h2>
                        <span class="line rounded-pill"></span>
                        <!-- CODE SKILL -->
                        <!-- <div class="backskill"> -->
                        <div class="programming text-center">
                                <a href="https://www.php.net/" target="_blank"><img src="frontend/icon/php.svg"
                                                class="php" alt="php" /></a>
                                <a href="https://laravel.com/" target="_blank"><img src="frontend/icon/laravel.svg"
                                                class="laravel" alt="laravel" /></a>
                                <a href="https://codeigniter.com/" target="_blank"><img
                                                src="frontend/icon/codeigniter.svg" class="img-svg"
                                                alt="codeigniter" /></a>
                                <a href="https://www.python.org/" target="_blank"><img src="frontend/icon/python.svg"
                                                class="img-svg" alt="py" /></a>
                                <a href="https://www.mysql.com/" target="_blank"><img src="frontend/icon/mysql.svg"
                                                class="img-svg" alt="mysql" /></a>
                                <a href="https://id.wikipedia.org/wiki/HTML" target="_blank"><img
                                                src="frontend/icon/html.svg" alt="html" /></a>
                                <a href="https://en.wikipedia.org/wiki/CSS" target="_blank"><img
                                                src="frontend/icon/css.svg" alt="css" /></a>
                                <a href="https://id.wikipedia.org/wiki/JavaScript" target="_blank"><img
                                                src="frontend/icon/javascript.svg" alt="javascript" /></a>
                                <a href="https://getbootstrap.com/" target="_blank"><img
                                                src="frontend/icon/bootstrap.svg" class="img-svg" alt="bootstrap" /></a>
                                <a href="https://reactjs.org/" target="_blank"><img src="frontend/icon/reactjs.svg"
                                                class="img-svg" alt="reactjs" /></a>
                                <a href="https://vuejs.org/" target="_blank"><img src="frontend/icon/vuejs.svg"
                                                class="img-svg" alt="vuejs" /></a>
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
                                        target="_blank"><img class="img-svg" src="frontend/icon/filmora.svg"
                                                alt="filmora" /></a>
                                <a href="https://www.figma.com" target="_blank"><img class="img-svg"
                                                src="frontend/icon/figma.svg" alt="figma" /></a>
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
import ref from 'vue'

export default {
        name: "SkillComponent",
        async setup() {
                const skills = ref([])

                // await new Promise(resolve => setTimeout(resolve, 5000));

                skills.value = [
                        {
                                name: "PHP",
                                icon: "frontend/icon/php.svg",
                                link: "https://www.php.net/",
                                alt: "php",
                        },
                        {
                                name: "Laravel",
                                icon: "frontend/icon/laravel.svg",
                                link: "https://laravel.com/",
                                alt: "laravel",
                        },
                        {
                                name: "Codeigniter",
                                icon: "frontend/icon/codeigniter.svg",
                                link: "https://codeigniter.com/",
                                alt: "codeigniter",
                        },
                        {
                                name: "Python",
                                icon: "frontend/icon/python.svg",
                                link: "https://www.python.org/",
                                alt: "py",
                        },
                        {
                                name: "MySQL",
                                icon: "frontend/icon/mysql.svg",
                                link: "https://www.mysql.com/",
                                alt: "mysql",
                        },
                        {
                                name: "HTML",
                                icon: "frontend/icon/html.svg",
                                link: "https://id.wikipedia.org/wiki/HTML",
                                alt: "html",
                        },
                        {
                                name: "CSS",
                                icon: "frontend/icon/css.svg",
                                link: "https://en.wikipedia.org/wiki/CSS",
                                alt: "css",
                        },
                        {
                                name: "JavaScript",
                                icon: "frontend/icon/javascript.svg",
                                link: "https://id.wikipedia.org/wiki/JavaScript",
                                alt: "javascript",
                        },
                        {
                                name: "Bootstrap",
                                icon: "frontend/icon/bootstrap.svg",
                                link: "https://getbootstrap.com/",
                                alt: "bootstrap",
                        },
                        {
                                name: "ReactJS",
                                icon: "frontend/icon/reactjs.svg",
                                link: "https://reactjs.org/",
                                alt: "reactjs",
                        },
                        {
                                name: "VueJS",
                                icon: "frontend/icon/vuejs.svg",
                                link: "https://vuejs.org/",
                                alt: "vuejs",
                        },
                        {
                                name: "VSCode",
                                icon: "frontend/icon/vscode.svg",
                                link: "https://code.visualstudio.com/",
                                alt: "vscode",
                        },
                        {
                                name: "Filmora",
                                icon: "frontend/icon/filmora.svg",
                                link: "https://filmora.wondershare.net/filmora-video-editor.html?gclid=CjwKCAjw9aiIBhA1EiwAJ_GTSkhAwcp5LzvwB2z2vAAr5zck5z_1TaB8jGz3r0kQn_b8gMcRWJhlZRoCT3gQAvD_BwE",
                                alt: "filmora",
                        },
                        {
                                name: "Figma",
                                icon: "frontend/icon/figma.svg",
                                link: "https://www.figma.com",
                                alt: "figma",
                        },
                        {
                                name: "PhpStorm",
                                icon: "frontend/icon/phpstorm.svg",
                                link: "https://www.jetbrains.com/phpstorm/",
                                alt: "phpstorm",
                        },
                        {
                                name: "IntelliJ Idea",
                                icon: "frontend/icon/IntelliJ_idea.svg",
                                link: "https://www.jetbrains.com/idea/",
                                alt: "phpstorm",
                        },
                ]

                return {
                        skills,
                }
        },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.img-svg {
        max-width: 110px;
}
</style>