<template>
  <v-app>
      <nav class="container-fluid">
      <header class="row">
        <div id="contact" class="col-3 row justify-content-between">
          <p>Shop by phone (01) 36 30</p>
          <a>Live chat with Us</a>
        </div>
        <div id="account" class="col-3 offset-6 row justify-content-end">
          <div v-if="isLogged">
            <router-link to="/dashboard">My account</router-link>
            <v-btn flat @click="logout">Logout</v-btn>
          </div>
          <div v-else> <NavLinks /> </div>
          <router-link id="cards" to="/cards">My cards <p
            v-if="this.$store.state.basket.length">({{this.$store.state.basket.length}})</p></router-link>
        </div>
      </header>
      <div id="menu" class="navbar navbar-expand-lg navbar-light">
        <router-link class="navbar-brand" to="/"><img src="@/assets/img/title.png">
        </router-link>
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
    <footer>
      <div id="adds">
        <img src="@/assets/img/down.png">
        <img src="@/assets/img/block_math.png">
        <img src="@/assets/img/gift.png">
        <img src="@/assets/img/up.png">
      </div>
    <img src="@/assets/img/footer.png">
    <div id="sn">
      <img src="@/assets/img/fb.png"> <p>Facebook</p>
      <img src="@/assets/img/tw.png"> <p>Twitter</p>
      <img src="@/assets/img/yt.png"> <p>Youtube</p>
      <img src="@/assets/img/rs.png"> <p>RSS</p>
    </div>
    </footer>
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
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    }
  },
  data() {
    return {
      //
    };
  }
};
</script>


<style scoped lang="less">
#cards {
  padding: 5px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  nav {
    height: 15vh;
    border-bottom: gray solid 1px;
    header {
      #contact {
        margin: 5px;
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

  footer {
    display: flex;
    flex-direction: column;
    padding: 1vh;

    #adds {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    #sn {
      display: flex;
      flex-direction: row;

      p {
        margin: auto 1vw auto 1vw;
      }
    }
  }
}
</style>
