<template>
  <div id="app">
    <div class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header"></div>
        <ul class="navbar-nav nav">
          <li><router-link :to="{name: 'home'}">首页</router-link></li>
          <li><router-link :to="{name: 'profile'}">个人中心</router-link></li>
          <li><router-link :to="{path: '/user'}">用户</router-link></li>
          <li><router-link :to="{name: 'login'}">登录</router-link></li>
        </ul>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
      <router-view name="name"></router-view> 
      <router-view name="version"></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  
}
</script>

<style>

</style>
