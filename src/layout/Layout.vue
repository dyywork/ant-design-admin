<template>
  <a-layout style="min-height: 100vh">
    <side-menu></side-menu>
    <a-layout>
      <header-container />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
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
</script>
