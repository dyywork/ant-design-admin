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

      <a-dropdown>
        <span class="ant-dropdown-link"> admin </span>
        <template #overlay>
          <a-menu @click="handleAdminChange">
            <a-menu-item key="center"> 个人中心</a-menu-item>
            <a-menu-item key="setting"> 设置 </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <a-dropdown placement="bottomLeft">
        <span class="ant-dropdown-link">
          <global-outlined />
        </span>
        <template #overlay>
          <a-menu
            v-model:selectedKeys="selectedKeys"
            @click="handleVisibleChange"
          >
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
  export default {
    name: 'HeaderContainer',
    components: { UserOutlined, GlobalOutlined },
    data() {
      return {
        selectedKeys: ['zhCN'],
      };
    },
    methods: {
      handleAdminChange(e) {
        if (e.key === 'center') {
          this.$router.push('/admin/center/123');
        }
      },
      handleVisibleChange(e) {
        this.selectedKeys = [];
        this.selectedKeys.push(e.key);
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
