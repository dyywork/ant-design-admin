/** *@name:MultiTabs *@author:dingyongya *@date:2022/7/15 16:32
*@update:2022/7/15 16:32 */

<template>
  <a-tabs></a-tabs>
</template>

<script>
  import { defineComponent } from 'vue';
  import { mapGetters } from 'vuex';

  export default defineComponent({
    name: 'MultiTabs',
    computed: {
      ...mapGetters({
        multiTabs: 'router/multiTabs',
      }),
    },
    created() {
      console.log(this.multiTabs);
    },
  });
</script>

<style scoped lang="less"></style>
