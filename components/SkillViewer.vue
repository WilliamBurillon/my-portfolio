<template>
    <div class="skills-wrapper">

        <div class="skills-wiewer">
            <div class="header">

                    <Icon class="header-action" name="ic:baseline-arrow-back-ios" @click="moveTo(-1)"/>

                            <h3 class="h3-class"> {{$options.skills[skillActive].skillCategory}} </h3 >
                    <Icon class="header-action" name="ic:baseline-arrow-forward-ios" @click="moveTo(1)"/>
            </div>
            <div >
                <Transition
                    name="slide"
                    mode="out-in"
                >
                    <div class="skills" :is="skillActive" :key="skillActive">
                        <div v-for="skill in $options.skills[skillActive].skills" >
                            <Icon class="icon-skill" :name="skill.icon"/>
                        </div>

                    </div>
<!--                    <Icon v-for="skill in skills[skillActive].skills" :key="skill.name" :name="skill.icon"/>-->

                </Transition>

            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: "SkillViewer",
    skills : [
        {
            skillCategory: "Languages",
            skills: [
                {
                    name: "JavaScript",
                    icon: "akar-icons:javascript-fill"
                },
                {
                    name: "Python",
                    icon: "mdi:language-python"
                },
                {
                    name: "PHP",
                    icon: "akar-icons:php-fill"
                },
                {
                    name: "Bash",
                    icon: "simple-icons:gnubash"
                },
                {
                    name: "Go",
                    icon: "fa6-brands:golang"
                }
            ]
        },
        {

            skillCategory: "Database",
            skills: [
                {
                    name: "PostgreSql",
                    icon: "akar-icons:postgresql-fill"
                },
                {
                    name: "MongoDB",
                    icon: "bxl:mongodb"
                },
                {
                    name: "Redis",
                    icon: "cib:redis"
                },
                {
                    name: "Elasticsearch",
                    icon: "simple-icons:elasticsearch"
                }
            ]
        },
        {

            skillCategory: "Orchestration",
            skills: [
                {
                    name: "Docker / Docker Swarm ",
                    icon: "teenyicons:docker-outline"
                },
                {
                    name: "Kubernetes",
                    icon: "mdi:kubernetes"
                }
            ]
        },
        {

            skillCategory: "Monitoring / Alerting",
            skills: [
                {
                    name: "Kibana",
                    icon: "simple-icons:kibana"
                },
                {
                    name: "Prometheus",
                    icon: "simple-icons:prometheus"
                },
                {
                    name: "Grafana",
                    icon: "simple-icons:grafana"
                },
                {
                    name: "Graylog",
                    icon: "simple-icons:graylog"
                }
            ]
        },
        {

            skillCategory: "DevOps",
            skills: [
                {
                    name: "Ansible",
                    icon: "mdi:ansible"
                },
                {
                    name: "Vagrant",
                    icon: "simple-icons:vagrant"
                },
                {
                    name: "Nginx",
                    icon: "simple-icons:nginx"
                },
                {
                    name: "Gitlab CI",
                    icon: "file-icons:gitlab"
                }

            ]
        }
    ],
    data(){
        return {
            skillActive: 0
        }


    },
    methods: {
        moveTo(amount) {
            let skillsLength = this.$options.skills.length


            if ((this.skillActive + amount ) % skillsLength < 0) {
                this.skillActive = skillsLength - 1
            } else {
                this.skillActive = (this.skillActive + amount ) % skillsLength
            }


        }
    }
}
</script>

<style scoped lang="less">

.header-action:hover{
    cursor: pointer;
    filter: drop-shadow(0px 0px 4px #64ffda);

}


/*.icon-skill:hover + .icon-name{
    visibility: visible;
    cursor: pointer;
    filter: drop-shadow(0px 0px 3px #64ffda);
}

.icon-skill + .icon-name{
    visibility: hidden;
    width: 120px;
    background-color: red;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    !* Position the tooltip text - see examples below! *!
    top: 100%;
    left: 50%;
    margin-left: -60px;

}*/

.icon{
    color: #64ffda;
    height: 38px;
    width: 38px;
}

.skills-wrapper{
    height: 116px;
    margin-top: 50px;
}

.slide-enter-active,
.slide-leave-active {
    opacity: 0;
    transition: all .3s ease-in-out;
}

.slide-enter-from{
    opacity: 0;
    transform: translateX(-100px);
}

.slide-leave-to {
    opacity: 0;
    transform: translateX(100px);

}
.slide-leave-active {
    position: static;
}



.skills{
    margin-top: 40px;
    display: flex;
    justify-content: space-around;

    width: 100%;
}

.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}


</style>