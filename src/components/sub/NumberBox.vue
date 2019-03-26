<template>
    <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' :data-numbox-max="max">
        <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
        <input ref="num" id="numbox-input" class="mui-numbox-input" type="number" :value="initCount" @change="transCount" :goodsid="goodsid"/>
        <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        name: "NumberBox",
        mounted:function(){
            mui(".mui-numbox").numbox();
        },
        props:['max','initCount','goodsid'],
        methods:{
            transCount:function(){
                var num = this.$refs.num.value;
                this.$emit("getCount",parseInt(num));
                var goods = {id:this.goodsid,count:parseInt(this.$refs.num.value)};
                this.$store.commit('updateCart',goods);
                this.$emit("account");
            }
        }
    }
</script>

<style>
    .mui-numbox{width:140px!important;}
</style>