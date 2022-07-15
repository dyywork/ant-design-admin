<template>
  <a-layout class="layout-container">
    <a-layout-sider
      v-if="layout === 'inline'"
      v-model:collapsed="collapsed"
      :collapsed-width="60"
      collapsible
      :style="{ background: theme === 'light' ? '#ffffff' : '#001529' }"
    >
      <div class="logo"></div>
      <side-menu v-if="layout === 'inline'"></side-menu>
      <template #trigger>
        <div
          class="layout-container-trigger"
          :style="{
            background: theme === 'light' ? '#ffffff' : '#001529',
            color: theme === 'light' ? '#001529' : '#fff',
          }"
        >
          <menu-fold-outlined v-if="!collapsed" style="font-size: 18px" />
          <menu-unfold-outlined v-else style="font-size: 18px" />
        </div>
      </template>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        class="layout-container-header"
        :style="{
          background:
            layout === 'inline'
              ? '#ffffff'
              : theme !== 'light'
              ? '#001529'
              : '#fff',
        }"
      >
        <header-container v-if="layout === 'inline'" />
        <div v-else class="layout-container-header-horizontal">
          <div class="logo-header"></div>
          <side-menu></side-menu>
          <div class="layout-container-header-horizontal-right"></div>
        </div>
      </a-layout-header>
      <a-layout-content class="layout-container-content">
        <a-breadcrumb>
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div>
          <router-view v-slot="{ Component }">
            <keep-alive :include="['Table']">
              <component :is="Component" />
            </keep-alive>
          </router-view>
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
  import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
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
      height: 48px;
      line-height: 48px;
      padding: 0;
      .layout-container-header-horizontal {
        display: flex;
        width: 100%;
        ::v-deep(.ant-menu) {
          flex-grow: 1;
        }
        .logo-header {
          height: 20px;
          margin: 14px;
          flex-basis: 172px;
          background: rgba(255, 255, 255, 0.3);
        }
        .layout-container-header-horizontal-right {
          flex-basis: 100px;
        }
      }
    }
    .layout-container-content {
      margin: 0 16px;
    }
    .layout-container-trigger {
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: 20px;
    }
  }
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
</style>
