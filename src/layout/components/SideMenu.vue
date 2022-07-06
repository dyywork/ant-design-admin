<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo"></div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      theme="dark"
      mode="inline"
      @click="handleMenu"
    >
      <template v-for="item in menuList" :key="item.path">
        <template v-if="!item.meta.hidden">
          <template v-if="item.meta.hiddenSubMenu">
            <a-menu-item :key="item.path">
              <template #icon>
                <PieChartOutlined />
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
  </a-layout-sider>
</template>

<script lang="ts" setup>
  import SubMenu from '@/layout/components/SubMenu.vue';
  import { ref, computed, onMounted, reactive } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();
  import { routes } from '@/router/router';
  import { UserOutlined, PieChartOutlined } from '@ant-design/icons-vue';

  const store = useStore();
  const menuList = [
    ...reactive(routes),
    ...computed(() => store.state.router.routes).value,
  ];
  const collapsed = ref(false);
  const selectedKeys = ref<any>([]);
  const openKeys = ref(['/admin']);
  const handleMenu = ({ key }: any) => {
    router.push({ path: key });
  };
  onMounted(() => {
    const { path } = route;
    selectedKeys.value.push(path);
  });
</script>

<style scoped lang="less">
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
</style>
