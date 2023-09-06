<template >

  <div class= "appp" @click="changeUserId" >
        <img class="imgg" :src= this.srcs />
        <div class="txtttt"> 
            <p class="ssss">{{username}}</p>
            <p class="messs">{{message}}</p>
        </div>
  </div>

</template>

<script>



export default {
    data(){
        return{
            message:'',
        }
    }
    ,
    props:{
        username:String,
        lastMessage:String,
        srcs:String,
        userId:Number,
        curId:Number
    },
    mounted(){
        console.log(this.username)
        console.log(this.srcs)
    
        if(this.lastMessage.length>10){
            let sub=this.lastMessage.substring(0,10);
            this.message = sub+"..."
        }else{
            this.message=this.lastMessage
        }
    },
    methods:{
            changeUserId(){
                console.log(this.userId)
                //将当前点击的用户id传给父组件
                this.$emit('changeUserId',this.userId)
            }
        }
   
}
</script>

<style>

    .appp{
        width: 90%;
        height:60%;
        display: flex;
        position: relative;
        align-items : left;
        
    }
    .imgg{
        height: 100%;
        width: 20% ; 
        align-self: center;
        margin-left: 20px;
        border-style: solid;
        border-radius: 50%;
        border-width: 1px;
    }

    .txtttt{
        margin-left: 25px ;
        display: flex;
        flex-direction: column;
    }
    .ssss{
        position: relative;
        align-self: top;
        font-size: 20px;
        margin-bottom: 0px;
        margin-top: 0px;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 133.333% */
        letter-spacing: -0.13px;
    }
    .messs{
        margin-bottom: 0px;
        margin-top: 2%;
        margin-left: 25px;
        color: rgb(152, 151, 149);
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 160% */
        letter-spacing: -0.13px;
    }
</style>