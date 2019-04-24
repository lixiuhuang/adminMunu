import Vue from 'vue'
import Router from 'vue-router'
import LayoutIndex from '@/pages/layout/index'
import Layout from '@/pages/layout/layout'
import Login from '@/pages/login/index'
import Menu1List from '@/pages/menu1/list'
import Menu1Show from '@/pages/menu1/show'
import Menu2List from '@/pages/menu2/list'
import Menu2Show from '@/pages/menu2/show'
Vue.use(Router)
let roleType = 1 // 根据角色显示菜单  4 未登陆  改成2试试呗
let routerMap = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requireAuth: false,
      role: [1, 2, 3, 4],
      menuName: '登陆'
    }
  },
  {
    path: '/',
    name: 'Layout',
    component: LayoutIndex,
    redirect: '/menu1/list',
    meta: {
      requireAuth: true,
      role: [1, 2, 3],
      menuName: '首页',
      configName: '0-1'
    },
    children: [
      {
        path: '/menu1',
        name: 'Layout',
        component: Layout,
        meta: {
          requireAuth: true,
          role: [1, 2, 3],
          menuName: '吃鸡记录',
          configName: '1'
        },
        children: [
          {
            path: 'list',
            name: 'menu1List',
            component: Menu1List,
            meta: {
              requireAuth: true,
              role: [1, 2],
              menuName: '吃鸡列表',
              configName: '1-1',
              showMenu: true
            }
          },
          {
            path: 'show/:id',
            name: 'menu1Show',
            component: Menu1Show,
            meta: {
              requireAuth: true,
              role: [1, 2],
              menuName: '吃鸡详情',
              configName: '1-1'
            }
          }
        ]
      },
      {
        path: '/menu2',
        name: 'Layout',
        component: Layout,
        meta: {
          requireAuth: true,
          role: [1],
          menuName: '前十数记录',
          configName: '2'
        },
        children: [
          {
            path: 'list',
            name: 'menu2List',
            component: Menu2List,
            meta: {
              requireAuth: true,
              role: [1],
              menuName: '列表',
              configName: '2-1',
              showMenu: true
            }
          },
          {
            path: 'show/:id',
            name: 'menu2Show',
            component: Menu2Show,
            meta: {
              requireAuth: true,
              role: [1, 2, 3],
              menuName: '详情',
              configName: '2-1'
            }
          }
        ]
      }
    ]
  }
]

function mapRouter (routerArr) {
  return routerArr.filter((item, index, routerArr) => {
    if (item.meta.role.includes(roleType) && item.children && item.children.length > 0) {
      let a = mapRouter(item.children)
      routerArr[index].children.splice(0, routerArr[index].children.length, ...a)
    }
    return item.meta.role.includes(roleType)
  })
}
console.log(routerMap, 'routerMap')
routerMap = mapRouter(routerMap)
const router = new Router({
  routes: routerMap
})

export default router
