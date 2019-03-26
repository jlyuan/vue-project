<template>
    <div class="cart-container">
        <div class="mui-card" v-for="(goods,index) in goodsList">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <!--<mt-switch  @change="turn">Switch</mt-switch>-->
                    <div :class="['mui-switch','mui-switch-mini', 'mui-switch-blue', goods.selected?'mui-active':'']"
                         @click="switchClick(goods.selected,goods.id)">
                        <div class="mui-switch-handle"></div>
                    </div>
                    <img src="../../images/mi.png" alt="">
                    <div class="info">
                        <h5>{{goods.title}}</h5>
                        <p>
                            <span class="price">￥{{goods.price}}</span>
                            <numbox @account="account" :initCount="$store.getters.getCartGoodsCount[goods.id]" :goodsid="goods.id"></numbox>
                            <span class="del" @click="delGoods(index)">删除</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner total_info_container">
                    <div class="total_info">
                        <p>总计(不含运费)</p>
                        <p>已购选商品 <span class="num">{{selectedAllCount}}</span>件，
                            总价：<span class="num">￥{{total_money}}</span>
                        </p>
                    </div>
                    <button type="button" class="mui-btn mui-btn-danger">去结算</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import numbox from "../sub/NumberBox.vue"

    export default{

        data:function(){
            return{
                selected:false,
                goodsList:[],//购物车商品列表
                selectedAllCount:0,
                total_money:0,
            }
        },
        created:function(){
         this.getCartGoodsList();
         this.account();
        },
        components:{
            numbox,
        },
        methods:{
            getCartGoodsList:function(){
                var items = [];
                this.$store.state.cart.forEach(function(item){
                   var tmp = {
                        id:item.id,
                        selected:item.selected,
                        price:item.price,
                        title:"小米9新手机全面屏" + item.id,
                        count:item.count
                    };
                    items.push(tmp);
                });
                this.goodsList = items;
            },
            account:function(){
                this.selectedAllCount = 0;
                this.total_money = 0;
                var count = 0;
                var money = 0;
                this.$store.state.cart.forEach(function(item){
                    if(item.selected){
                        count += item.count;
                        money += item.count*item.price;
                    }

                });
                this.selectedAllCount = count;
                this.total_money = money;
            },
            switchClick:function(flag,id){
                flag = !flag;
                this.$store.commit('updateCartGoodsSelected',{id:id,selected:flag});
                this.getCartGoodsList();
                this.account();
            },
            delGoods:function(index){
                this.goodsList.splice(index,1);
                this.$store.commit("delCartGoods",index);
            },
        }

    }
</script>

<style scoped>
    .mui-card-content-inner{height:104px;padding-left:4px;}
    .cart-container{background:#eee;overflow:hidden;}
    .mui-card-content-inner img{width:40px;height:60px;margin-left:6px;}
    .info{display:inline-block;transform: translate(0,-10px);}
    .info h5{ text-indent:1em;height:24px;font-size:16px;color:black;}
    .info p{height:28px;line-height:28px;}
    .info .price{ font-size:12px;color:red;}
    .info .del{ font-size:12px;color:blue;}
    input{width:50px;height:50px;}
    .mui-switch{display:inline-block;transform: translate(0, -20px);}
    .total_info{display:inline-block;height:60px;}
    .total_info_container{height:90px;}
    .mui-btn{transform:translate(22px,14px)}
    .num{color:red;}
</style>