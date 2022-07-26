<template>
  <a-config-provider
    :component-size="size"
    :locale="locale === 'zhCN' ? zhCN : enUS"
  >
    <router-view />
  </a-config-provider>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters } from 'vuex';
  import enUS from 'ant-design-vue/es/locale/en_US';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';

  export default defineComponent({
    data() {
      return {
        enUS,
        zhCN,
      };
    },
    computed: {
      ...mapGetters({
        size: 'setting/size',
        locale: 'setting/locale',
      }),
    },
  });
</script>

<style scoped lang="less"></style>
