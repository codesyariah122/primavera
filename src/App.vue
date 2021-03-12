<template>
  <div id="app">
    <Navigation />
    <!--
      NODE:
      It's important to know that the router-view component here always renders the current route from your application. And that means in detail the component, which you have set in your router configuration. In this case, the article component. 

      And this component is in this constellation also the child component at this time. And that's why we can use slots, and any other stuff we can do with a regular child component.
    -->
    <div class="content" :class="{'shrink':showNav}" @click="showNav = false">
      <router-view>
        <div id="navigation-icon">
          <!--
            By nested click events you need the stop modifer for avoiding the event propagation.
          -->
          <i class="fas fa-bars" @click.stop="showNav = true"></i>
        </div>
      </router-view>
    </div>    
  </div>
</template>

<script>
  import Navigation from './components/molecules/Navigation.vue'

  export default {
    name: 'App',
    data: () => {
      return {
        showNav: false
      }
    },
    components: {
      Navigation
    },
    watch: {
      $route() {
        this.showNav = false;      
      },
    }
  }
</script>

<style lang="scss">
  @import url("https://use.fontawesome.com/releases/v5.13.0/css/all.css");
  @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Source+Code+Pro&family=Yellowtail&display=swap');
  * {
    box-sizing: border-box;
    font-family: 'Source Code Pro', monospace ;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: rgba(0,0,0,0.5)!important;
    width: 100vw;
    overflow-x: hidden;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 2rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;    
  }

  #navigation-icon > i {
    cursor: pointer;
    font-size: 2rem;
    padding: 17px;
    color: grey;
    position: fixed;
    top: 8.5%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index:1;
  }

  .content {
    position: absolute;
    top: 0;
    width: 100vw;
    min-height: 100vh;
    padding: .3px;
    background-color: #fff;
    transition: .3s all ease-in-out;
  }

  .shrink {
    transform: scale(.9) translateX(250px);
    border-radius: 20px;    
    height: 100vh;
    overflow: hidden;
    box-shadow: -5px 5px 20px #333;
    cursor: pointer;
  }
</style>
