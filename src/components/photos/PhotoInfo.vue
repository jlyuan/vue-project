<template>
    <div class="photo-container">
        <h3>{{ photo.title }}</h3>
        <p class="subtitle">
            <span>发布时间：{{ photo.pubTime }}</span>
            <span>点击次数：{{photo.clickCount}}</span>
        </p>
        <hr>
        <!--缩略图-->
        <div id="thumbs">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>

        <!-- 图片描述-->
        <p class="info">{{photo.info}}</p>
        <!--评论-->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
    import cmt from '../sub/comment.vue'
    //缩略图
    import Vue from 'vue'
    import VuePreview from 'vue-preview'
    Vue.use(VuePreview);

    export default {
        name: "PhotoInfo",
        data:function(){
            return{
                id:this.$route.params.id,
                photo:{},
                slide1:[],
            }
        },
        components:{
            'cmt-box':cmt,
        },
        created:function(){
            this.getPhoto(this.id);
            this.getThumbs(this.id);
        },
        methods:{
            getPhoto:function(photoId){
                var photo = {
                    title:"小米9新手机全面屏" + photoId,
                    pubTime:new Date().Format("yyyy-MM-dd hh:mm:ss"),
                    clickCount:Math.floor(Math.random()*2000),
                    info:"全新小米9plus星手机骁龙855,显示效果,很好 运行速度 还可以 电池续航: 续航一般，充电很快" +
                        "全新小米9plus星手机骁龙855,显示效果,很好 运行速度 还可以 电池续航: 续航一般，充电很快",
                };
                this.photo = photo;
            },
            getThumbs:function(photoId){
                var urls = [
                    "https://img.alicdn.com/imgextra/i3/1704632922/O1CN01gDXXN41XSJnx0aXpx_!!1704632922.jpg",
                    "https://img.alicdn.com/tfs/TB1kpmUSVXXXXaIXpXXXXXXXXXX-223-377.png",
                    "https://gw.alicdn.com/bao/uploaded/i2/3044157098/TB28p81owKTBuNkSne1XXaJoXXa_!!3044157098.jpg",
                    "https://gw.alicdn.com/bao/uploaded/i2/1704632922/O1CN01zxirCA1XSJnwTR9Xf_!!1704632922.jpg",
                    "https://gw.alicdn.com/bao/uploaded/i2/1704632922/O1CN01zxirCA1XSJnwTR9Xf_!!1704632922.jpg",
                    "https://gw.alicdn.com/bao/uploaded/i2/2580518325/O1CN01MfSxJh2BMtkUe4HXO_!!2580518325.jpg",
                ];
                var items = [];
                for(var i=0;i<urls.length;i++){
                    var item ={
                        src:urls[i],
                        msrc:urls[i],
                        alt: 'picture1',
                        title: 'Image Caption 1',
                        w:600,
                        h:400,
                    };
                    items.push(item);
                }
                this.slide1 = items;
            },
            handleClose () {
                console.log('close event')
            }
        }
    }
</script>

<style>
    .photo-container{padding: 0 2px;}
    .photo-container h3{font-size:18px;line-height:28px;text-align:center;color:#26a2ff}
    .subtitle{
        display:flex;
        justify-content: space-between;
    }
    #thumbs .my-gallery{text-align:center;}
    #thumbs .my-gallery figure{height:120px;margin:4px;display:inline-block;}
    #thumbs .my-gallery>figure>a>img{width:112px;height:116px;border:1px solid #ccc}
    .photo-container .info{color:black;line-height:24px;}
</style>