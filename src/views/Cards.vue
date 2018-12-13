<template lang="html">
  <section id="cards">
    <v-container> <h1>Catégories</h1>
              <div class="header">
                <div>Nom</div>
                <div>Quantité</div>
                <div>Prix</div>
              </div>
      <div v-for="(article, index) in $store.state.basket" v-bind:key="article.id">
        <ApolloQuery
          :query="require('@/graphql/GetArticle.gql')"
          :variables="{ uuid: article.id, amount: article.amount}"
        >
          <template slot-scope="{ result: { loading, error, data } }">
            <!-- Loading -->
            <div v-if="loading" class="loading apollo">Loading...</div>

            <!-- Error -->
            <div v-else-if="error" class="error apollo">An error occured</div>

            <div v-else-if="!data" class="no-result apollo">No result :(</div>

            <!-- Result -->
              <div v-else class="item">
            {{ addprice(data.article.id, data.article.price) }}
                <div>{{ data.article.name }} </div>
                <div class="del">
                  <p v-if="data.article.amount == -1">Rupture de Stock</p>
                  <p v-else>{{ $store.state.basket[index].amount }}</p>
                <button v-on:click="removearticle(data.article.id)">Supprimer</button>
                </div>
                <div>
                  {{ $store.state.basket[index].amount * data.article.price }} €
                </div>
              </div>

          </template>
        </ApolloQuery>
      </div>
      <div id="more">
        <div id="estimate">
          <h3>Estimation des frais de port</h3>
          <p>Entrez une destination</p>
          <label for="country">Pays</label>
          <input name="country" v-model="estimate.country" placeholder="Pays">
          <label for="region">Region</label>
          <input name="region" v-model="estimate.state" placeholder="Region">
          <label for="zipcode">Code Postal</label>
          <input v-model="estimate.zipcode" placeholder="edit me">
          <button v-on:click="estim()">Estimer</button>
        </div>
        <div id="reduction">
          <h3>Coupon de reduction</h3>
          <p>Entrez un coupon de reduction</p>
          <input v-model="reduction">
          <button v-on:click="reduct()">Appliquer</button>
        </div>
        <div id="total">
          <h3>Total</h3>
          <div>
            <p>Articles</p>
            <p>230€</p>
          </div>
          <div>
            <p>Coupon</p>
            <p>100€</p>
          </div>
          <div>
            <p>Total</p>
            <p>20$</p>
          </div>
        </div>
      </div>
      <div id="buy"><router-link to="/step1">Passer la commande</router-link></div>
    </v-container>
  </section>
</template>

<script lang="js">
import { mapActions } from 'vuex'
  export default  {
    name: 'home-page',
    props: [],
    mounted() {

    },
    data() {
      return {
        estimate: {
          country: "",
          state: "",
          zipcode: ""
        },
        prices: []
      }
    },
    methods: {
      ...mapActions([
            'removearticle'
        ]),
      addprice(uuid, price) {
        this.prices.push({uuid, price});
      },
      estim() {
      },
      reduct() {
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="less">
#cards {
  .header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  #more {
    display: flex;
    flex-direction: row;
    #estimate {
      display: flex;
      flex-direction: column;
    }

    #reduction {
      display: flex;
      flex-direction: column;
    }

    #total {
      display: flex;
      flex-direction: column;
    }
  }

  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3vh;

    p {
      margin: 0;
      padding-right: 2em;
    }

    .del {
      display: flex;
      flex-direction: row;

      button {
        background-color: gold;
      }
    }
  }

  #buy {
    display: flex;
    flex-direction: row;
    justify-content: center;
    a {
      background-color: gold;
    }
  }
}
</style>
