<template>
  <input type="text" v-model="count">
  {{count}}
  <ul>
    <li></li>
  </ul>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";

const count=ref()
</script>

<style scoped>

</style>
