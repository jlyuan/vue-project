<template>
    <div>
        <cmt :id="id"></cmt>
    </div>
</template>

<script>
    import cmt from "../sub/comment.vue"
    export default {
        data:function(){
            return{
                id:this.$route.params.id,
            }
        },
        components:{
            cmt,
        }
    }
</script>

<style scoped>

</style>