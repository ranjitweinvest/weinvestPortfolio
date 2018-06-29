<template>
<div class="container">
    <h1>{{title}}{{id}}</h1>
</div>    
</template>

<script>
export default {
 name: 'PortfolioDetails',
  data () {
    return {
      title: 'PortfolioDetails',
      id: null,
    }
  },
  created() {
    this.id = this.$route.params.id;
  },
}
</script>
<style>

</style>
