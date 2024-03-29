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
                meta: { title: '个人中心', hidden: true },
              },
              {
                path: '/admin/table1',
                name: 'Table1',
                component: '/Table/Table.vue',
                meta: { title: '表格' },
              },
              {
                path: '/admin/center6',
                name: 'CenterTest6',
                component: '/Center/Center.vue',
                meta: { title: 'CenterTest6' },
              },
            ],
          },
          {
            path: '/table',
            name: 'Table',
            component: '/Table/Table.vue',
            meta: { title: '表格页面缓存', keepAlive: true },
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
      {
        path: '/tests1',
        component: '',
        name: 'centerUserTest11',
        meta: { title: '测试用例1', icon: 'icon-yonghu' },
        children: [
          {
            path: '/tests/center1',
            name: 'CenterTest11',
            component: '/Center/Center.vue',
            meta: { title: 'CenterTest11' },
          },
          {
            path: '/tests/table1',
            name: 'TableTest11',
            component: '/Table/Table.vue',
            meta: { title: 'TableTest11' },
          },
        ],
      },
      {
        path: '/tests12',
        component: '',
        name: 'centerUserTest112',
        meta: { title: '测试用例1', icon: 'icon-yonghu' },
        children: [
          {
            path: '/tests/center12',
            name: 'CenterTest112',
            component: '/Center/Center.vue',
            meta: { title: 'CenterTest112' },
          },
          {
            path: '/tests/table12',
            name: 'TableTest112',
            component: '/Table/Table.vue',
            meta: { title: 'TableTest112' },
          },
        ],
      },
      {
        path: '/tests123',
        component: '',
        name: 'centerUserTest1123',
        meta: { title: '测试用例1', icon: 'icon-yonghu' },
        children: [
          {
            path: '/tests/center123',
            name: 'CenterTest1123',
            component: '/Center/Center.vue',
            meta: { title: 'CenterTest112' },
          },
          {
            path: '/tests/table123',
            name: 'TableTest1123',
            component: '/Table/Table.vue',
            meta: { title: 'TableTest1123' },
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
