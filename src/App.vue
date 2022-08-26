<template>
  <div id="nav">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">WeFOODS</a>
        <form class="d-flex">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MITHILESH KUMAAR
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Details</a></li>
              <li><a class="dropdown-item" href="#">Signout</a></li>
            </ul>
          </div>
          <img
            src="../src/assets/logo.png"
            alt=""
            style="width: 30px"
            border-radius:30px
          />
        </form>
      </div>
    </nav>
    <!-- <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
