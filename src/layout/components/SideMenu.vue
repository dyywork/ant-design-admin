<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo"></div>
    <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys='openKeys' theme="dark" mode="inline" @click='handleMenu'>
      <a-sub-menu v-for="menu in menuList" :key="menu.path">
        <template #title>
          <span>
            <user-outlined />
            <span>{{ menu.meta.title }}</span>
          </span>
        </template>
        <a-menu-item v-for="subMenu in menu.children" :key='subMenu.path'>{{subMenu.meta.title}}</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted } from 'vue'
  import { useStore } from 'vuex';
  import {useRoute, useRouter} from 'vue-router'
  const route = useRoute();
  const router = useRouter()
  import {
    UserOutlined,
  } from '@ant-design/icons-vue';


  const store = useStore();
  const menuList = computed(() => store.state.router.routes).value;
  const collapsed = ref(false);
  const selectedKeys = ref([]);
  const openKeys = ref(['/admin']);
  const handleMenu = ({ item, key, keyPath }) => {
    router.push({path: key})
  }
  onMounted(() => {
    const {path} = route
    selectedKeys.value.push(path)
  })
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
