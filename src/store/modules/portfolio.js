const state = {
    portfolios:  [
      {
      "id": 1,
      "name": "HONGKONG TECHNOLOGY",
      "volatility": "26.8",
      "mean_return": "2.96",
      "currency": "SGD",
      "constituents": [
        {
          "weight": "3",
          "instrument": {
            "id": 1,
            "name": "CSX corp",
            "type": "Equity"
          }
        },
        {
          "weight": "17",
          "instrument": {
            "id": 2,
            "name": "cummins Inc",
            "type": "Equity"
          }
        },
        {
          "weight": "10",
          "instrument": {
            "id": 3,
            "name": "Eaton Corp PLC",
            "type": "Equity"
          }
        },
        {
          "weight": "10",
          "instrument": {
            "id": 4,
            "name": "Fedx corp",
            "type": "Equity"
          }
        },
        {
          "weight": "10",
          "instrument": {
            "id": 5,
            "name": "Haris corp",
            "type": "Equity"
          }
        },
        {
          "weight": "10",
          "instrument": {
            "id": 6,
            "name": "Norfolk Southern Corp",
            "type": "Bond"
          }
        },
        {
          "weight": "5",
          "instrument": {
            "id": 7,
            "name": "General Dynamics",
            "type": "Bond"
          }
        },
        {
          "weight": "15",
          "instrument": {
            "id": 8,
            "name": "hal",
            "type": "Bond"
          }
        },
        {
          "weight": "20",
          "instrument": {
            "id": 10,
            "name": "USD CASH",
            "type": "CASH"
          }
        }
      ]
   },{
      "id": 2,
      "name": "Hong kong/China Technology",
      "volatility": "28.01",
      "mean_return": "24.11",
      "currency": "SGD",
      "constituents": [
        {
          "weight": "30",
          "instrument": {
            "id": 1,
            "name": "CSX corp",
            "type": "Equity"
          }
        },
        {
          "weight": "10",
          "instrument": {
            "id": 2,
            "name": "cummins Inc",
            "type": "Equity"
          }
        },
        {
          "weight": "60",
          "instrument": {
            "id": 3,
            "name": "Eaton Corp PLC",
            "type": "Equity"
          }
        }
      ]
  },{
      "id": 3,
      "name": "US TECH LEADERS",
      "volatility": "19.84",
      "mean_return": "26.64",
      "currency": "SGD",
      "constituents": [
        {
          "weight": "3",
          "instrument": {
            "id": 1,
            "name": "CSX corp",
            "type": "Equity"
          }
        },
        {
          "weight": "17",
          "instrument": {
            "id": 2,
            "name": "cummins Inc",
            "type": "Equity"
          }
        },
        {
          "weight": "10",
          "instrument": {
            "id": 3,
            "name": "Eaton Corp PLC",
            "type": "Equity"
          }
        },
        {
          "weight": "10",
          "instrument": {
            "id": 4,
            "name": "Fedx corp",
            "type": "Equity"
          }
        },
        {
          "weight": "10",
          "instrument": {
            "id": 5,
            "name": "Haris corp",
            "type": "Equity"
          }
        },
        {
          "weight": "10",
          "instrument": {
            "id": 6,
            "name": "Norfolk Southern Corp",
            "type": "Bond"
          }
        },
        {
          "weight": "5",
          "instrument": {
            "id": 7,
            "name": "General Dynamics",
            "type": "Bond"
          }
        },
        {
          "weight": "15",
          "instrument": {
            "id": 8,
            "name": "hal",
            "type": "Bond"
          }
        },
        {
          "weight": "20",
          "instrument": {
            "id": 10,
            "name": "USD CASH",
            "type": "CASH"
          }
        }
      ]}],
      detailPortfolios: []
  }
  
  // getters
  const getters = {
    getPortfolios: (state, getters, rootState) => {
      return state.portfolios;
    },
  }
  
  // actions
  const actions = {
    updateWeightAction({ commit, state }, param){
      commit('updateWeightMutation', param);
    },
    updateLockAction({ commit, state }, param){
      commit('updateLockMutation', param);      
    },
    deletConstituentsAction({ commit, state }, param){
      commit('deletConstituentsMutation', param);      
    },
    rebalanceConstituentsAction({ commit, state }, param){
      commit('rebalanceConstituentsMutation', param);      
    },
  }
  
  // mutations
  const mutations = {
    setDetailPortfolios (state, {data}) {
      state.detailPortfolios = data;
    },
    updateWeightMutation (state, param) {
      let {router_id, value, data:{weight, model_weight, id}} = param;
      let diff = Number(model_weight) - ((value) ? parseFloat(value) :0);
      let changeData = state.portfolios.filter((v,k)=> (v.id == router_id));
      let locked_modal_weight =  _.sumBy(changeData[0]['constituents'], function(o) {
          if(o.lock){
          return parseFloat((o.model_weight)?o.model_weight:o.weight);
          }
        });
         locked_modal_weight = (locked_modal_weight)? locked_modal_weight :0;
      let constituents = changeData[0]['constituents'].map((v,k)=>{
        if(id == v.instrument.id){
          return Object.assign({},{...v}, {lock:(v.lock)? v.lock :false ,model_weight:(v.model_weight)?v.model_weight:v.weight, weight:(!v.lock) ? value : v.weight })
        }else{  
        return Object.assign({},{...v}, {lock:(v.lock)? v.lock :false, model_weight:(v.model_weight)?v.model_weight:v.weight, weight:(!v.lock) ? Number(Number((v.model_weight)?v.model_weight:v.weight)  + (diff * Number((v.model_weight)?v.model_weight:v.weight)) / (100 - (parseInt(model_weight) + locked_modal_weight) )).toFixed(2): v.weight })
      }
      })
      let result = state.portfolios.map((v,k)=>{
        if(v.id == router_id){
          return Object.assign({},{...v}, {"constituents":constituents})  
        }
        return v
      })
      state.portfolios = result;
    },
    updateLockMutation (state, param) {
      let {data:{id}, type, router_id} = param;
      let changeData = state.portfolios.filter((v,k)=> (v.id == router_id));
      let constituents = changeData[0]['constituents'].map((v,k)=>{
        if(id == v.instrument.id){
           return Object.assign({},{...v},{lock:type});
        }
        return v;
      })
      let result = state.portfolios.map((v,k)=>{
        if(v.id == router_id){
          return Object.assign({},{...v}, {"constituents":constituents})  
        }
        return v
      });
      state.portfolios = result;

    },
    deletConstituentsMutation(state, param) {
      let {data:{id}, router_id} = param;
      let changeData = state.portfolios.filter((v,k)=> (v.id == router_id));
     let constituents = _.remove(changeData[0]['constituents'], function(v) {
        return !(id == v.instrument.id)
      });
      let result = state.portfolios.map((v,k)=>{
        if(v.id == router_id){
          return Object.assign({},{...v}, {"constituents":constituents})  
        }
        return v
      });
      state.portfolios = result;

    },
    rebalanceConstituentsMutation(state, param) {
      let {router_id} = param;
      let changeData = state.portfolios.filter((v,k)=> (v.id == router_id));
      let total_modal_weight =  _.sumBy(changeData[0]['constituents'], function(o) {
         return parseFloat((o.model_weight)?o.model_weight:o.weight);
      });
      let total_weight =  _.sumBy(changeData[0]['constituents'], function(o) {
         return parseFloat((o.weight)?o.weight:o.model_weight);
      });

      console.log("total_modal_weight", total_modal_weight);
      let constituents = changeData[0]['constituents'].map((v,k)=>{
        if(!v.lock){
           return Object.assign({},{...v},
            {
            model_weight:(Math.round(total_modal_weight) !== 100) ? Number(Number((v.model_weight)?v.model_weight:v.weight) + (100 - total_modal_weight)/ total_modal_weight * Number((v.model_weight)?v.model_weight:v.weight)).toFixed(2): (v.model_weight)?v.model_weight:v.weight,
            weight: (Math.round(total_weight) !== 100) ? Number(Number(v.weight) + (100 - total_weight)/ total_weight * Number(v.weight)).toFixed(2): Number(v.weight)
            }); 
          }else{
        return Object.assign({},{...v}, { model_weight:(v.model_weight)?v.model_weight:v.weight, weight: v.weight });            
          }     
      })
      let result = state.portfolios.map((v,k)=>{
        if(v.id == router_id){
          return Object.assign({},{...v}, {"constituents":constituents})  
        }
        return v
      });
      state.portfolios = result;
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }