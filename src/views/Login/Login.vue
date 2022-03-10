<template>
  <a-button type="primary" @click="goHome">Home</a-button>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const goHome = () => {
    router.push({ name: 'Home' });
  };
</script>
