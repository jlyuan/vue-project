<template>
    <div>
        <ul class="goodsList">
            <li v-for="(goods,index) in goodsList" :key="index" @click="goGoodsInfo(goods.goodsId)">
                <img :src="goods.src" alt="">
                <h5 class="title">{{goods.title}}</h5>
                <div class="info">
                    <p class="price">
                        <span class="new">￥{{goods.new_price}}</span>
                        <span class="old">￥{{goods.old_price}}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余{{goods.stock}}件</span>
                    </p>
                </div>
            </li>
        </ul>
        <mt-button  @click="getMore" size="large" type="danger">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        data:function(){
            return{
                goodsList:[],
                pIndex:1,
            }
        },
        created:function(){
            this.goodsList = this.getGoodsList();
        },
        methods:{
          getGoodsList:function(){
              var urls = [
                  "https://img.alicdn.com/imgextra/i3/1704632922/O1CN01gDXXN41XSJnx0aXpx_!!1704632922.jpg",
                  "https://img.alicdn.com/tfs/TB1kpmUSVXXXXaIXpXXXXXXXXXX-223-377.png",
                  "https://img.alicdn.com/imgextra/i4/1704632922/O1CN01UKpjoC1XSJnvOoMBP_!!1704632922.jpg",
                  "https://img.alicdn.com/tfs/TB1kpmUSVXXXXaIXpXXXXXXXXXX-223-377.png",
                  "https://gw.alicdn.com/bao/uploaded/i2/3044157098/TB28p81owKTBuNkSne1XXaJoXXa_!!3044157098.jpg",
                  "https://gw.alicdn.com/bao/uploaded/i2/3044157098/TB28p81owKTBuNkSne1XXaJoXXa_!!3044157098.jpg",
                  "https://img.alicdn.com/tfs/TB1kpmUSVXXXXaIXpXXXXXXXXXX-223-377.png",
                  "https://gw.alicdn.com/bao/uploaded/i2/1704632922/O1CN01zxirCA1XSJnwTR9Xf_!!1704632922.jpg",
                  "https://gw.alicdn.com/bao/uploaded/i2/3832520428/O1CN011F23y0G44JiiT2c_!!3832520428.jpg",
                  "https://gw.alicdn.com/bao/uploaded/i2/2580518325/O1CN01MfSxJh2BMtkUe4HXO_!!2580518325.jpg",
                  "https://gw.alicdn.com/bao/uploaded/i2/2580518325/O1CN01MfSxJh2BMtkUe4HXO_!!2580518325.jpg",
                  "https://img.alicdn.com/tfs/TB1kpmUSVXXXXaIXpXXXXXXXXXX-223-377.png",
              ];
              var items =[];
              for(var i=0;i<urls.length;i++){
                  var num = Math.floor(Math.random()*300);
                  var item = {
                      src:urls[i],
                      title:"小米9新手机全面屏" + "pIndex" +this.pIndex ,
                      new_price:899 + num,
                      old_price:1499 + num,
                      stock:num,
                      goodsId:num + num*100
                  };
                  items.push(item);
              }
              return items;
          },
            getMore:function(){
                this.pIndex ++;
                this.goodsList = this.goodsList.concat(this.getGoodsList());
            },
            goGoodsInfo:function(goodsId){
              this.$router.push({path:"/home/goodsInfo/" + goodsId});
            },
        },
    }
</script>

<style scoped>
    .goodsList{padding:0;}
    .goodsList li{list-style:none;width:48%;float:left;border:1px solid #ccc;
        margin:2px 1% 2px 1%;position:relative;height:260px;}
    .goodsList li img{width:100%;height:180px;}
    .goodsList li h5{width:100%;height:20px;line-height:20px;
            color:black;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
    .goodsList .info{background:#ccc;position:absolute;bottom:0;width:100%;}
    .goodsList .info p{margin:0;}
    .goodsList .price span{margin-right:16px;}
    .goodsList .price .new{color:red;}
    .goodsList .price .old{text-decoration:line-through}
    .goodsList .sell span{margin-right:40px;}
</style>