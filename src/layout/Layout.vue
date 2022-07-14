<template>
  <a-layout class="layout-container">
    <a-layout-sider
      v-if="layout === 'inline'"
      v-model:collapsed="collapsed"
      collapsible
      :style="{ background: theme === 'light' ? '#ffffff' : '#001529' }"
    >
      <div class="logo"></div>
      <side-menu v-if="layout === 'inline'"></side-menu>
      <template #trigger>
        <div
          :style="{
            background: theme === 'light' ? '#ffffff' : '#001529',
            color: theme === 'light' ? '#001529' : '#fff',
          }"
        >
          123
        </div>
      </template>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-container-header">
        <header-container v-if="layout === 'inline'" />
        <template v-else>
          <div class="logo-header"></div>
          <side-menu></side-menu>
        </template>
      </a-layout-header>
      <a-layout-content class="layout-container-content">
        <a-breadcrumb>
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div>
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
    <theme-setting />
  </a-layout>
</template>
<script lang="ts" setup>
  import SideMenu from './components/SideMenu.vue';
  import HeaderContainer from './components/HeaderContainer.vue';
  import ThemeSetting from '@/components/ThemeSetting/ThemeSetting.vue';
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();
  // 是否展开
  const collapsed = ref(false);

  // 获取布局
  const layout = computed(() => store.getters['setting/layout']);
  const theme = computed(() => store.getters['setting/theme']);
</script>

<style scoped lang="less">
  .layout-container {
    min-height: 100vh;
    .layout-container-header {
      display: flex;
      background: #fff;
      height: 48px;
      line-height: 48px;
      padding: 0;
      .logo-header {
        height: 48px;
        width: 200px;
        background: rgba(117, 34, 34, 0.3);
      }
    }
    .layout-container-content {
      margin: 0 16px;
    }
  }
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
</style>
