<template>
    <section  class="about" id="about">
        <div class="wrapper" >
            <div class="title-wrapper">
                <h1>About</h1>
                <div class="line-1"></div>
            </div>
            <div class="box-wrapper">
                <div class="content-wrapper">
                    <p>As a <span class="colored-text">DevOps</span> and <span class="colored-text">Data engineer</span>,
                        I enjoy creating solutions that are both technically sound and practical
                        for real-world business needs. I am passionate about optimizing processes and finding ways to
                        make data
                        work for my clients, whether that means building a <span class="colored-text">scalable data pipeline</span>,
                        creating a <span class="colored-text">cloud-based architecture</span>,
                        or developing a <span class="colored-text">custom analytics dashboard</span>. I believe that
                        effective data engineering and DevOps practices can
                        transform businesses and help them unlock the full potential of their data, and I am excited to
                        be a part of that
                        transformation.</p>
                    <div>
                        <h2>Technical Skills</h2>
                        <SkillViewer/>
                    </div>

                </div>


                <div class="image-wrapper">
                    <img src="@/public/portrait.jpg" alt="William Burillon">
                </div>
            </div>
        </div>

    </section>
    <div>
        <Icon name="ic:baseline-arrow-forward-ios"/>
    </div>
</template>

<script>
export default {
    name: "About",
    data(){
        return {
            slides: 5,
            active: 1
        }

    },
    methods : {
        onScroll(){
            const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
            const about = document.getElementById('about')
            const aboutPosition = about.offsetTop
            if (currentScrollPosition+300   >aboutPosition)
            {
                document.getElementsByClassName("title-wrapper")[0].style.animationPlayState = "running";
                document.getElementsByClassName("content-wrapper")[0].style.animationPlayState = "running";
                document.getElementsByClassName("image-wrapper")[0].style.animationPlayState = "running";
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

<style scoped lang="less">



/*Wrappers*/


.wrapper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 20%;
    margin-top: 7vh;
    width: 60%;
}


.title-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 17px;
    animation-play-state: paused;
    animation-duration: 0.7s;
    animation-name: animate-fade;

    animation-fill-mode: backwards;
    animation-timing-function: ease-in-out;

}

.box-wrapper {

    display: grid;
    grid-gap: 30px;


}


.content-wrapper {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    animation-play-state: paused;
    animation-duration: 0.6s;
    animation-name: animate-fade;
    animation-delay: 0.1s;
    animation-fill-mode: backwards;
    animation-timing-function: ease-in-out;


}


.image-wrapper {
    position: relative;
    grid-column: 2;
    grid-row: 1/2;
    animation-play-state: paused;
    animation-duration: 0.4s;
    animation-name: animate-fade;
    animation-delay: 0.3s;
    animation-fill-mode: backwards;
}

.image-wrapper:hover::before {
    transform: translate(3px, 3px);
    box-shadow: inset 1px 1px 7px #64ffda,
    1px 1px 7px #64ffda;
    transition: box-shadow 0.2s ease;
}


.image-wrapper::before {
    content: "";
    position: absolute;
    width: 438px;
    height: 438px;
    border-radius: 10px;
    border: 1px solid #64ffda;
    top: 15px;
    left: 15px;
    z-index: -1;
    transition: transform ease-out 0.2s;

}



h1 {
    font-size: 2.5em;
}


h2{
    font-size: 27px;
    color : #e6f1ff;
}


img {
    width: 438px;
    height: 438px;
    border-radius: 10px;


}

</style>