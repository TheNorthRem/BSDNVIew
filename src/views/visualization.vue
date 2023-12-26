<template>
    <div style="padding: 30px;">
      <RoundedBarChart :barData="visualizationData" />
    </div>
  </template>
  
  <script>
  import RoundedBarChart from '@/components/Charts/Barchart.vue'
  import { recommendVisualization } from "@/http/api"
  
  export default {
    components: {
        RoundedBarChart
    },
    data() {
      return {
        visualizationData: [] // 将数据初始化为一个空数组
      }
    },
    mounted() {
      this.fetchVisualizationData()
    },
    methods: {
  async fetchVisualizationData() {
    try {
      // 发起可视化数据的异步请求
      const response = await recommendVisualization({ userId: localStorage.getItem("ID") });
      
      // 处理异步请求返回的数据
      if (response.data.code === 200 && response.data.success === true) {
        this.visualizationData = response.data.data; // 将数据设置为 visualizationData 属性
        console.log("visualization", response.data.data);
      } else {
        console.error('Invalid data format received.');
      }
    } catch (error) {
      console.error('Error fetching visualization data:', error);
    }
  }
}

}
  </script>
  