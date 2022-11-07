<template>
  <Navbar />
  <Home />
  <AboutMe />
  <Skills />

  <!-- <Suspense>
    <template #default>
      <Experiences />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense> -->

  <Experience />

  <!-- PORTOFOLIO -->
  <Suspense>
    <template #default>
      <Project />
    </template>
    <template #fallback>
      <ProjectSkeletonVue />
    </template>
  </Suspense>
  <!-- END PORTOFOLIO -->

  <Contact />
  <ScrollToTop />
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import AboutMe from './components/AboutMe.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
// import Experiences from './components/Experiences.vue'
import Project from './components/Project.vue'
import Contact from './components/Contact.vue'
import ScrollToTop from './components/ScrollToTop.vue'

import ProjectSkeletonVue from './components/ProjectSkeleton.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    AboutMe,
    Skills,
    Experience,
    // Experiences,
    Project,
    Contact,
    ScrollToTop,
    ProjectSkeletonVue
  }
}
</script>

<style>

</style>
