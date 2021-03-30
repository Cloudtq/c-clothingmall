<template>
  <div v-if="Object.keys(goods).length !== 0" class="info-content">
        <div class="info-title"><div>{{goods.title}}</div></div>
        <div class="info-price">
            <div>
              <span class="real-price">￥{{goods.realPrice}}</span>
              <span class="old-price">{{goods.oldPrice}}</span>
              <span class="discount">{{goods.discount}}</span>
            </div>
            <div class="info-columns">
                <span>{{goods.columns[0]}}</span>
                <span>{{goods.columns[1]}}</span>
                <span>{{goods.services[goods.services.length-1].name}}</span>
            </div>
        </div>
        <div class="info-services">
            <div class="service-items" v-for="index in goods.services.length-1" :key="index">
                <img  class="info-img" :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </div>
        </div>
  </div>

</template>
<script>
export default { 
   name: "DetailBaseInfo" ,
   props:{
       goods:{
           type:Object,
           default(){
               return{}
           }
       }
   }
} 
</script>
<style scoped>

.info-title{
    padding: 12px 8px;
    color: black;
    font-size: 16px;
}

.info-price{
    margin:0px 5px;

}

.real-price{
    font-size: 24px ;
    color: var(--color-tint);
}

.old-price{
    color: #A0A0A0;
    margin-left: 4px;
    font-size: 14px;
    text-decoration: line-through;
}

.discount{
    position: relative;
    background-color: var(--color-tint);
    color: var(--color-background);
    font-size: 12px;
    border-radius: 40px;
    padding: 3px;
    bottom: 8px;
}

.info-columns{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 14px;
    color: #A0A0A0;
    padding-bottom: 5px;
    border-bottom: 2px solid #FFF5F0;

}

.info-img{
    width: 14px;
    height: 14px;
}

.info-services{
    font-size: 13px;
    color: black;
    margin: 18px 5px;
    display: flex;
    justify-content: space-between;
}

.info-content{
    border-bottom: 4px solid #F0F0F0;
}

.service-items{
    overflow: hidden;
    text-overflow:clip;
    white-space: nowrap;
}

</style>