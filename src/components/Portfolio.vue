<template>
 <div class="container" >
  <h1>{{title}}</h1>	 
		<div class="col-md-4" v-for="(item, index) in getPortfolios">
			<div class="card">
				<div class="card-header">
					<img class="card-header-img" src="../assets/header_img.png" />
					<h1 class="goal-name">{{item.name}}</h1>
				</div>
				<div class="card-body col-xs-12">
					<div class="row">
						<div class="col-xs-5 cell-text">Volatility</div>
						<div class="col-xs-7 cell-text">{{item.volatility}}</div>
					</div>
					<div class="row">
						<div class="col-xs-5 cell-text">1 Month Return</div>
						<div class="col-xs-7 cell-text">1 Month Return</div>
					</div>
					<div class="row">
						<div class="col-xs-5 cell-text">Mean Return</div>
						<div class="col-xs-7 cell-text">{{item.mean_return}}</div>
					</div>
					<div class="row">
						<div class="col-xs-5 cell-text">Min Investment</div>
						<div class="col-xs-7 cell-text">Min Investment</div>
					</div>
					<div class="row">
						<div class="col-xs-5 cell-text">Eligibility</div>
						<div class="col-xs-7 cell-text">Available for all investor</div>
					</div>
					<div class="row">
						<router-link :to="{ name: 'PortfolioDetails', params: { id: item.id }}" class="col-xs-12 btn btn-danger">Explore Investment Idea</router-link to="/foo">
					</div>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Portfolio',
  data () {
    return {
	  title: 'Portfolio',
	}
  },
   computed: {
    ...mapGetters('portfolio', {
    getPortfolios: 'getPortfolios',
    }),
  }
}
</script>
<style>

</style>

