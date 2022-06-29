<template>
  <router-link :to="{ name: 'Home' }">{{ name }}</router-link>
</template>
<script lang="ts">
  import {defineComponent} from 'vue'
  export default defineComponent({
    data() {
      return {
        name: "Home"
      }
    }
  })
</script>
