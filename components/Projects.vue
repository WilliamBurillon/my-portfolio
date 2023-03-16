<template>
    <section class="project-main" id="works">
        <div class="wrapper">
            <div class="title-wrapper">
                <h1>Works</h1>
                <div class="line-1"></div>
            </div>
            <div class="project-wrapper">
                <div class="project" v-for="project in $options.projects">
                    <img :src="project.image" alt="project image">
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
                            <nuxt-link :to="project.article" class="project-article">
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
    projects : [
        {
            title : "Install multiple VM with Vagrant",
            description: "A Vagrant project in order to install a couple of Virtual Machine an server. It can be useful in" +
            "order to setup a dev environment or a test environment",
            skills : ["Vagrant","DevOps","Sysadmin"],
            image : "projects/vagrant.png",
            article:"https://www.google.com"
        },
        {
            title : "Ansible / Docker Swarm Use case",
            description: "An Ansible project to initialise a Docker Swarm cluster with a couple of nodes. This project  "+
            "can be used to deploy services to this cluster using Ansible",
            skills : ["Ansible","Docker Swarm","DevOps","Sysadmin","Python","Bash"],
            image : "projects/ansible-docker-swarm.png",
            article:"https://www.google.com"
        },
        {
            title : "Deploy Nuxt app with Github Actions" ,
            description: "This portfolio is bundled with Nuxt and deployed with Github Actions. This project is a " +
                "use case of how to deploy a Nuxt app with Github Actions and serve it with Nginx and Docker",
            skills : ["Nuxt.js","Github Action","Docker","Nginx","Bash","DevOps","Sysadmin"],
            image : "projects/nuxt-github-nginx.png",
            article:"/nuxt-github"
        },
        {
            title : "Data analysis on Tiktok Videos",
            description: "A project to analyse Tiktok videos in order to find an correlation between the number of views and video" +
                " features. It uses the Tiktok API to get the videos and then analyse them" +
                "using Python",
            skills : ["Python","Pandas","API Rest"],
            image : "projects/tiktok-python.png",
            article:"/articles/test"
        }
    ],
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
    mounted () {
        window.addEventListener('scroll', this.onScroll)

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
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 20%;
    margin-top: 7vh;
    width: 60%;
}



.project{
    animation-play-state: paused;
    animation-duration: 0.4s;
    animation-name: animate-fade;
    animation-fill-mode: backwards;
    /*animation-delay: .2s;*/
}



/*le premier*/
.project:nth-child(odd){
    display: flex;
    flex-direction: row-reverse;
    margin-top: 30px;
    margin-bottom: 100px;
    .project-content-wrapper {
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
    width: 55%;
    height: 300px ;
    object-fit: cover;
    border-radius: 7px;


}


.project-description{
    border-radius: 5px;
    background : #112240;
    padding: 25px;

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

