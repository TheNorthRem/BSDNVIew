<template>
    <div class="viewSettings">
  
    <div class="left">
        <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="i in arrlen" :key="i" class="infinite-list-item">
            <UserPanel 
            :username= this.users[i-1].nickName 
            :userId="i"
            lastMessage= "n" 
            srcs="http://localhost:8081/image/al.png"
            :curId="curId"
            v-on:changeUserId="UserIdChanged($event)"
            />
        </li>
    </ul>

    </div>
        <div class = "right">
            <MessagePanel Id := this.curId />
        </div>
  
</div>
</template>

<script>

    import UserPanel from '@/components/UserPanel.vue'
    import MessagePanel from '@/components/MessagePanel.vue'
    import { getMessageUser } from '@/http/api';
    export default {
        
        data(){
            return{
                users:[],
                arrlen:'',
                curId: 5
            }
        },

        components: {
            UserPanel,
            MessagePanel
        },
        mounted(){
            getMessageUser({
                userId:localStorage.getItem('ID')
            }).then(res=>{
                    this.users=res.data.data
                    this.arrlen=res.data.data.length
                    console.log(this.users)
            })

        },
        methods:{
            //接收UserPanel子组件传来的userId，存到curID中
            UserIdChanged(id){
                this.curId=id
                console.log(this.curId)
            }
        }
        
        
    }
</script>

<style>
    .viewSettings{
        width: 100%;
        min-width: 1400px;/* 最小宽度 控制缩放时的布局不变形 */
        background: rgb(214, 209, 209);
        position: relative;
        display: flex;
        flex-direction: row;
    }

    .left{
        width: 20%;
        height: 466px;
        background: rgb(168, 161, 161);
    }

    .right{
        width: 80%;
        height: 466px;
        background: rgb(133, 96, 96);
    }

    .panel{
        z-index: 5;
    }

    .infinite-list {
        height: 466px;
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .infinite-list .infinite-list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        background: var(--el-color-primary-light-9);
        margin: 0px;
        margin-bottom: 3px;
        color: var(--el-color-primary);
        border-width: 1px;
        border-radius: 5px;
        border-block-color: rgb(242, 239, 239);
        box-shadow:5px 5px 8px 0px rgb(32, 32, 32);
        width: 100%;

    }
    .infinite-list .infinite-list-item + .list-item {
        margin-top: 10px;
    }
</style>>