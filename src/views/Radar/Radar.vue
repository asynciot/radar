<template lang="jade">
  div
    Row
      i-col(span=8 v-for="item in list" ,:key="item.imei")
        Draw(:psMsg='item' )
</template>

<script>
  import Draw from './Draw.vue';
  export default {
    components: {
        'Draw': Draw
    },
    data() {
      return {
        list2:[],
        list:[{
          imei:11111111,
          created_time:"2020/01/04 16:41:23",
          data:[],
        },{
          imei:11111112,
          created_time:"2020/01/04 16:41:24",
          data:[],
        },{
          imei:11111113,
          created_time:"2020/01/04 16:41:23",
          data:[],
        },{
          imei:11111114,
          created_time:"2020/01/04 16:41:24",
          data:[],
        },{
          imei:11111115,
          created_time:"2020/01/04 16:41:23",
          data:[],
        },{
          imei:11111116,
          created_time:"2020/01/04 16:41:24",
          data:[],
        },]
      }
    },
    created() {
      for(let j=0;j<this.list.length;j++){
        for(let k=0;k<360/3.14;k++){
          if(Math.random()*9>8){
            this.list[j].data.push(null)
          }else{
            this.list[j].data.push((Math.random()*9).toFixed(3))
          }

        }
      }
    },
    mounted() {
    },
    methods: {
    }
  }
</script>

<style>
  .draw{
    margin: 4px;
  }
  .text{
    margin: -30px;
  }
</style>
