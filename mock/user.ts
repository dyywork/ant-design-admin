import Mock from 'mockjs';

Mock.mock('/api/menu/list', 'post', () => {
  return [
    {
      path: '/',
      redirect: '/home',
      component: '',
      meta: { title: '内容', icon: 'el-icon-location' },
      children: [
        {
          path: '/home',
          name: 'Home',
          component: '@/views/Home/Home.vue',
          meta: { title: 'Home' },
        },
        {
          path: '/table',
          name: 'Table',
          component: '@/views/Table/Table.vue',
          meta: { title: 'Table' },
        },
      ],
    },
    {
      path: '/center',
      component: '',
      meta: { title: '个人中心', icon: 'el-icon-location' },
      children: [
        {
          path: '/center',
          name: 'Center',
          component: '@/views/Center/Center.vue',
          meta: { title: 'Center' },
        },
      ],
    },
  ];
});
