import Mock from 'mockjs';

Mock.mock('/api/menu/list', 'post', () => {
  return {
    code: 200,
    msg: '成功',
    data: [
      {
        path: '/admin',
        component: '',
        name: 'centerUser',
        meta: { title: '个人中心', icon: 'icon-yonghu' },
        children: [
          {
            path: '/admin/center',
            name: 'Center',
            component: 'EmptyLayout',
            meta: { title: 'Center' },
            children: [
              {
                path: '/admin/center/:id',
                name: 'Center1',
                component: '/Center/Center.vue',
                meta: { title: 'Center1' },
              },
              {
                path: '/admin/table1',
                name: 'Table1',
                component: '/Table/Table.vue',
                meta: { title: 'Table1' },
              },
            ],
          },
          {
            path: '/table',
            name: 'Table',
            component: '/Table/Table.vue',
            meta: { title: 'Table', keepAlive: true },
          },
        ],
      },
      {
        path: '/test',
        component: '',
        name: 'centerUserTest',
        meta: { title: '测试用例', icon: 'icon-yonghu' },
        children: [
          {
            path: '/test/center',
            name: 'CenterTest',
            component: '/Center/Center.vue',
            meta: { title: 'CenterTest' },
          },
          {
            path: '/test/table',
            name: 'TableTest',
            component: '/Table/Table.vue',
            meta: { title: 'TableTest' },
          },
        ],
      },
      {
        path: '/tests',
        component: '',
        name: 'centerUserTest1',
        meta: { title: '测试用例1', icon: 'icon-yonghu' },
        children: [
          {
            path: '/tests/center',
            name: 'CenterTest1',
            component: '/Center/Center.vue',
            meta: { title: 'CenterTest1' },
          },
          {
            path: '/tests/table',
            name: 'TableTest1',
            component: '/Table/Table.vue',
            meta: { title: 'TableTest1' },
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
