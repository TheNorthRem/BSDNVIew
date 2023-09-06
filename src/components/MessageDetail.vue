<template>

  <div class= "app1">
        <img class="img1" :src= this.srcs />
        <div class="txt1"> 
            <p class="use1">{{username}}</p>
            <p class="mes1">{{Message}}</p>
        </div>
        <div class="time"> 
            <p>{{time}}</p>
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
        Message:String,
        srcs:String,
        time:String
    },
    mounted(){
        console.log(this.username)
        console.log(this.srcs)
        
    }

   
}
</script>

<style>
     .app1{
        width: 99%;
        height: 90px;
        background: #FBFBFA;
        display: flex;
        position: relative;
        align-items : left;
        border-radius: 15px;
        border: 2px solid #ffffff;
        flex-direction: row;
    }
    .img1{
        height: 50px !important;
        width: 50px !important; 
        align-self: center;
        margin-left: 20px;
        border: 2px solid #FFFEFC;
        border-radius: 50%;
        border-width: 1px;
    }

    .txt1{
        margin-left: 25px ;
        display: flex;
        width:75px;
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
    .time{
        align-self: right;
        margin-left: 100px;
    }
    
</style>