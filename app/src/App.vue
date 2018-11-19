<template>
  <div id="app" class="container-fluid">
    <nav class="container-fluid">
      <header class="row">
        <div id="contact" class="col-3 row justify-content-between">
          <p>Shop by phone (01) 36 30</p>
          <a>Live chat with Us</a>
        </div>
        <div id="account" class="col-3 offset-6 row justify-content-end">
          <div>My account</div>
          <div>My cards</div>
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
              <router-link class="nav-link" to="/shop/office"
                >OFFICE</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop/multimedia"
                >MULTIMEDIA</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop/design"
                >DESIGN</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop/developer"
                >DEVELOPER</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop/utilities"
                >UTILITIES</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" href="/shop/games"
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
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  nav {
    height: 15vh;
    border-bottom: grey 1px solid;

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
