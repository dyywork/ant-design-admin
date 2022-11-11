/** *@name:MultiTabs *@author:dingyongya *@date:2022/7/15 16:32
*@update:2022/7/15 16:32 */

<template>
  <a-tabs
    v-model:activeKey="activeKey"
    hide-add
    type="editable-card"
    @change="handleChange"
  >
    <a-tab-pane v-for="pane in multiTabs" :key="pane.fullPath">
      <template #closeIcon>
        <sync-outlined
          v-if="tabsActiveKey === pane.fullPath"
          @click="refreshPage"
        />
        <close-outlined
          v-if="multiTabs.length > 1"
          :style="{
            marginLeft: tabsActiveKey === pane.fullPath ? '10px' : '0',
          }"
          @click="onEdit(pane.fullPath)"
        />
      </template>
      <template #tab> {{ pane.meta.title }}</template>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters } from 'vuex';
  import { SyncOutlined, CloseOutlined } from '@ant-design/icons-vue';
  import { RouteLocationRaw } from 'vue-router';

  export default defineComponent({
    name: 'MultiTabs',
    components: {
      SyncOutlined,
      CloseOutlined,
    },
    inject: ['setIsLoadString'],
    data() {
      return {
        activeKey: [],
      };
    },
    computed: {
      ...mapGetters({
        multiTabs: 'router/multiTabs',
        tabsActiveKey: 'router/tabsActiveKey',
      }),
    },
    watch: {
      tabsActiveKey(val) {
        this.activeKey = val;
      },
    },
    created() {
      this.activeKey = this.tabsActiveKey;
    },
    methods: {
      refreshPage() {
        this.setIsLoadString();
      },
      handleChange(item: RouteLocationRaw) {
        this.$router.push(item);
        this.$store.dispatch({
          type: 'router/setCommit',
          commit: 'SET_ACTIVE_TAB',
          data: item,
        });
      },
      onEdit(item: any) {
        this.$store.dispatch({
          type: 'router/setCommit',
          commit: 'REMOVE_MULTI_TABS',
          data: item,
        });
      },
    },
  });
</script>

<style scoped lang="less">
  .tabs-icon {
    margin-right: 10px;
  }
</style>
