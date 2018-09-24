<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <slot v-if="!isLoading" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Loading extends Vue {
  @Prop() private isLoading?: boolean;
}
</script>