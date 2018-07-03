<template>
<div class="container">
    <h1>{{title}}</h1>
    <p v-if="!myConstituents.length"> Data not found.</p>
    <div v-if="myConstituents.length" v-for="(item, index) in myConstituents">
      <p>{{item.instrument}}</p>
    </div>
</div>    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
 name: 'PortfolioDetails',
  data () {
    return {
      title: 'Portfolio Constituents',
    }
  },
   computed: {
      ...mapGetters('portfolio', {
        getDetailPortfolios: 'getDetailPortfolios',
        }),
      myConstituents: {
        get: function() {
          let data = (this.getDetailPortfolios && this.getDetailPortfolios[0] && this.getDetailPortfolios[0]['constituents'])? this.getDetailPortfolios[0]['constituents'] :[];
          return data;
        }
      },
    },
    methods: {
    ...mapActions('portfolio',{
      portfolioDetailsAction:      'portfolioDetailsAction',       
    }),
    },
  beforeMount(){
    this.portfolioDetailsAction(this.$route.params.id);
  },
}
</script>
<style>

</style>
