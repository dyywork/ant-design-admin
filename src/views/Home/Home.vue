<template>
  <router-link :to="{ name: 'login' }">Login</router-link>
</template>
<script setup lang="ts">
  import { onMounted } from 'vue';
  import { getMenuList } from '@/api/user';
  onMounted(async () => {
    await getMenuList()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
</script>
