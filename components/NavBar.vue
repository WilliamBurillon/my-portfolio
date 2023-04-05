<template>
    <header class="navbar" :class="{ 'navbar--hidden': !showNavbar, 'navbar--top' : navBarOnTop }">
        <a  href="/" @click="deactivateLink"><img src="@/public/logo.svg" class="logo a-class"></a>
      <div id="sidemenu">
        <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
          <span class="top"></span>
          <span class="mid"></span>
          <span class="bottom"></span>
        </button>

        <transition name="translateX">
          <div v-show="navOpen" class="overlay">
            <div class="blured-background">
            </div>
            <nav class="sidenave" >
              <ul  class="my-ul">
                <li class="my-li" v-for="link in links.slice(1)" :key="link.name" >
                  <NuxtLink :to="{ hash: link.hash }" :class="{active: link.active}" @click="activeLink">{{link.name}}</NuxtLink>
                </li>
              </ul>
            </nav>
          </div>

        </transition>
      </div>
        <nav class="classicnav">
            <ul>
                <li  v-for="link in links.slice(1)" :key="link.name" >
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
            navOpen: false,
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

            this.links.map(link => link.hash === href ? link.active = true : link.active = false);
            this.navOpen = false
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

<style scoped lang="scss">

#sidemenu {
    display: none;
    width: 42px;
    height: 42px;
    margin-top: 5px;
    color: #64ffda;
}

@media screen and (max-width: 440px) {
  #sidemenu {
        display: inline;
    }
  .classicnav {
        display: none;
    }

}
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
    height: 50px;
    width: 100%;
    font-family: "SF Mono Light";
}

.navbar--top {
    height: 70px;
    box-shadow: none;
    opacity: 100%;
}

.navbar.navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
}


li  {

    list-style: none;
    margin-right: 40px;
    display: inline-block;
    color: #ffffff;
}

a {
    text-decoration: none;
    font-family: SF Mono Light;
    color: #e6f1ff;

}

a:hover,a:active  {
    color: #64ffda;

}
a.active {
    font-weight: bold;
    color: #64ffda;
}


#sidemenu {
  .blured-background{
    width: 400px;
    background: #0a192f;
    opacity: 0.9;
    filter: blur(1px);
    /*filter: blur(4px);*/
    position: fixed;
    top:50px;
    left: 0;
    height: 100vh;
    z-index: 98;
  }

  .sidenave {

    width: 200px;
    background: #0a192f;
    position: fixed;
    top:45px;
    left: 50%;
    height: 100vh;

    padding: 100px 20px 20px;
    z-index: 99;

  }

  .my-ul{
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 10px;
    align-items: end;
  }



  .sidemenu {
  &__btn {


      margin-top: 20px;
       border: none;
       position: relative;
       z-index: 100;
       appearance: none;
       cursor: pointer;
       outline: none;

    span {
      display: inline;
      width: 20px;
      height: 2px;
     margin-left: 20px;
      background: #64ffda;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: all .4s ease;

      &.top {
         transform: translateY(-8px);
       }

      &.bottom {
         transform: translateY(8px);
       }
    }
    &.active{
      .top {
        transform: rotate(-45deg);
      }
      .mid{
        transform: translateX(-20px) rotate(360deg);
        opacity: 0;
      }
      .bottom {
        transform: rotate(45deg);
      }
    }

  }

  &__wrapper {
     padding-top: 50px;
   }

  &__list {
     padding-top: 50px;
     list-style:none;
     padding: 0;
     margin: 0;
   }

  &__item {
    a {
      text-decoration: none;
      line-height: 1.6em;
      font-size: 1.6em;
      padding: .5em;
      display: inline;
      color: white;
      transition: .4s ease;

      &:hover {
         background: lightgrey;
         color: dimgrey;
       }
    }
  }
  }
}

.translateX-enter{
  transform:translateX(-200px);
  opacity: 0;
}

.translateX-enter-active,.translateX-leave-active,.translateX-enter{
  transform-origin: top left 0;
  transition:.8s ease;
}

.translateX-leave-to{
  transform: translateX(200px);
  opacity: 0;
}



</style>