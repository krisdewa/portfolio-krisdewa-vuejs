<template>
  <Navbar />
  <Home />
  <AboutMe />
  <Skills />
  <Experience />
  <Project />
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
import Project from './components/Project.vue'
import Contact from './components/Contact.vue'
import ScrollToTop from './components/ScrollToTop.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    AboutMe,
    Skills,
    Experience,
    Project,
    Contact,
    ScrollToTop,
  }
}
</script>

<style>

</style>
