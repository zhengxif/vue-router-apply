import Home from '../views/Home.vue'
import Name from '../views/Name.vue'
import Version from '../views/Version.vue'


export default [
    {
        path: '/',
        redirect: { path: '/home'}
    },
    {
        path: '/home',
        name: 'home',
        components: { // 同一个路由可以配置多个视图
            default: Home,
            name: Name,
            version: Version,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/Profile.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/User.vue'),
        children: [
            {
                path: '',
                component: () => import('../views/UserAdd.vue')
            },
            {
                path: 'add',
                name: 'userAdd',
                component: () => import('../views/UserAdd.vue')
            },
            {
                path: 'list',
                name: 'userList',
                component: () => import('../views/UserList.vue')
            },
            {
                path: 'detail',
                name: 'userDetail',
                component: () => import('../views/UserDetail.vue'),
                beforeEnter(to, from, next) {
                    console.log('beforeEnter');
                    next();
                }
            },
        ]
    },
    {
        path: '*',
        component: () => import('../views/404.vue')
    }
]