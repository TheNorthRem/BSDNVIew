<template>

  <div class= "app1">
        <img class="img1" :src= this.srcs />
        <div class="txt1"> 
            <p class="use1">{{username}}</p>
            <p class="mes1">{{lastMessage}}</p>
        </div>
  </div>

</template>

<script>


export default {
    data(){
        return{
            
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
        
    }

   
}
</script>

<style>
     .app1{
        width: 100%;
        height: 100px;
        background-color: rgb(236, 240, 240);
        display: flex;
        position: relative;
        align-items : left;
        border-style: solid;
        flex-direction: row;
    }
    .img1{
        height: 50px !important;
        width: 50px !important; 
        align-self: center;
        margin-left: 20px;
        border-style: solid;
        border-radius: 50%;
        border-width: 1px;
    }

    .txt1{
        margin-left: 25px ;
        display: flex;
        flex-direction: column;
        height: 100px;
    }
    .use1{
        position: relative;
        align-self: top;
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .mes1{
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 25px;
        color: rgb(152, 151, 149);
    }
    
    
</style>