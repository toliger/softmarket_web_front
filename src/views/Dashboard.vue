<template lang="html">
  <section id="cards">
    <v-container> <h1>Mon compte</h1>
      <h2>Mes dernière commandes</h2>
      <table>
        <tr>
          <th>Date<th>
              <th>Contenu</th>
        </tr>
        <tr v-for="c in commandes" v-bind:key="c.id">
          <td>{{ c.date }}</td>
          <td>{{ c.articles }}</td>
        </tr>
      </table>
    </v-container>
  </section>
</template>

<script lang="js">
import GETCOMMANDES from "@/graphql/GetCommandes.gql";
  export default  {
    name: 'home-page',
    props: [],
    mounted() {
      this.$apollo.queries.basket.refetch()
    },
    data() {
      return {
        commandes: [],
      }
    },
    apollo: {
      commandes: GETCOMMANDES
    },
    methods: {
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
