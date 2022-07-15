/** *@name:ThemeSetting *@author:dingyongya *@date:2022/7/12 13:58
*@update:2022/7/12 13:58 */

<template>
  <a-drawer
    title="主题设置"
    class="drawer-test"
    width="300"
    :visible="visible"
    :closable="false"
    @close="onClose"
  >
    <a-form
      layout="vertical"
      :model="form"
      :wrapper-col="{ span: 14, offset: 0 }"
    >
      <a-form-item label="MenuTheme">
        <div class="color-content">
          <a-switch v-model:checked="checkedTheme" @change="menuThemeChange" />
        </div>
      </a-form-item>
      <a-form-item label="Layout">
        <div class="color-content">
          <a-switch v-model:checked="checked" @change="layoutChange" />
        </div>
      </a-form-item>
      <a-form-item label="主题色">
        <div class="color-content">
          <div
            v-for="(item, index) in colorList"
            :key="index"
            class="color-item"
            :style="{ background: item }"
            @click="setColor(item)"
          >
            <CheckOutlined v-if="color === item" style="color: #ffffff" />
          </div>
        </div>
      </a-form-item>
    </a-form>
    <template #handle>
      <div class="drawer-handle">
        <a-button type="primary" size="large">
          <template #icon>
            <div @click="onClose">
              <SettingOutlined v-if="!visible" />
              <CloseOutlined v-else />
            </div>
          </template>
        </a-button>
      </div>
    </template>
  </a-drawer>
</template>

<script>
  import { defineComponent } from 'vue';
  import {
    SettingOutlined,
    CloseOutlined,
    CheckOutlined,
  } from '@ant-design/icons-vue';
  import { ConfigProvider } from 'ant-design-vue';

  export default defineComponent({
    name: 'ThemeSetting',
    components: { SettingOutlined, CloseOutlined, CheckOutlined },
    data() {
      return {
        visible: false,
        form: {},
        colorList: ['#1890ff', '#f5222d', '#fa541c'],
        color: '#1890ff',
        checked: false,
        checkedTheme: false,
      };
    },
    mounted() {},
    methods: {
      layoutChange(val) {
        this.$store.dispatch({
          type: 'setting/setLayout',
          layout: val ? 'horizontal' : 'inline',
        });
      },
      menuThemeChange(val) {
        this.$store.dispatch({
          type: 'setting/setTheme',
          theme: !val ? 'dark' : 'light',
        });
      },
      onClose() {
        this.visible = !this.visible;
      },
      setColor(val) {
        this.color = val;
        ConfigProvider.config({
          theme: { primaryColor: val },
        });
        this.onClose();
      },
    },
  });
</script>

<style scoped lang="less">
  .drawer-handle {
    position: absolute;
    right: 300px;
    top: 300px;
    z-index: 1000;
  }
  .color-content {
    display: flex;
  }
  .color-item {
    width: 18px;
    height: 18px;
    margin-right: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
