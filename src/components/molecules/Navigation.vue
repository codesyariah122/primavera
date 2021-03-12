<template>
  <div class="navigation">
    <ul>
      <li><router-link to="/">start</router-link></li>
      <li><router-link to="/about">about</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .navigation {
    width: 100vw;
    min-height: 100vh;
    padding: 16px;
    

    ul {
      list-style: none;

      li {
        margin-bottom: 16px;
        text-transform: uppercase;
      }

      a {
        color: #fefefe;
        text-decoration: none;

        &:hover, &.router-link-exact-active {
          text-decoration: underline;
        }
      }
    }
  }
</style>