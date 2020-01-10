<template lang="jade">
  Card.draw
    div.map(slot="title" ,:id="id" )
    p.text|更新时间:{{list.created_time}}
</template>

<script>
  export default {
    data() {
      return {
        list: {
          imei: "",
          created_time: "",
          data: [],
        },
        id: "",
      }
    },
    props: {
      psMsg: String,
    },
    created() {
      this.list = this.$props.psMsg
      this.id = this.$props.psMsg.imei
      console.log(this.list)
    },
    mounted() {
      this.Draw()
    },
    methods: {
      Draw() {
        let maxlist = []
        for (let i = 0; i < 360/3.14; i++) {
          maxlist.push("max:8")
        }
        var lineStyle = {
          normal: {
            width: 1,
            opacity: 0
          }
        };
        let myChart = this.$echarts.init(document.getElementById(this.id))
        myChart.setOption({
          backgroundColor: '#161627',
          title: {
            text: this.list.imei,
            left: 'left',
            textStyle: {
              color: '#eee'
            }
          },
          radar: {
            indicator: maxlist,
            shape: 'circle',
            splitNumber: 4,
            name: {
              textStyle: {
                color: 'rgb(238, 197, 102)'
              }
            },
            splitLine: {
              lineStyle: {
                color: [
                  'rgba(238, 197, 102, 0.08)', 'rgba(238, 197, 102, 0.05)',
                ].reverse()
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(238, 197, 102, 0)'
              }
            }
          },
          series: [{
            name: '北京',
            type: 'radar',
            lineStyle: lineStyle,
            data: [this.list.data],
            symbol: 'circle',
            symbolSize:2,
            itemStyle: {
              color: '#72ACD1'
            },
            areaStyle: {
              opacity: 0.2
            }
          }, ]
        })
      }
    }
  }
</script>

<style>
  .map {
    width: 100%;
    height: 350px;
  }
</style>
