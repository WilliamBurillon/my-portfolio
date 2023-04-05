<template>
    <section class="project-main" id="works">
        <div class="wrapper">
            <div class="title-wrapper">
                <h1 class="h1-class">Works</h1>
                <div class="line-1"></div>
            </div>
            <div class="project-wrapper">
                <div class="project" v-for="project in articles">
                    <img :src="project.image_project_list" alt="project image">
                    <div class="project-content-wrapper">
                        <div class="project-title">
                            <h2>{{project.title}}</h2>
                        </div>
                        <div class="project-description">
                            <p>{{project.description}}</p>
                        </div>
                        <div class="project-skills">
                            <div class="skill" v-for="skill in project.skills">
                                <p>{{skill}}</p>
                            </div>
                        </div>

                        <div class="project-article">
                            <nuxt-link :to="project.article" class="project-article a-class">
                                <p>Read more</p>
                                <Icon size="48px" name="material-symbols:arrow-right-rounded"/>
                            </nuxt-link>
                        </div>
                    </div>

                </div>


            </div>
        </div>

    </section>

</template>

<script>
export default {
    name: "Project",
    data(){
        return {
            articles : []
        }
    },
    methods : {
        onScroll(){
            const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
            const projectsSection = document.getElementById('works')
            const projectsPosition = projectsSection.offsetTop

            let projectsListDiv = document.getElementsByClassName("project")
            projectsListDiv = Array.from(projectsListDiv)
            let firstProjectDiv = projectsListDiv.shift()


            if (currentScrollPosition + 300   >projectsPosition)
            {
                document.getElementsByClassName("title-wrapper")[1].style.animationPlayState = "running";

            }

            if (currentScrollPosition + 440   > firstProjectDiv.getBoundingClientRect().top + window.scrollY)
            {
                firstProjectDiv.style.animationPlayState = "running";

            }

            projectsListDiv.map((projectDiv) => {
                setTimeout(() => {
                    if (currentScrollPosition + 800 > projectDiv.getBoundingClientRect().top + window.scrollY)
                    {
                        projectDiv.style.animationPlayState = "running";
                    }
                }, 200)

            })

        }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)

    },
  async beforeCreate() {
    await queryContent('articles').find().then((response) => {
      this.articles = response
    })
  },
  beforeUnmount () {
        window.removeEventListener('scroll', this.onScroll)

    }

}
</script>

<style scoped lang="scss">


.title-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 17px;
    animation-play-state: paused;
    animation-duration: 0.3s;
    animation-name: animate-fade;
    animation-fill-mode: backwards;

}

.wrapper {
  padding: 18% 15%;
}



@media screen and (max-width: 1440px) {
  /* Insérez vos propriétés CSS ici, avec vos sélecteurs*/
  .wrapper {
    padding:18% 10%;
  }
  img.responsive{
    width: 250px;
    height: 250px;
    border-radius: 10px;
  }




  /* img {
     max-width: 400px;
     width: 100%;
     height: auto;
   }
   .image-wrapper::before {
     max-width: 400px;
     height: auto;
   }*/
}

@media screen and (max-width: 1024px) {
  /* Insérez vos propriétés CSS ici, avec vos sélecteurs*/
  .wrapper {
    padding:18% 7%;
  }
}

@media screen and (max-width: 768px) {
  /* Insérez vos propriétés CSS ici, avec vos sélecteurs*/
  .wrapper {
    padding:90px 100px;

  }
}


@media screen and (max-width: 425px) {
  /* Insérez vos propriétés CSS ici, avec vos sélecteurs*/
  .wrapper {
    padding: 60px 50px;
  }
    img{
      display: none;
    }

  .project-wrapper .project:nth-child(even) .project-content-wrapper{
    width: 100%;
    text-align: left;
    margin-left : 0;
  }

  .project-wrapper .project:nth-child(odd) .project-content-wrapper{
    width: 100%;
    text-align: right;
    margin-right : 0;
  }



  .project-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .project-wrapper .project:nth-child(odd){
    margin-bottom: 0;
  }
  .project-wrapper .project:nth-child(even){
    margin-bottom: 0;
  }
}


.project{
    animation-play-state: paused;
    animation-duration: 0.4s;
    animation-name: animate-fade;
    animation-fill-mode: backwards;
  align-items: end;
}



/*le premier*/
.project:nth-child(odd){
    display: flex;
    flex-direction: row-reverse;
    margin-top: 30px;
    margin-bottom: 100px;
    .project-content-wrapper {
        width: 70%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-right : -50px;
        z-index: 1;
    }

    .project-skills{
        display: flex;
        flex-direction: row;
        align-self: flex-start;
    }

    .project-article{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

    }




}


/* le deuxieme */
.project:nth-child(even){
    display: flex;
    flex-direction: row;
    margin-bottom: 100px;

    .project-content-wrapper {
        width: 70%;
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left : -50px;
        z-index: 1;
    }

    .project-skills{
        display: flex;
        flex-direction: row;
        align-self: flex-end;
    }

    .project-article{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

    }

}



img {
    width: 40%;
    height: 100% ;
    object-fit: cover;
    border-radius: 7px;
  align-items: center;


}


.project-description{
    border-radius: 5px;
    background : #112240;
    padding: 25px;
  margin-bottom: 10px;

}


.skill + .skill {
    margin-left: 6px;
}

.skill  p {
    font-size: 0.8em;
    font-family: "SF Mono Light";;
    color: #64ffda;
}


.project-article p{
    font-weight: bold;
    color: #64ffda;
}




h1 {
    font-size: 2.5em;
}

h2 {
    font-size: 1.5em;
}




</style>

