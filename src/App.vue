<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/tasks">任务管理</router-link>
      <router-link to="/add-task">添加任务</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  margin-bottom: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
}
nav a.router-link-active {
  font-weight: bold;
  color: #42b983;
}
</style>