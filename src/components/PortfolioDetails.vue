<template>
<div class="container">
    <h1>{{title}}</h1>
    <div>
      <table class="table">
          <thead class="thead-main-title">
                <tr>
                    <th>Category/Stock</th>
                    <th></th>
                    <th>Model Weight(%)</th>
                    <th>Weight(100%)</th>
                </tr>
            </thead>
        </table>
        <table class="table" v-for="(item, key, index) in myConstituents">
            <thead class="thead-body-title">
                <tr>
                    <th><div class="thead-body-title-head"></div>{{key}}</th>
                    <th>Add {{key}}</th>
                    <th>1.59%</th>
                    <th>1.59%</th>
                </tr>
            </thead>
            <tbody v-for="(im) in item">
                <tr>
                    <td><a>{{im.name}}</a></td>
                    <td></td>
                    <td>{{im.model_weight}}</td>
                    <td>{{im.weight}}</td>
                </tr>
            </tbody>
        </table>
     </div>
</div>    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'
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
        let data = this.getDetailPortfolios
        let result =  _.groupBy(data, 'type');
          return result;
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
