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
  <div>
    <PageHeader />
    <PageMain />
    <PageFooter />
    <p>cf</p>

  </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
