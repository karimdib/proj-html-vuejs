<script>
import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/pagefooter.vue'


export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter,
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="font">
    <PageHeader />
    <PageMain />
    <PageFooter />
  </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.font {
  font-family: 'Roboto', sans-serif;
}
</style>
