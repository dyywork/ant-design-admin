<template>
  <section class="content-top">
    <h2>欢迎来到Admin中心！</h2>
    <p>祝你开心每一天！</p>
  </section>
  <a-row :gutter="16" type="flex" justify="space-between">
    <a-col :span="13">
      <a-card>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </a-card>
    </a-col>
    <a-col :span="11">
      <a-card>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </a-card>
    </a-col>
  </a-row>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const goCenter = () => {
    router.push({ path: '/admin/center/123' });
  };
</script>
<style scoped lang="less">
  .content-top {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 150px;
    margin: 10px 0;
    padding: 0 20px;
    border-radius: 10px;
    background: #1890ff;
    color: #ffffff;
    h2 {
      color: #ffffff;
      font-weight: bold;
    }
  }
</style>
