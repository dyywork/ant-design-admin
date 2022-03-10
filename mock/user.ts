import Mock from 'mockjs';

Mock.mock('/api/menu/list', 'post', () => {
  return [
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
        {
          path: '/table',
          name: 'Table',
          component: '@/views/Table/Table.vue',
          meta: { title: 'Table' },
        },
      ],
    },
  ];
});
