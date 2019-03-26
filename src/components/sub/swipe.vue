<template>
    <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item,index) in pics" :key=index><img :src="item.url" :alt="item.msg"></mt-swipe-item>
    </mt-swipe>
</template>

<script>
    export default {
        name: "swipe",
        props:["pics"],
    }
</script>

<style scoped>
    .mint-swipe {
        height: 200px;
        background-color: yellowgreen
    }

    .mint-swipe img {
        height: 200px;
        width: 100%;
    }
</style>