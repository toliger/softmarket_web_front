<template lang="html">
  <section id="home-page">
    <v-container> <h1>Catégories</h1>
      <ul>
        <li v-for="c in categories" v-bind:key="c.name">
          <p><span class="cname">{{c.name}}</span>  {{c.description}}</p>
        </li>
      </ul>
    </v-container>
  </section>
</template>

<script lang="js">
import GETCATEGORIES from "@/graphql/GetCategories.gql";
  export default  {
    name: 'home-page',
    props: [],
    mounted() {

    },
    data() {
      return {
        categories: []
      }
    },
    apollo: {
      categories: GETCATEGORIES
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
