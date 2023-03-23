<template>
    <section class="home" id="home">
        <div class="wrapper">
                <div class="text-wrapper">
                    <div class="typingEffectWrapper">
                        <h3 class="h3-class" v-bind:class="{'typingEffect' : show }">Hello there 👋, my name is </h3>
                    </div>
                    <h1 class="h1-class" >William Burillon.</h1>
                    <h2 class="h2-class">Data whisperer, code tamer, and humble problem solver.</h2>
                    <p>I am a DevOps engineer with some Data affinity. I love to create data projects and put them into production. </p>
                </div>
                <div class="button-wrapper">
                    <button>
                        <a class="a-class test" href="#about">About</a>
                    </button>
                </div>
        </div>
    </section>

</template>

<script>




export default {
    name: "Home",
    data(){
        return {
            show: true
        }

    },
    methods: {
        countDown() {
            this.show = false;
            setTimeout(() => {
                this.show = true;
            }, 10);

        }
    },
    mounted() {
        setInterval(() => {
            this.countDown();
        }, 4000);
    }
}
</script>

<style scoped>

/*Wrapper setting */

.wrapper {
    margin-top: 7vh;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    top: 29.5%;
    display: flex;
    flex-direction: column;
    gap: 60px;


}

.button-wrapper{
    grid-column: 1;
    grid-row: 2;
    animation-duration: 0.8s;
    animation-name: animate-fade;
    animation-delay: 0.4s;
    animation-fill-mode: backwards;

}

.text-wrapper {
    display: flex;
    flex-direction: column;
    animation-duration: 1s;
    animation-name: animate-fade;
    animation-delay: 0.2s;
    animation-fill-mode: backwards;
    gap: 20px;

}





/*Animation*/

.typingEffectWrapper{
    display: flex;
    align-items: center;
    justify-content: left;
    max-width: fit-content;
    max-height: fit-content;

}

.typingEffect {
    width: 0;
    overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
    border-right: 2px solid #64ffda; /* The cursor*/
    white-space: nowrap; /* Keeps the text on a single line */
    animation: typing 2s steps(30) forwards, blink 1s infinite ;


}

/* The typing animation */
@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

@keyframes blink {
    0%, 45% {
        border-color: transparent;
    }
    50%, 100% {
        border-color: #64ffda;
    }
}



</style>