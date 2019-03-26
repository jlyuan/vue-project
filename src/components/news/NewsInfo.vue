<template>
    <div>
        <h3>新闻详情页{{ id }}</h3>
        <div class="news_content">
            <p>【手机中国新闻】3月19日晚，vivo在海南三亚举办新品发布会，
                正式发布vivo X27系列手机产品。vivo X27使用零界全面屏，
                全新升降式摄像头和第六代屏幕指纹技术。这款手机有“雀羽蓝”、
                “粉黛金”和“翡翠色”三种配色。一张图揭秘vivo X27，
                错过发布会直播的朋友快过来看看吧。</p>
        </div>
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
    import cmt from '../sub/comment.vue'

    export default {
        name: "NewsInfo",
        //id: this.$route.params.id,
        data:function(){
            return {
                id: this.$route.params.id,
            }
        },
        components:{
            'cmt-box':cmt,
        }
    }
</script>

<style scoped>

</style>