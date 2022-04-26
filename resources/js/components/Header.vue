<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |  -->

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <div v-if="isLoggedIn" class="item">
                <router-link to="/upload" class="item"> Upload </router-link>
        <a class="item" @click="logout"> Logout </a> 

      </div>
      <div v-else  >
        <input type="text" v-model="username" name="username" id="">
        <a class="ui item active" @click="login(username)"> Login </a>
      </div>
  </div> -->

  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  //   computed: {
  //     ...mapGetters(["isLoggedIn"]),
  //   },
  //   methods: mapActions(["login","logout"]),
};
</script>
<style scoped>
#nav {
  padding: 30px;
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>