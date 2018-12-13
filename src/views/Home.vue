<template lang="html">
  <section id="home-page">
    <v-container> <h1>Catégories</h1>
        <ApolloQuery
          :query="require('@/graphql/GetCategories.gql')"
        >
          <template slot-scope="{ result: { loading, error, data } }">
            <!-- Loading -->
            <div v-if="loading" class="loading apollo">Loading...</div>

            <!-- Error -->
            <div v-else-if="error" class="error apollo">An error occured</div>

            <!-- Result -->
      <ul v-else-if="data">
        <li v-for="c in data.categories" v-bind:key="c.name">
          <router-link :to="{path: '/shop/' + c.name}"><span class="cname">{{c.name}}</span>
            {{c.description}}</router-link>
        </li>
      </ul>

            <!-- No result -->
            <div v-else class="no-result apollo">No result :(</div>
          </template>
        </ApolloQuery>
    </v-container>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'home-page',
    props: [],
    mounted() {

    },
    data() {
      return {
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="less">
#home-page {
  .cname {
    font-size: 2em;
  }
}
</style>
