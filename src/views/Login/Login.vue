<template>
  <div class="login_content">
    <a-form
      :model="formState"
      style="width: 400px"
      name="basic"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finish-failed="onFinishFailed"
    >
      <a-form-item
        label="用户名"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" size="small" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import store from '@/store';
  const router = useRouter();
  const formState = ref({
    username: '',
    password: '',
    remember: '',
  });
  const onFinish = async () => {
    await store.dispatch('user/setToken', '1231');
    router.push({ name: 'Home' });
  };
  const onFinishFailed = (errorInfo: any) => {};
</script>
<style scoped lang="less">
  .login_content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
</style>
