<template>

  <div class= "appp">
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
        srcs:String
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
    }

   
}
</script>

<style>

    .appp{
        width: 90%;
        height: 100px;
        background-color: rgb(236, 240, 240);
        display: flex;
        position: relative;
        align-items : left;
        border-style: solid;
        
    }
    .imgg{
        height: 50px !important;
        width: 50px !important; 
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
        height: 100px;
    }
    .ssss{
        position: relative;
        align-self: top;
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .messs{
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 25px;
        color: rgb(152, 151, 149);
    }
</style>