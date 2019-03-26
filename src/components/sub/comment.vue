<template>
    <div>
        <h4>发表评论</h4>
        <textarea name="cmt_edit" cols="30" rows="4" maxlength="120"
                  placeholder="请发表你的评论（最多120个字）" v-model="msg">

        </textarea>
        <mt-button type="primary"  size="large" @click="pubComments">发表你的评论</mt-button>
        <ul class="cmt_list">
            <li v-for="(cmt, index) in cmts" :key="index">
                <h5>第{{ index +1 }}楼 用户: {{cmt.user}} 发表时间:{{cmt.time}}</h5>
                <p>{{cmt.content}}</p>
            </li>
        </ul>

        <mt-button  @click="getMore" size="large" type="danger" plain>加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        name: "comment",
        data:function(){
            return{
                pageIndex:1,
                cmts:[],
                msg:'',
            }
        },
        props:['id'],
        created:function(){
          this.getComments();
        },
        methods: {
            getComments: function () {
                var items = [];
                for(var i=0;i<10;i++){
                    var cmt = {
                        user:this.id +'test' + i ,
                        time:"2018-01-02 12:20:30",
                        content:"artId" + this.id + ", pIndex" + this.pageIndex+",呵呵" + Math.floor(Math.random()*10000)
                    };
                    items.push(cmt);
                }
                this.cmts = this.cmts.concat(items);
            },
            getMore:function(){
                this.pageIndex ++;
                this.getComments();
            },
            pubComments:function(){
                if( this.msg == ""|| this.msg.trim()==""){
                    Toast({
                        message: '内容不能为空',
                        position: 'middle',
                        duration: 2000
                    });
                }else{
                    var cmt = {
                        user:this.id +'test' ,
                        time:new Date().Format("yyyy-MM-dd hh:mm:ss"),
                        content:"artId" + this.id + ", pIndex" + this.pageIndex + this.msg,
                    };
                    this.cmts.unshift(cmt);
                    this.msg = '';
                }
            }
        },
    }
</script>

<style scoped>
    .cmt_list{padding:0;}
    .cmt_list li{list-style: none;}
    .cmt_list li h5{font-size:14px;line-height:26px;width:100%;background-color:#ccc;}
    .cmt_list li p{text-indent:2em;width:100%;}
</style>