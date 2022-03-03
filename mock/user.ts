import Mock from 'mockjs'

Mock.mock('/api/menu/list', 'post', () => {
    return  [
                {
                    name: 1231
                }
            ]
})