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
  import { ref, computed, onMounted, reactive, watch } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute, useRouter } from 'vue-router';
  import { routes } from '@/router/router';
  import { getMenuItem } from '@/utils/asyncRouter';
  const route = useRoute();
  const router = useRouter();

  const selectedKeys = ref([]);
  const store = useStore();
  const menuList = [
    ...reactive(routes),
    ...computed(() => store.state.router.routes).value,
  ];
  const menuMode = computed(() => store.getters['setting/layout']);
  const theme = computed(() => store.getters['setting/theme']);
  const stateSelectedKeys = computed(
    () => store.getters['router/selectedKeys']
  );
  const stateOpenKeys = computed(() => store.getters['router/openKeys']);

  const openKeys = ref([]);

  watch(stateSelectedKeys, val => {
    selectedKeys.value = val;
  });
  watch(stateOpenKeys, val => {
    openKeys.value = val;
  });

  // 点击跳转
  const handleMenu = ({ key, item, keyPath }: any) => {
    const itemMenu: any = getMenuItem(menuList, key);
    store.dispatch({
      type: 'router/setCommit',
      commit: 'SET_MENU_ACTIVE',
      data: {
        selectedKeys: key,
        openKeys: keyPath,
      },
    });
    if (itemMenu.name === 'Center1') {
      router.push({ path: '/admin/center/123' });
    } else {
      router.push({ path: key });
    }
  };
  onMounted(() => {
    let path = '';
    let openKeys = [];
    if (route.meta.hiddenSubMenu) {
      path = route.matched[0].path;
      openKeys = [path];
    } else {
      path = route.path;
      openKeys = route.matched.map(item => item.path);
    }
    store.dispatch({
      type: 'router/setCommit',
      commit: 'SET_MENU_ACTIVE',
      data: {
        selectedKeys: path,
        openKeys: openKeys,
      },
    });
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
