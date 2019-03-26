<template>
    <div>
        <ul class="mui-table-view">
            <li v-for="(item, index) in newsList" :key="index" class="mui-table-view-cell mui-media">
                <router-link  :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.url">
                    <div class="mui-media-body">
                        <h3>{{item.title}}</h3>
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{item.pubTime}}</span>
                            <span>点击:{{item.click}} 次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NewsList",
        data:function(){
            return {
                newsList:[]
            }
        },
        created:function(){
          this.getNewsList()
        },
        methods:{
            getNewsList:function(){
                for(var i=1;i<16;i++){
                    var news = {
                        id:i,
                        title:"三部委发文：中小学幼儿园负责" + i,
                        pubTime: new Date().Format("yyyy-MM-dd hh:mm:ss"),
                        click:Math.floor(Math.random()*100),
                        url:'images/news1.jpg'
                    };
                    this.newsList.push(news);
                }
            }
        }
    }
</script>

<style scoped>
    .mui-media h3{font-size:16px;text-overflow:ellipsis;}
    .mui-media .mui-ellipsis{color:#007aff;display:flex;justify-content: space-between;}
</style>