<template>
  <section>
    <v-container>
      <h1>Shop</h1>
      {{  $route.params.id }}
    <main class="container-fluid row">
      <section id="filter" class="col-3">
        <h2>Shop By</h2>
        <div id="categories">
          <h3>CATEGORIES</h3>
            <ApolloQuery
              :query="require('@/graphql/GetSubCategories.gql')"
              :variables="{ categorie: $route.params.id }"
            >
              <template slot-scope="{ result: { loading, error, data } }">
                <!-- Loading -->
                <div v-if="loading" class="loading apollo">Loading...</div>

                <!-- Error -->
                <div v-else-if="error" class="error apollo">An error occured</div>

                <!-- Result -->
          <ul v-else-if="data">
            <li v-for="cat in data.sub_categories" v-bind:key="cat.name">
              <router-link :to="{path: `/shop/${$route.params.id}/${cat.name}`}">{{cat.name}}</router-link>

            </li>
          </ul>

                <!-- No result -->
                <div v-else class="no-result apollo">No result :(</div>
              </template>
            </ApolloQuery>
        </div>
        <div id="price">
          <h3>PRICE</h3>
          <b>€ 10</b>
          <input
            id="ex2"
            type="text"
            class="span2"
            value=""
            data-slider-min="10"
            data-slider-max="1000"
            data-slider-step="5"
            data-slider-value="[250,450]"
          />
          <b>€ 1000</b>
        </div>
        <div id="color"><h3>COLOR</h3></div>
        <div id="brand"><h3>BRAND</h3></div>
      </section>
      <section id="items" class="col-9">
        <img src="@/assets/img/article-banner.png" />
        <div v-if="$route.params.subid">
          <ApolloQuery
              :query="require('@/graphql/GetArticles.gql')"
              :variables="{ categorie: $route.params.id, subCategorie: $route.params.subid }"
            >
              <template slot-scope="{ result: { loading, error, data } }">
                <!-- Loading -->
                <div v-if="loading" class="loading apollo">Loading...</div>

                <!-- Error -->
                <div v-else-if="error" class="error apollo">An error occured</div>

                <!-- Result -->
                <v-container v-else-if="data">
                  <div v-for="article in data.articles" v-bind:key="article.name" class="card">
                    <img class="img" src="@/assets/img/article.png">
                    <h3>{{article.name}}</h3>
                    <p>{{article.description}}</p>
                    <p>{{article.price}} €</p>
                    <button v-on:click="addarticle(article.id)">Acheter</button>
                  </div>
                </v-container>

                <!-- No result -->
                <div v-else class="no-result apollo">No result :(</div>
              </template>
            </ApolloQuery>
          </div>
        </section>
      </main>
    </v-container>
  </section>
</template>

<script lang="js">
import { mapActions } from 'vuex'
  export default  {
    name: 'shop',
    props: [],
    mounted() {

    },
    data() {
      return {
      }
    },
    methods: {
      ...mapActions([
            'addarticle'
        ])

    },
    computed: {

    }
}
</script>

<style scoped lang="less">
.card {
  display: flex;
  flex-direction: column;
  background-color: red;
  float: left;
  width: 25%;
  height: 30vh;
  margin-right: 5%;
  justify-content: space-between;

  img {
    height: 50%;
  }

  p {
    padding: 0 1vw 0 1vw;
  }

  button {
    background-color: gold;
  }

  h3 {
    text-align: center;
    font-size: 1.1em;
  }
}

.card:hover {
  transform: scale(1.2);
  animation: 2s transform;
}
</style>
