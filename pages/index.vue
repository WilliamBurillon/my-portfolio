<template>

    <NavBar/>
    <main>
        <Home />
        <About />
        <Projects />
        <Contact />
    </main>


</template>

<script>
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
export default {
    components: {About, Projects, Home, NavBar,Contact}
}
</script>

<style scoped>


</style>

