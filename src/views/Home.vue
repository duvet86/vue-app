<template>
  <Loading v-bind:isLoading="isPeopleLoading">
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Diego e' il migliore"/>
      Message: {{message}}
      <div class="cards">
        <Card v-for="person in people" :key="person.id" :person="person"></Card>
      </div>
    </div>
  </Loading>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";
import Loading from "@/components/common/Loading.vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Card from "@/components/Card.vue";

@Component({
  components: {
    Loading,
    HelloWorld,
    Card
  }
})
export default class Home extends Vue {
  private message = "Hello";

  // Computed property.
  get people() {
    return this.$store.state.products.people;
  }

  get isPeopleLoading() {
    console.log(this.$store.state.products.isLoading);
    return this.$store.state.products.isLoading;
  }

  // Life cycle hook.
  public mounted() {
    store.dispatch("getPeople");
  }
}
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
