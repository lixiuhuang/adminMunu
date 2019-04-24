<template>
  <div>
    <Breadcrumb :style="{'text-align':'left'}">
      <BreadcrumbItem to="/">
        <Icon type="ios-home-outline"></Icon>
        首页
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon type="logo-buffer"></Icon>
        吃鸡数
      </BreadcrumbItem>
    </Breadcrumb>
    <Divider />
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '时间',
          key: 'date'
        },
        {
          title: '击杀数量',
          key: 'killer'
        },
        {
          title: '操作',
          key: '',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.toDetailPage(params.row)
                  }
                }
              }, '查看')
            ])
          }
        }
      ],
      data1: [
        {
          name: 'lixiuhuang',
          killer: '1',
          date: '2016-10-03',
          id: '1-1'
        },
        {
          name: 'lixiuhuang',
          killer: '12',
          date: '2016-10-03',
          id: '1-2'
        },
        {
          name: 'lixiuhuang',
          killer: '10',
          date: '2016-10-03',
          id: '1-3'
        },
        {
          name: 'lixiuhuang',
          killer: '1',
          date: '2016-10-03',
          id: '1-4'
        }
      ]
    }
  },
  methods: {
    toDetailPage (item) {
      this.$router.push({
        name: 'menu1Show',
        params: {
          id: item.id
        }
      })
    }
  }
}
</script>
<style>

</style>
