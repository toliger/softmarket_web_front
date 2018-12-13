<template lang="html">
  <section id="cards">
    <v-container> <h1>Catégories</h1>
      <table>
        <tr>
          <th>Nom du produit</th>
          <th>Quantité</th>
          <th>Prix</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
        <tr v-for="a in basket.articles" v-bind:key="a.name">
          <td>{{ a.name }}</td>
          <td>{{ a.amount }}</td>
          <td>{{ a.price }} €</td>
          <td>{{ a.price * a.amount }} €</td>
          <td><button v-on:click="supprimer(a.id, a.name)">Supprimer</button></td>
        </tr>
      </table>
      <div id="more">
        <div id="estimate" class="el">
          <h3>Estimation des frais de port</h3>
          <p v-if="fdp">Les frais de ports d'élèvent à {{ fdp }}
          <p>Entrez une destination</p>
          <label for="country">Pays</label>
          <input name="country" v-model="adress.country" placeholder="Pays">
          <label for="region">Region</label>
          <input name="region" v-model="adress.state" placeholder="Region">
          <label for="zipcode">Code Postal</label>
          <input v-model="adress.zipcode" placeholder="edit me">
          <button v-on:click="estim()">Estimer</button>
        </div>
        <div id="reduction" class="el">
          <h3>Coupon de reduction</h3>
          <p>Entrez un coupon de reduction</p>
          <input v-model="reduction" placeholder="Entrez le nom du coupon">
          <button v-on:click="addCoupon()">Appliquer</button>
        </div>
        <div id="total" class="el">
          <h3>Total</h3>
          <div>
            <p>Articles</p>
            <p>{{ basket.articles_price }} €</p>
          </div>
          <div>
            <p>Coupons</p>
            <ul>
            <li v-for="c in basket.coupons" v-bind:key="c.name">
              {{ c.price  }}<button v-on:click="supprimerCoupon(c.name)">-</button>
            </li>
            </ul>
            <label>Total des coupons</label>
            <p>- {{ basket.coupons_reduc }} €</p>
          </div>
          <div>
            <p>Total</p>
            <p>{{ basket.total }} €</p>
          </div>
      <div id="buy"><router-link to="/step1">Passer la commande</router-link></div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script lang="js">
import { mapActions } from 'vuex'
import GETBASKET from "@/graphql/GetBasket.gql";
import RMARTICLE from "@/graphql/RmArticle.gql";
import SETADRESS from "@/graphql/SetAdress.gql";
import ADDCOUPON from "@/graphql/AddCoupon.gql";
import RMCOUPON from "@/graphql/RmCoupon.gql";
import ESTIMATE from "@/graphql/Estimate.gql";
  export default  {
    name: 'home-page',
    props: [],
    mounted() {
      this.$apollo.queries.basket.refetch()
    },
    data() {
      return {
        adress: {
          country: "",
          state: "",
          zipcode: "",
          ville: "",
          num: "",
          rue: ""
        },
        fdp: null,
        reduction: "",
        prices: [],
        basket: {}
      }
    },
    apollo: {
      basket: GETBASKET
    },
    methods: {
      ...mapActions([
            'removearticle'
        ]),
      addprice(uuid, price) {
        this.prices.push({uuid, price});
      },
      async supprimer(uuid, name) {
        this.removearticle(uuid);
        await this.$apollo.mutate({
        // Query
        mutation: RMARTICLE,
        // Parameters
        variables: {
          name: name,
        },
        });
        this.$apollo.queries.basket.refetch()
      },
      async addCoupon() {
        await this.$apollo.mutate({
        // Query
        mutation: ADDCOUPON,
        // Parameters
        variables: {
          name: this.reduction,
        },
        });
        this.$apollo.queries.basket.refetch()
      },
      async supprimerCoupon(name) {
        await this.$apollo.mutate({
        // Query
        mutation: RMCOUPON,
        // Parameters
        variables: {
          name: name,
        },
        });
        this.$apollo.queries.basket.refetch()
      },
      async estim() {
        this.fdp = (await this.$apollo.query({
        // Query
        query: ESTIMATE,
        // Parameters
          variables: {
            country: this.adress.country,
            state: this.adress.state
          }
        })).data.estimate;

        this.$apollo.queries.basket.refetch()
      },
      async reduct() {
         await this.$apollo.mutate({
        // Query
        mutation: ADDCOUPON,
        // Parameters
        variables: {
          name: this.reduction,
        },
        });

        this.$apollo.queries.basket.refetch()
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="less">
#cards {
  table {
    width: 100%;
  }
  .header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  #more {
    display: flex;
    flex-direction: row;
    .el {
      margin: 5vh 3vw 0 3vw;
      border: 1px solid gray;
      flex: 1;

      h3 {
        background-color: gray;
      }

      p {
        padding: 1vh;
      }
    }
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
