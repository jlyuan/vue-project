/**
 * Created by jlyuan on 2019/3/15.
 */

import Vue from 'vue'
import app  from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import router from './routers.js'

import Vuex from 'vuex'
Vue.use(Vuex);
var cart_str = localStorage.getItem("cart") || '[]';
var cart = JSON.parse(cart_str);
var store = new Vuex.Store({
    state:{
        cart:cart,//存购物车信息
        getAllCount:0, //所有商品总量
    },
    mutations:{
        //添加商品{id:001,price:999,count:1,selected:true}到购物车,
        // 如果商品存在购物车，就增加数量
        addToCart:function(state,goods){
            var flag = false;
            state.cart.find(function(item){
                if(item.id == goods.id){
                    item.count += goods.count;
                    flag = true;
                    return true;
                }
            });
            if(!flag){
                state.cart.push(goods);
            }
            //console.log(state.cart);
            //将购物车数据存储到本地，防止浏览器刷新数据丢失
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },
        //更新购物车商品数量
        updateCart:function(state,goods){
            state.cart.some(function(item){
                if(item.id == goods.id){
                    item.count = goods.count;
                    return true;
                }
            });
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },
        updateCartGoodsSelected:function(state,goods){
            state.cart.some(function(item){
                if(item.id == goods.id){
                    item.selected = goods.selected;
                    return true;
                }
            });
            console.log(goods);
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },
        delCartGoods:function(state,index){
            state.cart.splice(index,1);
            localStorage.setItem("cart",JSON.stringify(state.cart));
        }
    },
    getters:{
        //所有购物车商品数量和
        getAllCount:function(state){
            state.getAllCount=0;
            state.cart.forEach(function(item){
                state.getAllCount += item.count;
            });
            return state.getAllCount;
    },
        //获取商品id与count
        getCartGoodsCount:function(state){
            var o ={};
            state.cart.forEach(function(item){
                o[item.id] = item.count;
            });
            return o;
        },

    }
});


import { Header,Swipe,SwipeItem,Button,Switch} from 'mint-ui';
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 对Date的扩展，将 Date 转化为指定格式的String
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};


console.log('ok');

var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router,
    store
});
