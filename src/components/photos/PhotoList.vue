<template>
    <div>
        <!-- 顶部滑动选项菜单-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a v-for="item in cates" @click="getImgList(item.id)" :key="item.id" :class="['mui-control-item',item.id==0?'mui-active':'']" data-wid="tab-top-subpage-1.html">
                        {{item.title}}
                    </a>

                </div>
            </div>
        </div>
        <!--图片列表-->
        <ul class="img-list">
            <router-link tag="li" v-for="item in imgList" :to="'/home/photoinfo/'+ item.id" >
                <img v-lazy="item.url">
                <div class="info">
                    <h5>{{item.title}}</h5>
                    <p>{{item.info}}</p>
                </div>
            </router-link>
        </ul>

    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'

    export default {
        name: "PhotoList",
        data:function(){
            return {
                cates:[],//图片分类选项
                imgList:[]
            }
        },
        created:function(){
            this.getAllImgCategory();
            this.getImgList(0);
        },
        mounted:function(){
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{
            getAllImgCategory:function(){
                var items = [
                    {id:0,title:'全部'},
                    {id:1,title:'家具生活'},
                    {id:2,title:'卡通动漫'},
                    {id:3,title:'明星美女'},
                    {id:4,title:'植物花卉'},
                    {id:5,title:'励志壁纸'},
                    {id:6,title:'高清桌面'},
                ];
                this.cates = items;
            },
            getImgList:function(cateId){
                var urls = [
                    "https://img.alicdn.com/imgextra/i3/1704632922/O1CN01gDXXN41XSJnx0aXpx_!!1704632922.jpg",
                    "https://img.alicdn.com/tfs/TB1kpmUSVXXXXaIXpXXXXXXXXXX-223-377.png",
                    "https://img.alicdn.com/imgextra/i4/1704632922/O1CN01UKpjoC1XSJnvOoMBP_!!1704632922.jpg",
                    "https://img.alicdn.com/tfs/TB1kpmUSVXXXXaIXpXXXXXXXXXX-223-377.png",
                    "https://gw.alicdn.com/bao/uploaded/i2/3044157098/TB28p81owKTBuNkSne1XXaJoXXa_!!3044157098.jpg",
                    "https://gw.alicdn.com/bao/uploaded/i2/3044157098/TB28p81owKTBuNkSne1XXaJoXXa_!!3044157098.jpg",
                    "https://gw.alicdn.com/bao/uploaded/i2/1704632922/O1CN01zxirCA1XSJnwTR9Xf_!!1704632922.jpg",
                    "https://gw.alicdn.com/bao/uploaded/i2/3832520428/O1CN011F23y0G44JiiT2c_!!3832520428.jpg",
                    "https://gw.alicdn.com/bao/uploaded/i2/2580518325/O1CN01MfSxJh2BMtkUe4HXO_!!2580518325.jpg",
                    "https://gw.alicdn.com/bao/uploaded/i2/2580518325/O1CN01MfSxJh2BMtkUe4HXO_!!2580518325.jpg",
                    "https://img.alicdn.com/tfs/TB1kpmUSVXXXXaIXpXXXXXXXXXX-223-377.png",
                ];
                var items = [];
                for(var i=0;i<10;i++){
                    var item = {
                        id:'000' + cateId + i ,
                        url:urls[i],
                        title:'首发Xiaomi/小米' + 'cateId:'+cateId + '-'+i ,
                        info:'小米9新手机全面屏全新小米9plus星手机骁龙855,显示效果,很好 运行速度 还可以 电池续航: 续航一般，充电很快'
                    };
                    items.push(item);
                }
                this.imgList = items;
            },
        }
    }
</script>

<style scoped>
    * { touch-action: pan-y; }
    .img-list{padding: 6px;}
    .img-list li{list-style:none;padding-bottom:6px;position:relative;
        }
    .img-list .info{
        position:absolute;
        bottom:6px;
        background:rgba(0,0,0,0.4);
    }
    .img-list .info p{margin:0;text-indent:2em;color:#fff;}
    .img-list .info h5{text-align:center;color:#fff;}
    .img-list img{vertical-align:top;}
    .img-list img[lazy=loaded]{
        width: 100%;
        height: 300px;
        margin: auto;
    }
</style>