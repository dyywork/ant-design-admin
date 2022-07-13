/** *@name:SubMenu.vue *@author:dingyongya *@date:2022/7/5 13:45
*@update:2022/7/5 13:45 */

<template>
  <a-sub-menu :key="menuInfo.path">
    <template v-if="menuInfo.meta?.icon" #icon>
      <i :class="['iconfont', menuInfo.meta.icon]" />
    </template>
    <template #title>{{ menuInfo.meta.title }}</template>
    <template v-for="item in menuInfo.children" :key="item.path">
      <template v-if="!item.meta.hidden">
        <template v-if="!item.children">
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
  </a-sub-menu>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SubMenu',
    props: {
      menuInfo: {
        type: Object,
        default: () => ({}),
      },
    },
  });
</script>

<style scoped></style>
