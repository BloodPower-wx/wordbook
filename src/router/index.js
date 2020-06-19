import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login',
    meta: {
      title: '用户登录'
    }
  },
  {
    path: '/login',
    name:'login',
    meta: {
      title: '用户登录'
    },
    component: () => import('@/views/login/index'),
    children: [
      {
        path: '/',
        redirect: '/login/userlogin'
      },
      {
        path: 'userlogin',
        name: 'userlogin',
        component: () => import('@/views/login/components/UserLogin'),
        meta: {
          title: '用户登录'
        }
      },
      {
        path: 'phonelogin',
        name: 'phonelogin',
        component: () => import('@/views/login/components/PhoneLogin'),
        meta: {
          title: '手机登录'
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/login/components/Register'),
        meta: {
          title: '注册单词本账号'
        }
      }
    

    ]
  }


]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router