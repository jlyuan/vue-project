<template>
    <div class="goodsInfo-container">
        <!--轮播图-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipe :pics="pics"></swipe>
                </div>
            </div>
        </div>
        <!--小球-->
        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter">
            <div class="ball" ref="ball" v-show="showBall"></div>
        </transition>

        <!--商品购买-->
        <div class="mui-card">
            <div class="mui-card-header">小米9新手机全面屏</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                      <p class="price">
                          <span class="market_price">市场价:<b>￥1698</b></span>&nbsp;&nbsp;&nbsp;
                          <span class="sell_price">销售价:<b>￥{{price}}</b></span>
                      </p>
                    <p>购买数量：<numbox @getCount="getSelectedCount" :max="stock_num"></numbox></p>
                    <button type="button" class="mui-btn mui-btn-primary">立即购买</button>
                    <button type="button" class="mui-btn mui-btn-danger" @click="goCart">加入购物车</button>
                </div>
            </div>
        </div>
        <!--商品参数-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：</p>
                    <p>库存情况：{{stock_num}}件</p>
                    <p>上架时间：</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button size="large" type="primary">图文介绍</mt-button>
                <mt-button size="large" type="danger" @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import swipe from "../sub/swipe.vue"
    import numbox from "../sub/NumberBox.vue"

    export default {
        name: "GoodsInfo",
        data:function(){
            return{
                id:this.$route.params.id,
                pics:[],
                showBall:false,
                selectedCount:1,
                stock_num:80,
                price:900,

            }
        },
        created:function(){
          this.getLunbotu(this.id);
        },
        methods:{
            getLunbotu:function(goodsId){
                var urls = [
                    "https://img.alicdn.com/imgextra/i3/1704632922/O1CN01gDXXN41XSJnx0aXpx_!!1704632922.jpg",
                    "https://img.alicdn.com/tfs/TB1kpmUSVXXXXaIXpXXXXXXXXXX-223-377.png",
                    "https://gw.alicdn.com/bao/uploaded/i2/3044157098/TB28p81owKTBuNkSne1XXaJoXXa_!!3044157098.jpg",
                    "https://img.alicdn.com/tfs/TB1kpmUSVXXXXaIXpXXXXXXXXXX-223-377.png",
                    "https://gw.alicdn.com/bao/uploaded/i2/3832520428/O1CN011F23y0G44JiiT2c_!!3832520428.jpg",
                    "https://gw.alicdn.com/bao/uploaded/i2/2580518325/O1CN01MfSxJh2BMtkUe4HXO_!!2580518325.jpg",
                ];
                var items =[];
                for(var i=0;i<urls.length;i++){
                    var item = {
                        url:urls[i],
                        title:"小米9新手机全面屏" + "pIndex" +this.goodsId ,
                    };
                    this.pics.push(item);
                }
            },
            goComment:function(id){
                this.$router.push({path:"/home/goodsComment/" + id});
            },
            goCart:function(){
                this.showBall = !this.showBall;
                //将商品存储到store
                var goods = {
                    id:this.id,
                    price:this.price + Math.floor(Math.random()*200),
                    count:this.selectedCount,
                    selected:true
                };
                this.$store.commit('addToCart',goods);

            },
            beforeEnter:function(el){
                el.style.transform="translate(0,0)";
            },
            enter:function(el,done){
                el.offsetLeft;
                var ballPosition = this.$refs.ball.getBoundingClientRect();
                //console.log(ballPosition);
                var BadgePosition = document.getElementById('badge').getBoundingClientRect();
                var x = BadgePosition.x - ballPosition.x;
                var y = BadgePosition.y - ballPosition.y;
                el.style.transform = "translate("+x+"px,"+y+"px)";
                el.style.transition = 'all 1s ease';
                done();
            },
            afterEnter(el){
                // 动画完成之后，会调用 afterEnter
                this.showBall = !this.showBall;
            },
            getSelectedCount:function(num){
                this.selectedCount = num;
                console.log(num);
            }
        },
        components:{
            "swipe":swipe,
            "numbox":numbox,
        }
    }
</script>

<style scoped>
    .goodsInfo-container{background:#eee;overflow:hidden;}
    .mui-card-content-inner p{color:black;font-size:14px;}
    .market_price b{text-decoration: line-through}
    .sell_price b{color:red;}
    .ball{width:15px;height:15px;border-radius:50%;background:red;
    position:absolute;top:388px;left:146px;z-index:99;}
    /*transform:translate(92px,233px);}*/
</style>