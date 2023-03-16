<template>
    <main>
        <NavBar/>

        <div class="content">
            <ContentDoc v-slot="{ doc }" >
                <div class="article-header">
                    <h1>{{ doc.title }}</h1>
                    <img :src="doc.image" alt="project image">
                    <p>{{ doc.description }}</p>
                </div>
               <ContentDoc />
            </ContentDoc>
        </div>
    </main>
</template>

<script>
export default {
    name: "[...slug].vue",
}
</script>

<style scoped    >
.content{
    position: absolute;
    top: 15%;

    max-width:50%;


    overflow-wrap: break-word;
}

.article-header{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

main{
    display: flex;
    justify-content: center;
}

img {

    max-width: 100%;
    object-fit: cover;
    border-radius: 7px;


}
h1 {
    font-size: 3.5em;
    margin-bottom: 40px;
}
</style>