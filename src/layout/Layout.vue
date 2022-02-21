<template><router-view></router-view></template>

<script lang="ts">
  export default {
    name: 'Layout',
  };
</script>

<style scoped lang="less">
  .logo {
    height: 53px;
    background-color: #001529;
    color: white;
    display: flex;
    align-items: center;

    img {
      height: 43px;
      padding-left: 10px;
    }

    span {
      display: inline-block;
      min-width: 50px;
    }
  }
  .content {
    height: 100%;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      box-shadow: 0px 1px 5px #888888;
      .el-dropdown-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
          margin-right: 8px;
        }
      }
      i {
        cursor: pointer;
      }
    }
  }

  :deep(.el-menu) {
    border-right: none;
  }

  :deep(.el-submenu__title) {
    text-align: left;
  }

  :deep(.el-menu-item) {
    text-align: left;
  }
</style>
