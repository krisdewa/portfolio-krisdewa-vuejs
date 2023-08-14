<template>
        <div class="skills" id="skills">
                <div class="container">
                        <h2 class="skillsh2">Skills</h2>
                        <span class="line rounded-pill"></span>
                        <div class="programming text-center">
                                <!-- Loop through skills array to generate skill icons -->
                                <a v-for="skill in skills" :key="skill.name" :href="skill.link" target="_blank">
                                        <img :src="skill.icon" :alt="skill.alt" class="img-svg" />
                                </a>
                        </div>
                        <!-- TOOLS -->
                        <h2 class="toolsh2 mt-5">Tools</h2>
                        <span class="line rounded-pill"></span>
                        <div class="tools text-center">
                                <!-- Loop through tools array to generate tool icons -->
                                <a v-for="tool in tools" :key="tool.name" :href="tool.link" target="_blank">
                                        <img :src="tool.icon" :alt="tool.alt" class="img-svg" />
                                </a>
                        </div>
                </div>
        </div>
</template>
      
<script>
import { ref } from 'vue';

export default {
        name: 'SkillComponent',
        setup() {
                const skills = ref([
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
                        }
                ]);

                const tools = ref([
                        {
                                name: 'Visual Studio Code',
                                icon: 'frontend/icon/vscode.svg',
                                link: 'https://code.visualstudio.com/',
                                alt: 'vscode',
                        },
                        {
                                name: 'Filmora',
                                icon: 'frontend/icon/filmora.svg',
                                link: 'https://filmora.wondershare.net/filmora-video-editor.html?gclid=CjwKCAjw9aiIBhA1EiwAJ_GTSkhAwcp5LzvwB2z2vAAr5zck5z_1TaB8jGz3r0kQn_b8gMcRWJhlZRoCT3gQAvD_BwE',
                                alt: 'filmora',
                        },
                        {
                                name: 'Figma',
                                icon: 'frontend/icon/figma.svg',
                                link: 'https://www.figma.com',
                                alt: 'figma',
                        },
                        {
                                name: 'PhpStorm',
                                icon: 'frontend/icon/phpstorm.svg',
                                link: 'https://www.jetbrains.com/phpstorm/',
                                alt: 'phpstorm',
                        },
                        {
                                name: 'IntelliJ Idea',
                                icon: 'frontend/icon/IntelliJ_idea.svg',
                                link: 'https://www.jetbrains.com/idea/',
                                alt: 'intellij',
                        },
                ]);

                return {
                        skills,
                        tools,
                };
        },
};
</script>
      
<style scoped>
.img-svg {
        max-width: 110px;
}
</style>
      