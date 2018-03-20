<template>
  <div class="recipes">
    <h1>Les recettes Light and Fun</h1>
    <ul id="recipes">
      <li v-for="recipe in recipes" v-bind:key="recipe.title" class="top">
        <div class="recipe-lign">
          <ul>
            <li class="title">{{recipe.title}}</li>
            <li>
              <button v-bind:id="recipe.id" type="button" v-on:click="video">Vidéo</button>
              <button v-bind:id="recipe.id" type="button" v-on:click="fiche">Fiche recette</button>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'RecipesList',
  data() {
    return {
      recipes: [],
    };
  },
  // Fetches recipes
  created() {
    const url = `${process.env.API_URL}api/recipes`;
    axios.get(url)
      .then((response) => {
        this.recipes = response.data.recipes;
        // this.fillData();
      })
      .catch((e) => { this.errors.push(e); });
  },
  methods: {
    video(event) {
      const url = `${process.env.API_URL}api/sendvideo`;
      axios.post(url, {
        recipe_id: event.target.id,
        messengerid: this.$route.params.messengerid,
      })
        .then((response) => {
          console.log(response); // eslint-disable-line no-console
          window.location = `${process.env.BOT_URL}`;
        })
        .catch((error) => {
          console.log(error); // eslint-disable-line no-console
        });
    },
    fiche(event) {
      const url = `${process.env.API_URL}api/sendrecipecard`;
      axios.post(url, {
        recipe_id: event.target.id,
        messengerid: this.$route.params.messengerid,
      })
        .then((response) => {
          console.log(response); // eslint-disable-line no-console
          window.location = `${process.env.BOT_URL}`;
        })
        .catch((error) => {
          console.log(error); // eslint-disable-line no-console
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  margin-bottom: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li.top {
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}
li.title {
  font-size: 18px;
  margin-bottom: 10px;
}
button {
  background-color: #00BFD7;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  height: 35px;
  padding-left: 10px;
  padding-right: 10px;
}
a {
  color: #42b983;
}
li {
  font-size: 16px;
}
</style>
