<template>
    <div class="app-container">
        <!--header 部分-->
        <mt-header fixed title="Franklin Vue项目">
			<span @click="goBack" slot="left" v-show="flag">
				<mt-button icon="back">返回</mt-button>
			</span>
		</mt-header>

        <transition name="center-part">
            <router-view></router-view>
        </transition>

        <!--底部-->
        <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item1">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/member" class="mui-tab-item1" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/cart" class="mui-tab-item1">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span id="badge" class="mui-badge">{{this.$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item1">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>
<script>
 export default{
 	data:function(){
 		return {
 			flag:false,
		}
	},
 	methods:{
 		goBack:function(){
 			this.$router.go(-1);
		},

	},
	 watch:{
 		"$route.path":function(newVal){
			if(newVal == '/home'){
				this.flag=false;
			}else{
				this.flag = true;
			}
 		}
	 },
 }

</script>
<style scoped>
.app-container{margin-top:40px;padding-bottom:50px;overflow-x:hidden}
.mint-header{z-index:999;font-size:20px;}

/*中间部分内容切换*/
.center-part-enter{
  transform: translateX(100%);
  opacity: 0;
}
.center-part-leave-to{
  transform: translateX(-100%);
  opacity: 0;
  position:absolute;
}
.center-part-enter-active,.center-part-leave-active{
    transition:all 0.4s ease;
}
/*修改mui-tab-item类名解决tabbar不能切换问题*/
.mui-bar-tab .mui-tab-item1.mui-active {
	color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
	display: table-cell;
	overflow: hidden;
	width: 1%;
	height: 50px;
	text-align: center;
	vertical-align: middle;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
	top: 3px;
	width: 24px;
	height: 24px;
	padding-top: 0;
	padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
	font-size: 11px;
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>