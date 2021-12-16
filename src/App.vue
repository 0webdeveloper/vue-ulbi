<template>
  <div id="app" :class="{dark: isDark}">
    <div class="container">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <color-theme @isDark="isDark = !isDark" />
      <router-view />
    </div>
  </div>
</template>

<script>
import ColorTheme from '@/components/ColorTheme'
export default {
  data() {
    return {
      isDark: false
    }
  },
  components: {
    ColorTheme
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  &.dark {
    background: #282C34;
    color: #fff;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
