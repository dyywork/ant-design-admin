import router from '@/router/router';
import store from '@/store';
router.beforeResolve(async (to, from, next) => {
  console.log(to);

  if (to.path === '/login') {
    next({ path: '/' });
  } else {
    await store.dispatch('router/getRouters');
  }
});
