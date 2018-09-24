<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Diego e' il migliore"/>
    Message: {{message}}
    <div class="cards">
      <Card v-for="person in people" :key="person.id" :person="person"></Card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store, { IPerson } from "@/store";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Card from "@/components/Card.vue";

@Component({
  components: {
    HelloWorld,
    Card
  }
})
export default class Home extends Vue {
  private message = "Hello";

  // Computed property.
  get people() {
    return store.state.people;
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
