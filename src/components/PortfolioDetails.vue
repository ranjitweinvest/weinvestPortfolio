<template>
<div class="container">
    <h1>{{title}}</h1>
    <div>
      <table class="table" >
          <thead class="thead-main-title">
                <tr>
                    <th>Category/Stock</th>
                    <th></th>
                    <th>Model Weight({{getTotalPercent(this.getDetailPortfolios, 'model_weight')}}%)</th>
                    <th>Weight({{getTotalPercent(this.getDetailPortfolios, 'weight')}}%)</th>
                </tr>
            </thead>
        </table>
        <table class="table" v-for="(item, key, index) in myConstituents">
            <thead class="thead-body-title">
                <tr>
                    <th><div class="thead-body-title-head"></div>{{key}}</th>
                    <th>Add {{key}}</th>
                    <th>{{getTotalPercent(item, 'model_weight')}}%</th>
                    <th>{{getTotalPercent(item, 'weight')}}%</th>
                </tr>
            </thead>
            <tbody v-for="(im) in item">
                <tr>
                    <td><a>{{im.name}}</a></td>
                    <td><button v-show="!im.lock" @click="updateLock(im,true)"><i class="fas fa-lock-open"></i></button><button v-show="im.lock" @click="updateLock(im,false)"><i class="fas fa-lock"></i></button></td>
                    <td>{{im.model_weight}}%</td>
                    <td>
                      <button v-show="!im.lock" :disabled="im.weight > 99" @click="updateValue(im, 'inc')"><i class="fas fa-plus-square"></i></button>
                      <input :disabled="im.lock" :value="im.weight" @keypress="isNumber($event)" @input="handleChange($event, im)">
                      <button v-show="!im.lock" :disabled="im.weight < 1" @click="updateValue(im, 'dec')"><i class="fas fa-minus-square" ></i></button> %</td>
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
      localPortfolioDetails: [],      
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
          this.localPortfolioDetails = result;
          return result;
        },
      },
    },
    methods: {
      ...mapActions('portfolio',{
        portfolioDetailsAction:      'portfolioDetailsAction',       
        updateWeightAction:      'updateWeightAction',       
        updateLockAction:      'updateLockAction',       
      }),
      handleChange(evt, data){
        let {value} = evt.target;
        let router_id = this.$route.params.id;        
        if(parseFloat(value) >= 0 && parseFloat(value) <= 100){
        this.updateWeightAction({router_id, value, data});          
        }else{
          evt.preventDefault();
          alert("value should be between 0 to 100");
        }
      },
      updateValue(data, type){
        let {weight} = data
        let router_id = this.$route.params.id;                
        if(type == "inc"){
        this.updateWeightAction({router_id, value: (parseInt(weight)+1), data});          
        }else{
        this.updateWeightAction({router_id, value: (parseInt(weight)-1), data});                    
        }
      },
      updateLock(data,type){
        this.updateLockAction({data,type});
      },
     isNumber(evt) {
       evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      console.log("charCode",charCode);
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {      
        evt.preventDefault();
      }else {
        return true;
      }
    },
      getTotalPercent(data, value){
         let result =  _.sumBy(data, function(o) { 
          return ((o[value]) ? parseFloat(o[value]) : 0);
           });
         return parseFloat(result.toPrecision(2));
      },
    },
  beforeMount(){
    this.portfolioDetailsAction(this.$route.params.id);
  },
}
</script>
<style>
</style>
