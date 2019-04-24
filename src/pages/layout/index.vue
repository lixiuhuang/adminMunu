<template>
  <div class="layout">
    <Layout>
      <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">lixiuhuang吃鸡统计平台</div>
            <div class='right-text' style="position: relative">欢迎来到lixiuhuang吃鸡统计平台
              <!-- <span class="user-name">lixiuhuang</span> -->
                <span class='logout-text' @click='quitLogin'>退出登录</span>
              </div>
          </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu @on-select="selectMenu" :active-name="AC" :open-names='onames' theme="light" width="auto" ref="menus" accordion>
            <Submenu :name="item.meta.configName" v-for='(item, index) in routerArr' :key='index'>
              <template slot="title">
                  <Icon :type="item.meta.menuIcon" size='16'></Icon>
                  {{item.meta.menuName}}
              </template>

              <router-link v-if='childItem.meta.showMenu' :to="{name: childItem.name}" class="link-white" v-for='(childItem, index) in item.children' :key='index'>
                <MenuItem :name="childItem.meta.configName">{{childItem.meta.menuName}}</MenuItem>
              </router-link>
            </Submenu>
          </Menu>
        </Sider>
          <Layout>
            <Content :style="{padding: '25px 20px 80px', background: '#fff'}">
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </Content>
          </Layout>
      </Layout>
      <Footer class="layout-footer-center">2019 &copy; cijizhanchang</Footer>
    </Layout>
  </div>
</template>
<style lang="scss" scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #fff;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.ivu-layout{
  height: 100%;
  background: #fff;
}
.layout-logo{
  height: 30px;
  float: left;
  position: relative;
  top: 2px;
  left: -25px;
  color: #fff;
  font-size: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.ivu-layout-footer {
  text-align: center;
  font-size: 16px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 15px;
}
.ivu-layout-sider{
  border-right: 1px solid #e9e9e9;
}
.ivu-menu-vertical{
  margin-right:-1px
}
.logout-text {
  border-left: 2px solid #fff;
  padding-left: 15px;
  margin-left: 15px;
  cursor: pointer;
}
.right-text {
  float: right;
  color: #fff;
  padding-left: 70px;
  line-height: 64px;
  .user-name{
    font-weight: bold;
  }
}
</style>
<script>
import { routeConfig } from '@/config'
export default {
  data () {
    return {
      onames: [],
      AC: 1,
      routerArr: []
    }
  },
  methods: {
    selectMenu (data) {
      this.$router.push(routeConfig[data])
    },
    changeOpenNames () {
      const path = this.$route.path
      let submenu = ''
      for (let key in routeConfig) {
        if (routeConfig[key] === path) {
          submenu = key
        }
      }
      this.AC = submenu
      let arr = []
      arr[0] = submenu[0]
      this.onames = arr
      this.$nextTick(() => {
        this.$refs.menus.updateOpened()
        this.$refs.menus.updateActiveName()
      })
    },
    quitLogin () {
      console.log('退出呗')
      this.$router.replace({
        path: '/login'
      })
    }
  },
  mounted () {
    this.changeOpenNames()
    this.routerArr = this.$router.options.routes[1].children
  }
}
</script>
