<template>
<div class="container">
    <div>
      <h1 class="main-title">{{title}}</h1>
      <button style="margin:5px;" class="btn btn-primary pull-right" @click="rebalanceConstituents()">Rebalance</button>
      <table class="table">
          <thead class="thead-main-title">
                <tr>
                    <th>Category/Stock</th>
                    <th></th>
                    <th>Model Weight({{getTotalPercent(this.modifyedPortfolio, 'model_weight')}}%)</th>
                    <th>Weight({{getTotalPercent(this.modifyedPortfolio, 'weight')}}%)</th>
                </tr>
            </thead>
        </table>
        <table class="table" v-for="(item, key, index) in myConstituents">
            <thead class="thead-body-title">
                <tr>
                    <th><div class="thead-body-title-head"></div>{{key}}</th>
                    <th></th>
                    <th>{{getTotalPercent(item, 'model_weight')}}%</th>
                    <th>{{getTotalPercent(item, 'weight')}}%</th>
                </tr>
            </thead>
            <tbody v-for="(im) in item">
                <tr>
                    <td><button @click="delectConstituent(im)"><i class="fas fa-trash-alt"></i></button><a>{{im.name}}</a></td>
                    <td><button v-show="im.lock" @click="updateLock(im,false)"><i class="fas fa-lock-open"></i></button><button v-show="!im.lock" @click="updateLock(im,true)"><i class="fas fa-lock"></i></button></td>
                    <td>{{im.model_weight}}%</td>
                    <td>
                      <button :disabled="im.weight > 99 || im.lock" @click="updateValue(im, 'inc')" :class="{'button-disable': im.lock}"><i class="fas fa-plus-square"></i></button>
                      <input :disabled="im.lock" :value="im.weight" @keypress="onkeypress($event)" @input="handleInput($event, im)" />
                      <button :disabled="im.weight < 1 || im.lock" @click="updateValue(im, 'dec')" :class="{'button-disable': im.lock}"><i class="fas fa-minus-square" ></i></button> %</td>
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
        getPortfolios: 'getPortfolios',
        }),
      modifyedPortfolio:{
        get: function() {
           let data = this.getPortfolios.filter((v,k)=>{
                return (v.id == this.$route.params.id)
          });
          data = (data && data[0] && data[0]['constituents'])? data[0]['constituents'] :[];
          let modifyedPortfolio = data.map((v,k)=> {
            return Object.assign({},{...v.instrument},{"weight":v.weight,"model_weight":(v.model_weight)?v.model_weight:v.weight, lock:(v.lock)?v.lock:false})
          });
          return modifyedPortfolio;

        }
      },  
      myConstituents: {
        get: function() {
          let result =  _.groupBy(this.modifyedPortfolio, 'type');
            return result;
        }
      },
    },
    methods: {
      ...mapActions('portfolio',{      
        updateWeightAction:      'updateWeightAction',       
        updateLockAction:      'updateLockAction',   
        deletConstituentsAction:      'deletConstituentsAction',   
        rebalanceConstituentsAction:      'rebalanceConstituentsAction',   
      }),
      handleInput(evt, data){
        let {value} = evt.target;
        let router_id = this.$route.params.id;  
        if(value == "" || parseFloat(value) <= 100){
        this.updateWeightAction({router_id, value, data});          
        }
      },
     onkeypress(evt) {
      let {value} = evt.target;
       evt = (evt) ? evt : window.event;
      let charCode = (evt.which) ? evt.which : evt.keyCode;
      let keyEventValue = parseFloat(value + String.fromCharCode(charCode));   
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 || (keyEventValue > 100)) {      
        evt.preventDefault();
      }
    },
      updateValue(data, type){
        let {weight} = data
        let router_id = this.$route.params.id;                
        if(type == "inc"){
        this.updateWeightAction({router_id, value: (parseInt((weight)? (weight): 0)+1), data});          
        }else{
        this.updateWeightAction({router_id, value: (parseInt(weight)-1), data});                    
        }
      },
      delectConstituent(data){
        let router_id = this.$route.params.id; 
        this.deletConstituentsAction({data, router_id});
      },
      rebalanceConstituents(){
        let router_id = this.$route.params.id;         
        this.rebalanceConstituentsAction({router_id});        
      },
      updateLock(data,type){
        let router_id = this.$route.params.id; 
        this.updateLockAction({data, type, router_id});
      },
      getTotalPercent(data, value){
         let result =  _.sumBy(data, function(o) { 
          return ((o[value]) ? parseFloat(o[value]) : 0);
           });
         return parseFloat(result.toPrecision(2));
      },
    },
}
</script>
<style> 
</style>
