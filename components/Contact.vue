<template>
    <section  class="contact" id="contact">
        <div class="wrapper" >
            <div class="title-wrapper">
                <div class="line-1" style="margin-right: 15px"></div>
                <h1 class="h1-class">Get in touch</h1>
                <div class="line-1"></div>
            </div>
            <div class="content">
                <h2 class="h2-class">
                    I'm currently looking for a new opportunity, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </h2>
                <div class="button-wrapper">
                    <button class="my-button">
                        <a class="a-class" href="mailto:william.burillon@gmail.com">Say Hello</a>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Contact",
    methods: {
        onScroll(){
            const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
            const about = document.getElementById('contact')
            const aboutPosition = about.offsetTop
            if (currentScrollPosition + 400    >aboutPosition)
            {
                document.getElementsByClassName("title-wrapper")[2].style.animationPlayState = "running";
                document.getElementsByClassName("content")[0].style.animationPlayState = "running";

                window.removeEventListener('scroll', this.onScroll)
            }


        }
    },
    mounted () {
        window.addEventListener('scroll', this.onScroll)

    },
    beforeUnmount () {
        window.removeEventListener('scroll', this.onScroll)

    }
}
</script>

<style scoped>


h1 {
    font-size: 2.5em;
}

h2 {
    font-size: 1.5em;
    text-align: center;
}

.button-wrapper{
  margin-top: 40px;
}







.wrapper {

  padding: 18% 15%;

}

@media screen and (max-width: 1440px) {
  .wrapper {
    padding: 20% 18%;
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    padding:90px 100px;

  }
}


@media screen and (max-width: 425px) {
  .wrapper {
    padding: 60px 50px;
  }
  h1{
    font-size: 8vw;
  }

  h2{
    font-size: 5vw;
  }

}



.title-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 17px;
    animation-play-state: paused;
    animation-duration: 1.2s;
    animation-name: animate-fade;
    animation-fill-mode: backwards;


}


.content {
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    animation-play-state: paused;
    animation-duration: 0.9s;
    animation-name: animate-fade;
    animation-fill-mode: backwards;
    animation-timing-function: ease;
}




</style>