import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	strict:true,
	state:{
		products:[
	        {name:"马云",price:200},
	        {name:"马化腾",price:140},
	        {name:"马冬梅",price:20},
	        {name:"马蓉",price:10}
	      ]
	},
	getters:{//render 之前触发
		saleProducts: (state) =>{
			console.log('1')
			var saleProducts = state.products.map(product =>{
		        return {
		          name: "**" + product.name + "**",
		          price: product.price / 2
		        };
		    });
		    return saleProducts;
		}
	},
	mutations:{// Actions 触发 mutations
		reducePrice: (state,payload) =>{
			console.log('3')
			// setTimeout(function(){
				state.products.forEach(product =>{
			        product.price -= payload;
			    })
		    // },3000);
		}
	},
	actions:{//页面点击触发 Actions
		reducePrice:(context,payload) =>{
			console.log('2')
			setTimeout(function(){
				context.commit("reducePrice",payload);
			},2000);
		}
	}
});






