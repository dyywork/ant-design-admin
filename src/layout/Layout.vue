<template>
  <a-layout class="layout-container">
    <a-layout-sider
      v-if="layout === 'inline'"
      v-model:collapsed="collapsed"
      :collapsed-width="60"
      collapsible
      :style="{ background: theme === 'light' ? '#ffffff' : '#001529' }"
    >
      <div class="logo">{{ size }}</div>
      <side-menu v-if="layout === 'inline'" class="layout-menu"></side-menu>
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
    <a-layout class="layout-main">
      <a-layout-header
        class="layout-container-header"
        :style="{
          background:
            layout === 'inline'
              ? '#ffffff'
              : theme !== 'light'
              ? '#001529'
              : '#fff',
          flexBasis: layout === 'inline' && tabs ? '81px' : '50px',
          lineHeight: layout === 'inline' ? '45px' : '48px',
        }"
      >
        <header-container v-if="layout === 'inline'">
          <template v-if="tabs" #tabs>
            <multi-tabs />
          </template>
        </header-container>
        <div v-else class="layout-container-header-horizontal">
          <div class="logo-header"></div>
          <side-menu></side-menu>
          <div class="layout-container-header-horizontal-right"></div>
        </div>
      </a-layout-header>
      <a-layout-content class="layout-container-content">
        <div>
          <router-view v-if="isLoad" v-slot="{ Component }">
            <keep-alive :include="keepAliveNames">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>
      </a-layout-content>
    </a-layout>
    <theme-setting />
  </a-layout>
</template>
<script lang="ts" setup>
  import SideMenu from './components/SideMenu.vue';
  import HeaderContainer from './components/HeaderContainer.vue';
  import ThemeSetting from '@/components/ThemeSetting/ThemeSetting.vue';
  import MultiTabs from './components/MultiTabs.vue';
  import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
  import { ref, computed, provide, nextTick } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute } from 'vue-router';

  const store = useStore();
  // 是否展开
  const collapsed = ref(false);

  // 获取布局
  const layout = computed(() => store.getters['setting/layout']);
  const theme = computed(() => store.getters['setting/theme']);
  const size = computed(() => store.getters['setting/size']);
  const tabs = computed(() => store.getters['setting/tabs']);

  // keepAlive 缓存
  const keepAliveNames = computed<any>(
    () => store.getters['router/keepAliveNames']
  );

  // 路由
  const route = useRoute();

  // 刷新
  const isLoad = ref(true);
  const setIsLoad = () => {
    isLoad.value = false;
    nextTick(() => {
      isLoad.value = true;
    });
  };
  provide('setIsLoad', setIsLoad);
</script>

<style scoped lang="less">
  .scroll-style {
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: hsla(0, 0%, 100%, 0.2);
      border-radius: 3px;
      -webkit-box-shadow: inset 0 0 5px hsl(0deg 0% 100% / 5%);
    }

    &::-webkit-scrollbar-track {
      background: hsla(0, 0%, 100%, 0.15);
      border-radius: 3px;
      -webkit-box-shadow: inset 0 0 5px rgb(37 37 37 / 5%);
    }
  }
  .content-scroll-style {
    &::-webkit-scrollbar {
      width: 13px;
      height: 13px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.4);
      background-clip: padding-box;
      border: 3px solid transparent;
      border-radius: 7px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-track:hover {
      background-color: #f8fafc;
    }
  }
  .layout-container {
    min-height: 100vh;

    .layout-container-header {
      display: flex;
      flex-direction: column;
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

    ::v-deep(.ant-layout-sider-children) {
      display: flex;
      flex-direction: column;
      height: 100vh;
      padding-bottom: 48px;
      .layout-menu {
        width: 100%;
        flex-grow: 1;
        overflow: hidden auto;
        .scroll-style();
      }
    }

    .layout-container-content {
      flex-grow: 1;
      padding: 0 16px;
      overflow: hidden;
      overflow-y: scroll;
      .content-scroll-style();
    }
    .ant-layout-sider-has-trigger {
      padding-bottom: 0px;
    }
    .layout-container-trigger {
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: 20px;
    }
    .layout-main {
      height: 100vh;
    }
  }
  .logo {
    flex-basis: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
</style>
