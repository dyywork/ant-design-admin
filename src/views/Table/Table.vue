<template>
  <router-link :to="{ name: 'Home' }">{{ name }}</router-link>
  <a-button @click="setColor">主题设置</a-button>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { ConfigProvider } from 'ant-design-vue';

  export default defineComponent({
    data() {
      return {
        name: 'Home',
      };
    },
    methods: {
      setColor() {
        ConfigProvider.config({
          theme: { primaryColor: '#ff4d4f' },
        });
      },
    },
  });
</script>
