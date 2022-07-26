<template>
  <div>
    <router-link :to="{ name: 'login' }">Login</router-link>
    <a-button @click="goCenter">Center</a-button>
    <a-pagination :total="50" show-size-changer />
  </div>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const goCenter = () => {
    router.push({ name: 'Center' });
  };
</script>
