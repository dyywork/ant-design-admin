<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    :theme="theme"
    :mode="menuMode"
    @click="handleMenu"
  >
    <template v-for="item in menuList" :key="item.path">
      <template v-if="!item.meta.hidden">
        <template v-if="item.meta.hiddenSubMenu">
          <a-menu-item :key="item.path">
            <template v-if="item.meta?.icon" #icon>
              <i :class="['iconfont', item.meta.icon]" />
            </template>
            {{ item.meta.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :key="item.path" :menu-info="item" />
        </template>
      </template>
    </template>
  </a-menu>
</template>

<script lang="ts" setup>
  import SubMenu from '@/layout/components/SubMenu.vue';
  import { ref, computed, onMounted, reactive } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();
  import { routes } from '@/router/router';
  import { getMenuItem } from '@/utils/asyncRouter';

  const store = useStore();
  const menuList = [
    ...reactive(routes),
    ...computed(() => store.state.router.routes).value,
  ];
  const menuMode = computed(() => store.getters['setting/layout']);
  const theme = computed(() => store.getters['setting/theme']);
  const selectedKeys = ref<any>([]);
  const openKeys = ref([]);
  // tabs
  const multiTabs = computed(() => store.getters['router/multiTabs']);

  // 点击跳转
  const handleMenu = ({ key, item, keyPath }: any) => {
    console.log(key);
    console.log(multiTabs.value);
    console.log(getMenuItem(menuList, key));
    store.dispatch({
      type: 'router/setCommit',
      commit: 'SET_MULTI_TABS',
      data: [...multiTabs.value, getMenuItem(menuList, key)],
    });
    openKeys.value = keyPath;
    router.push({ path: key });
  };
  onMounted(() => {
    const { path } = route;
    if (path === '/home') {
      selectedKeys.value.push('/');
    } else {
      selectedKeys.value.push(path);
    }
  });
</script>

<style scoped lang="less">
  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
  :deep(.iconfont) {
    font-size: 20px !important;
  }
</style>
