/** *@name:HeaderContainer *@author:dingyongya *@date:2022/7/1 14:27
*@update:2022/7/1 14:27 */

<template>
  <div class="header-container">
    <section class="header-container-right">
      <a-avatar style="background-color: #87d068">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
      <a-dropdown placement="bottomLeft">
        <span class="ant-dropdown-link">
          <global-outlined />
        </span>
        <template #overlay>
          <a-menu @click="handleVisibleChange">
            <a-menu-item key="zhCN"> 简体中文 </a-menu-item>
            <a-menu-item key="enUS"> 英文 </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </section>
  </div>
  <slot name="tabs"></slot>
</template>

<script>
  import { UserOutlined, GlobalOutlined } from '@ant-design/icons-vue';
  import { ConfigProvider } from 'ant-design-vue';
  export default {
    name: 'HeaderContainer',
    components: { UserOutlined, GlobalOutlined },
    methods: {
      handleVisibleChange(e) {
        this.$store.dispatch({
          type: 'setting/setState',
          payload: {
            field: 'locale',
            value: e.key,
          },
        });
      },
    },
  };
</script>

<style scoped lang="less">
  .header-container {
    display: flex;
    flex-direction: row-reverse;
    .header-container-right {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-basis: 150px;
      .ant-dropdown-link {
        cursor: pointer;
      }
    }
  }
</style>
