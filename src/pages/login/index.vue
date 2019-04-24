<template>
  <div class='login-wrap'>
    <Row type="flex" justify="center" align="middle">
      <Col span="6">
        <h3 class='h3-title'>小伙子登录吧</h3>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" autocomplete="off">
          <FormItem label="用户名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入用户名" autocomplete="off"></Input>
          </FormItem>
          <FormItem label="密码" prop="passwd">
            <Input type="password" v-model="formValidate.passwd" placeholder="请输入密码" autocomplete="off"></Input>
          </FormItem>
          <FormItem style='padding-top:10px'>
            <Button type="info" long @click='submitLogin("formValidate")'>登录</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </div>
</template>
<style lang="scss" scoped>
  .login-wrap {
    padding-top:200px
  }
  .h3-title{
    padding-bottom:50px;
    text-align: center;
    font-size: 20px;
  }
</style>
<script>
export default {
  data () {
    return {
      formValidate: {
        name: '',
        passwd: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        passwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitLogin (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log('登陆')
          window.location.href = '/'
        }
      })
    }
  }
}
</script>
