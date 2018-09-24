<template>
  <div id="app">
    
    <header>
      <Header />
    </header>

    <nav>
      <SideBar class="sidebar-container" />
    </nav>

    <main>
      <router-view/>
    </main>

     <footer>
      <Footer />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import SideBar from "@/components/SideBar.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    SideBar,
    Footer
  }
})
export default class Home extends Vue {}
</script>

<style>
body {
  height: 100%;
  min-height: 100%;
  position: relative;
}

header {
  border-bottom: 1px solid;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

nav {
  padding: 30px;
  height: 100%;
  position: fixed;
  background-color: white;
  left: 0;
  border-right: 1px solid;
  border-top: 1px solid;
}

footer {
  width: 100%;
  bottom: 0;
  position: fixed;
  background-color: white;
  border-top: 1px solid;
}

main {
  height: 100%;
  margin: 80px 0 50px 266px;
  text-align: center;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
