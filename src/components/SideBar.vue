<template>
  <div>
    <h2>Sidebar</h2>
    <form>
      <input type="search" name="q" placeholder="Search query">
      <input type="submit" value="Go!">
    </form>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  padding-left: 30px;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>