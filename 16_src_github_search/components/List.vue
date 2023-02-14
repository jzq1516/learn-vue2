<template>
  <div class="main">
    <!-- 用户展示列表 -->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px;"/>
      </a>
      <p>{{user.login}}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>

  </div>
</template>

<script>
  export default {
    name: 'List',
    data() {
      return {
        info: {
          isFirst: true,
          isLoading: false,
          errMsg: '',
          users: []
        }
      }
    },
    mounted() {
      this.$bus.$on('updateListData', (data)=>{
        this.info = {...this.info, ...data}
      })
    }
  }
</script>

<style scoped>
  .main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .main .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 380px;
    margin-bottom: 30px;
  }
</style>