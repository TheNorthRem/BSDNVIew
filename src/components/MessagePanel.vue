<template>
  <div class="panel">
        <div class="front">
            <ul v-infinite-scroll="load" class="infinite-list1" style="overflow: auto">
            <li v-for="i in 10" :key="i" class="infinite-list-item1">
                <MessageDetail  username="hhhh" lastMessage="wwwwqqqwwqeqweqwew" srcs="http://localhost:8081/image/al.png"/>
            </li>
            </ul>
        </div>
        <div class="bott">
            <el-input v-model="Input" class ="inputStyle" size="large"  placeholder="Please input" >
              <template #append>
                <el-button @click="send">发送</el-button>
              </template>
            </el-input>
        </div>
  </div>
</template>

<script>
    import {ElInput,ElButton} from '@/../node_modules/element-plus'
    import MessageDetail from '@/components/MessageDetail.vue'
    export default {
        
        
        
        data(){
            return {
                Input:''
            }
        },
        props:{
            
            nickName: String,
            toId: String
        },
        components: {
            MessageDetail,
            ElInput,
            ElButton
        }
        ,
        methods:{
            send(){

            }
        },
        mounted(){
            console.log(this.toId)
            console.log(this.nickName)
            getMessage({
               'userFromId': localStorage.getItem('ID'),
                'userToId': this.toId
            }).then(res=>{
                console.log(res.data)   
            })
        }
    }
</script>
<style>
   

    .front{
        width: 100%;
        height: 400px;
        background-color: aqua;
    }

    .bott{
        width: 100%;
        height: 200px;
        background-color: rgb(255, 255, 255) ;
    }
     .infinite-list1 {
        height: 400px;
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .infinite-list .infinite-list-item1 {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        background: var(--el-color-primary-light-9);
        margin: 0px;
        color: var(--el-color-primary);
    }
    .infinite-list .infinite-list-item1 + .list-item {
        margin-top: 10px;
    }

    
   
   
</style>