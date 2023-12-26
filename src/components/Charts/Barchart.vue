<template>
    <div>
      <div class="chart-title">{{ chartTitle }}</div>
      <div ref="roundedBarChart" style="width: 100%; height: 400px;"></div>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    name: 'RoundedBarChart',
    props: {
      barData: {
        type: Array,
        default: () => []
      },
      chartTitle: {
        type: String,
        default: ''
      },
      // barColor: {
      //   default: 'rgba(66, 150, 253,${index * 0.09 + 0.6})' // Default color
      // }
    },
    watch: {
      barData: {
        handler(newVal) {
          if (newVal && newVal.length > 0) {
            this.initChart(); // Trigger chart initialization when barData changes
          }
        },
        immediate: true // Trigger the handler immediately on component mount
      }
    },
    methods: {
      initChart() {
        const chartDom = this.$refs.roundedBarChart;
        const chart = echarts.init(chartDom);
        console.log('this.barData:', this.barData);
        const categories = this.barData.map(item => item.category);
      const values = this.barData.map(item => item.article_count);
        console.log('categories:', categories);
  
        const options = {
          xAxis: {
            type: 'category',
            data: categories,
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            type: 'value'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          series: [
            {
              type: 'bar',
              barWidth: 20,
              itemStyle: {
                borderRadius: 10, // Set border radius for rounded corners
                color: this.barColor // Set bar color
              },
              data: values
            }
          ]
        };
        chart.setOption(options);
      }
    }
  };
  </script>
  
  <style>
  .chart-title {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  </style>
  