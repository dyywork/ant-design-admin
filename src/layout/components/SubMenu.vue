/**
*@name:SubMenu.vue
*@author:dingyongya
*@date:2022/7/5 13:45
*@update:2022/7/5 13:45
*/

<template>
  <a-sub-menu :key="menuInfo.path">
    <template #icon><MailOutlined /></template>
    <template #title>{{ menuInfo.meta.title }}</template>
    <template v-for="item in menuInfo.children" :key="item.path">
      <template v-if="!item.children">
        <a-menu-item :key="item.path">
          <template #icon>
            <PieChartOutlined />
          </template>
          {{ item.meta.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.path" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang='ts'>
  import { MailOutlined, PieChartOutlined } from '@ant-design/icons-vue';
  import {defineComponent} from 'vue'

  export default defineComponent({
    name: 'SubMenu',
    components: {MailOutlined, PieChartOutlined},
    props: {
      menuInfo: {
        type: Object,
        default: () => ({}),
      },
    }
  })
</script>

<style scoped>

</style>