<template>
  <div class="toast" v-show="isShow">
      {{message}}
  </div>
</template>
<script>
export default { 
   name: "Toast",
   data(){
       return {
           message:'',
           isShow:false
       }
   },
   methods:{
       show(message='默认文字',duration=2000){
            this.isShow = true
            this.message = message
            setTimeout(()=>{
                this.isShow = false
           },duration)
       }
   }
} 
</script>
<style scoped>

    .toast{
        transform: translate(-50%,-50%);
        color: #fff;
        position: fixed;
        top: 50%;
        left: 50%;
        background-color: rgba(0, 0, 0, .7);
        padding: 8px 10px;
        z-index: 999;
    }
</style>