<template>
  <div>
    <slot />
    <section class="about">
      <b-container>
        <b-row class="justify-content-center">
          <div class="col-12">
            <AboutPage title="AboutPage"/>
          </div>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
  import AboutPage from '../components/pages/About/AboutPage.vue'
  export default {
    name: "Home",
    metaInfo: {
      title: "AboutPage | Primavera"
    },
    components: {
      AboutPage
    }
  }
</script>

<style lang="scss" scoped>
.about{
  margin-top: 7.5rem;
  width: 100vw;
   img {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-bottom: 32px;
  }

  p {
    text-indent: 31px;
    margin: 0;
    padding: 0;
    font-size: 1.8rem;
    line-height: 1.5em;
  }
}
</style>