/**
 * Created by jlyuan on 2019/3/15.
 */


import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
import home from './components/tabbar/HomeContainer.vue'
import cart from './components/tabbar/CartContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import search from './components/tabbar/SearchContainer.vue'
import newsList from './components/news/NewsList.vue'
import newsInfo from './components/news/NewsInfo.vue'
import photoList from './components/photos/PhotoList.vue'
import photoInfo from './components/photos/PhotoInfo.vue'
import goodsList from './components/goods/GoodsList.vue'
import goodsInfo from './components/goods/GoodsInfo.vue'
import goodsComment from './components/goods/GoodsComment.vue'


var router = new VueRouter({
    routes:[
        {path:'/home',component:home},
        {path:'/home/newslist',component:newsList},
        {path:'/home/goodsList',component:goodsList},
        {path:'/home/goodsInfo/:id',component:goodsInfo},
        {path:'/home/goodsComment/:id',component:goodsComment},
        {path:'/home/photoList',component:photoList},
        {path:'/home/photoInfo/:id',component:photoInfo},
        {path:'/home/newsinfo/:id',component:newsInfo},
        {path:'/cart',component:cart},
        {path:'/member',component:member},
        {path:'/search',component:search},
        {path:'/',redirect:'/home'},
    ],
    linkActiveClass:'mui-active'
});

export default router