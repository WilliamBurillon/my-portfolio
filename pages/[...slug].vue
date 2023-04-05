<template>
    <main class="article-wrapper">
        <NavBar/>

        <div class="article">
            <ContentDoc v-slot="{ doc }" >
              <div class="article-header">
                    <h1>{{ doc.title }}</h1>
                    <span class="description">{{ doc.description }}</span>
                    <img class="img-wrapper" :src="doc.image" >

                </div>
               <ContentDoc class="article-content" />
            </ContentDoc>
        </div>
    </main>
</template>

<script>
export default {
    name: "[...slug].vue",
}
</script>

<style     >

.article-wrapper{
  display: flex;
  justify-content: center;

}

.article-content > p  {
  color: #b1bde3;
}

@media screen and (max-width: 1024px) {
  /* Insérez vos propriétés CSS ici, avec vos sélecteurs*/
  .article-wrapper .article {
    max-width: 55%;
  }
  .article-header h1 {
    font-size: 8vw;
  }
  .article-header h2 {
    font-size: 5vw;
  }

}


@media screen and (max-width: 768px) {
  /* Insérez vos propriétés CSS ici, avec vos sélecteurs*/
  .article-wrapper .article {
    max-width: 60%;
  }

}


@media screen and (max-width: 425px) {
  /* Insérez vos propriétés CSS ici, avec vos sélecteurs*/
  .article-wrapper .article {
    max-width: 75%;
  }

}


.article{
    position: absolute;
    top: 15%;

    max-width:50%;


    overflow-wrap: break-word;
    padding-bottom: 150px;
}

.article-header{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.article-content {
  margin-top: 50px;
}


.description {
    font-size: 1.5em;
    margin-bottom: 40px;
    font-family: 'Source Sans Pro', sans-serif;
    color: #8892b0;
}

.img-wrapper {

    max-width: 75%;
    object-fit: cover;
    border-radius: 7px;


}
h1 {
    font-size: 3.5em;
    margin-bottom: 40px;
  font-family: 'Rubik', sans-serif;

  color: #e6f1ff;
}



h2 {
    font-size: 2em;
    margin-top: 50px;
    margin-bottom:  50px;
    font-family: 'Source Sans Pro', sans-serif;
    color: #8892b0;
}

h3 {
  font-size: 1.5em;
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: 'Source Sans Pro', sans-serif;
  color: #8892b0;
}

p {
  margin-bottom: 8px;
}


a {
  text-decoration: none;
  color: #e6f1ff;
}


pre {

  background: #060f1c;
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow: scroll;
  border-radius: 0.5rem;
  padding: 35px;
}

pre code {
  font-size: 1rem;
  line-height: 1.5;
}

p code {
  color: #64ffda;
  background: #060f1c;
  font-size: 15px;
  line-height: 1.5;
  border-radius: 4px ;
  padding: 3px;
  margin: 2px;
}

p img {
  max-width: 100%;
  object-fit: cover;
  border-radius: 7px;
}

.article-content ul li {
  margin-bottom: 8px;
  font-family: 'Source Sans Pro', sans-serif;
  color: #b1bde3;
  font-weight: 300;
  margin-left: 25px;
}

.article-content ol li {
  margin-bottom: 8px;
  font-family: 'Source Sans Pro', sans-serif;
  color: #b1bde3;
  font-weight: 300;
  margin-left: 25px;
}

.article-content ul li a {
  color: #64ffda;
  font-weight: 500;
}

ul li code{
  color: #64ffda;
  background: #060f1c;
  font-size: 15px;
  line-height: 1.5;
  border-radius: 4px ;
  padding: 3px;
  margin: 2px;
}

p strong{
  margin-top: 200px;
}

p a {
  color: #64ffda;
  font-weight: 500;
}

</style    >