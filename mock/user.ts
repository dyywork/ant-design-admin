import Mock from 'mockjs';

Mock.mock('/api/menu/list', 'post', () => {
  return {
    code: 200,
    msg: '成功',
    data: [
      {
        path: '/center',
        component: '',
        meta: { title: '个人中心', icon: 'el-icon-location' },
        children: [
          {
            path: '/center',
            name: 'Center',
            component: '/Center/Center.vue',
            meta: { title: 'Center' },
          },
          {
            path: '/table',
            name: 'Table',
            component: '/Table/Table.vue',
            meta: { title: 'Table' },
          },
        ],
      },
    ],
  };
});

Mock.mock('api/user/login', 'post', () => {
  return {
    code: 200,
    msg: '',
    data: { token: 'admin' },
  };
});

Mock.mock('api/user/token', 'post', () => {
  return {
    code: 200,
    msg: '',
    data: {
      token: 'admin',
    },
  };
});
