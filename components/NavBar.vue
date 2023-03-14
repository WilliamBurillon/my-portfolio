<template>
    <header class="navbar" :class="{ 'navbar--hidden': !showNavbar, 'navbar--top' : navBarOnTop }">
        <a href="/" @click="deactivateLink"><img src="@/public/logo.svg" class="logo"></a>
        <nav>
            <ul>
                <li v-for="link in links.slice(1)" :key="link.name" >
                        <NuxtLink :to="{ hash: link.hash }" :class="{active: link.active}" @click="activeLink">{{link.name}}</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>


</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            showNavbar: true,
            lastScrollPosition: 0,
            navBarOnTop: true,
            links: [
                {name: "Home", hash: "#home",active: false},
                {name: "About", hash: "#about",active: false},
                {name: "Works", hash: "#works",   active: false},
                {name: "Contact", hash: "#contact",   active: false},
            ]
        }
    },
    methods: {
        activeLink(e) {
            this.links.forEach(link => link.active = false);
            const href = e.target.getAttribute('href').slice(1);
            console.log(href);
            this.links.map(link => link.hash === href ? link.active = true : link.active = false);
        },
        deactivateLink(e) {
            this.links.forEach(link => link.active = false);
        },
        onScroll () {
            const currentScrollPosition = window.scrollY || document.documentElement.scrollTop

            if (currentScrollPosition < 0) {
                return
            }
            // Stop executing this function if the difference between
            // current scroll position and last scroll position is less than some offset
            if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                return
            }
            this.showNavbar = currentScrollPosition < this.lastScrollPosition

            this.lastScrollPosition = currentScrollPosition

        },
        navOnTop(){
            this.navBarOnTop = window.scrollY === 0;
        }
    },
    mounted () {
        window.addEventListener('scroll', this.onScroll)
        window.addEventListener('scroll',this.navOnTop)
    },
    beforeUnmount () {
        window.removeEventListener('scroll', this.onScroll)
        window.removeEventListener('scroll',this.navOnTop)
    }





}
</script>

<style scoped>


.logo {
    width: 42px;
    height: 42px;
    margin-top: 5px;
}

.logo:hover {
    cursor: pointer;
    filter: drop-shadow(0px 0px 3px #64ffda);
}

.navbar {
    z-index: 10;
    padding: 0px 50px;
    opacity: 95%;
    position: fixed;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 15px rgba(6, 16, 30, 0.71);
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
    /* The home need to take all the screen*/
    height: 7vh;
    width: 100%;
    font-family: "SF Mono Light";
}

.navbar--top {
    height: 10vh;
    box-shadow: none;
    opacity: 100%;
}

.navbar.navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
}


li  {

    list-style: none;
    margin-right: 2vw;
    display: inline-block;
    color: #ffffff;
}

a {
    text-decoration: none;
    color: #e6f1ff;

}

a:hover,a:active  {
    color: #64ffda;

}
a.active {
    font-weight: bold;
    color: #64ffda;
}
img {

}

</style>