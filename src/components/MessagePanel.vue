<template>
  <div class="panel">
        <div class="front">
            <keep-alive>
            <ul v-infinite-scroll="load" class="infinite-list1" style="overflow: auto">
            <li v-for="i in messageLen" :key="i" class="infinite-list-item1">
                <MessageDetail  :username= this.messages[i-1].nickName :Message= this.messages[i-1].content  srcs="http://localhost:8081/image/al.png"/>
            </li>
            </ul>
            </keep-alive>
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
    import {getMessage,sendMessage} from '@/http/api';
    export default {
        
        
        
        data(){
            return {
                Input:'',
                messages:[],
                messageLen:''
            }
        },
        props:{
            
            nickName: String,
            toId: Number
        },
        components: {
            MessageDetail,
            ElInput,
            ElButton
        }
        ,
        methods:{
            send(){
                sendMessage({
                            'userFromId': localStorage.getItem('ID'),
                            'userToId' : this.toId,
                            'content':this.Input
                }).then(res=>{
                    console.log(res)
                    getMessage({
                        'userFromId': localStorage.getItem('ID'),
                        'userToId': this.toId
                    }).then(res=>{
                        console.log(res.data)   
                        this.messages=res.data.data
                        this.messageLen=res.data.data.length;
                    })
                        
                
                    this.Input=''
                })
                    
                
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
                this.messages=res.data.data
                this.messageLen=res.data.data.length;
            })
        }
    }
</script>
<style>
   

    .front{
        width: 100%;
        height: 400px;
        background-color: rgb(248, 251, 251);
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