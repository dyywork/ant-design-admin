<template>
  <router-link :to="{ name: 'Home' }">{{ name }}</router-link>
  <a-button @click="setColor">主题设置{{ open }}</a-button>
  <a-input v-model="msg" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { ConfigProvider } from 'ant-design-vue';
  import { mapGetters } from 'vuex';

  export default defineComponent({
    name: 'Table',
    data() {
      return {
        name: 'Home',
        msg: '',
      };
    },
    computed: {
      ...mapGetters({
        open: 'sideMenu/open',
      }),
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
