<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{ msg: string }>();

  const count = ref(0);
  const list = ref([1, 2]);
  const addCount = () => {
    count.value++;
  };
</script>

<template>
  <a-button type="primary" @click="addCount">count++</a-button>
  <a>{{ count }}</a>
</template>

<style scoped lang="less">
  a {
    color: #42b983;
    &:hover {
      color: #000;
    }
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
</style>
