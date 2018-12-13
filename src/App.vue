<template>
  <v-app>
      <nav class="container-fluid">
      <header class="row">
        <div id="contact" class="col-3 row justify-content-between">
          <p>Shop by phone (01) 36 30</p>
          <a>Live chat with Us</a>
        </div>
        <div id="account" class="col-3 offset-6 row justify-content-end">
          <router-link to="/dashboard" v-if="isLogged">My account</router-link>
          <div v-else> <NavLinks /> </div>
          <router-link to="/cards">My cards <p
            v-if="this.$store.state.basket.length">({{this.$store.state.basket.length}})</p></router-link>
        </div>
      </header>
      <div id="menu" class="navbar navbar-expand-lg navbar-light">
        <router-link class="navbar-brand" to="/">IMG</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/shop/Office"
                >OFFICE</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop/Multimedia"
                >MULTIMEDIA</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop/Design"
                >DESIGN</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop/Developer"
                >DEVELOPER</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop/Utilities"
                >UTILITIES</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop/Games"
                >GAMES</router-link
              >
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavLinks from "@/components/NavLinks";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    NavLinks
  },
  computed: {
    ...mapGetters({
      isLogged: "auth/isLoggedIn",
      user: "auth/user"
    })
  },
  data() {
    return {
      //
    };
  }
};
</script>


<style scoped lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  nav {
    height: 15vh;
    border-bottom: gray solid 1px;
    header {
      #contact {
      }

      #account {
      }
    }

    #menu {
      img {
      }

      .item {
        animation: background-color 0.25s;
      }

      .item:hover {
        background-color: grey;
        animation: background-color 0.25s;
      }
    }
  }
}
</style>
