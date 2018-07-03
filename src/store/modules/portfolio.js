const state = {
    portfolios:  [
      {
      "id": 1,
      "name": "HONGKONG TECHNOLOGY",
      "volatility": "26.8%",
      "mean_return": "2.96%",
      "currency": "SGD",
      "constituents": [
        {
          "weight": "3%",
          "instrument": {
            "id": 1,
            "name": "CSX corp",
            "type": "Equity"
          }
        },
        {
          "weight": "17%",
          "instrument": {
            "id": 2,
            "name": "cummins Inc",
            "type": "Equity"
          }
        },
        {
          "weight": "10%",
          "instrument": {
            "id": 3,
            "name": "Eaton Corp PLC",
            "type": "Equity"
          }
        },
        {
          "weight": "10%",
          "instrument": {
            "id": 4,
            "name": "Fedx corp",
            "type": "Equity"
          }
        },
        {
          "weight": "10%",
          "instrument": {
            "id": 5,
            "name": "Haris corp",
            "type": "Equity"
          }
        },
        {
          "weight": "10%",
          "instrument": {
            "id": 6,
            "name": "Norfolk Southern Corp",
            "type": "Bond"
          }
        },
        {
          "weight": "5%",
          "instrument": {
            "id": 7,
            "name": "General Dynamics",
            "type": "Bond"
          }
        },
        {
          "weight": "15%",
          "instrument": {
            "id": 8,
            "name": "hal",
            "type": "Bond"
          }
        },
        {
          "weight": "20%",
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
      "volatility": "28.01%",
      "mean_return": "24.11%",
      "currency": "SGD",
      "constituents": [
        {
          "weight": "3%",
          "instrument": {
            "id": 1,
            "name": "CSX corp",
            "type": "Equity"
          }
        },
        {
          "weight": "17%",
          "instrument": {
            "id": 2,
            "name": "cummins Inc",
            "type": "Equity"
          }
        },
        {
          "weight": "10%",
          "instrument": {
            "id": 3,
            "name": "Eaton Corp PLC",
            "type": "Equity"
          }
        },
        {
          "weight": "10%",
          "instrument": {
            "id": 4,
            "name": "Fedx corp",
            "type": "Equity"
          }
        },
        {
          "weight": "10%",
          "instrument": {
            "id": 5,
            "name": "Haris corp",
            "type": "Equity"
          }
        },
        {
          "weight": "10%",
          "instrument": {
            "id": 6,
            "name": "Norfolk Southern Corp",
            "type": "Bond"
          }
        },
        {
          "weight": "5%",
          "instrument": {
            "id": 7,
            "name": "General Dynamics",
            "type": "Bond"
          }
        },
        {
          "weight": "15%",
          "instrument": {
            "id": 8,
            "name": "hal",
            "type": "Bond"
          }
        },
        {
          "weight": "20%",
          "instrument": {
            "id": 10,
            "name": "USD CASH",
            "type": "CASH"
          }
        }
      ]
  },{
      "id": 3,
      "name": "US TECH LEADERS",
      "volatility": "19.84%",
      "mean_return": "26.64%",
      "currency": "SGD",
      "constituents": [
        {
          "weight": "3%",
          "instrument": {
            "id": 1,
            "name": "CSX corp",
            "type": "Equity"
          }
        },
        {
          "weight": "17%",
          "instrument": {
            "id": 2,
            "name": "cummins Inc",
            "type": "Equity"
          }
        },
        {
          "weight": "10%",
          "instrument": {
            "id": 3,
            "name": "Eaton Corp PLC",
            "type": "Equity"
          }
        },
        {
          "weight": "10%",
          "instrument": {
            "id": 4,
            "name": "Fedx corp",
            "type": "Equity"
          }
        },
        {
          "weight": "10%",
          "instrument": {
            "id": 5,
            "name": "Haris corp",
            "type": "Equity"
          }
        },
        {
          "weight": "10%",
          "instrument": {
            "id": 6,
            "name": "Norfolk Southern Corp",
            "type": "Bond"
          }
        },
        {
          "weight": "5%",
          "instrument": {
            "id": 7,
            "name": "General Dynamics",
            "type": "Bond"
          }
        },
        {
          "weight": "15%",
          "instrument": {
            "id": 8,
            "name": "hal",
            "type": "Bond"
          }
        },
        {
          "weight": "20%",
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
    getDetailPortfolios: (state, getters, rootState) => {
      return state.detailPortfolios;
    },  
  }
  
  // actions
  const actions = {
    portfolioDetailsAction({ commit, state }, param_id){
      let result = state.portfolios.filter((v,k)=>{
        return (v.id == param_id)
      });
      commit('setDetailPortfolios', {
        data:result
      });
    }
  }
  
  // mutations
  const mutations = {
    setDetailPortfolios (state, {data}) {
      state.detailPortfolios = data;
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }