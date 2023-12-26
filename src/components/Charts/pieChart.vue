<template>
  <div class="Echarts">
    <div id="pieChart" class="chart" />
  </div>
</template>

<script>
export default {
  name: 'PieChart',
  props: {
    disasterData: Object // Prop to receive disaster data
  },
  watch: {
    disasterData: {
      handler(newVal) {
        console.log('Received disaster data:', newVal);
        if (Object.keys(newVal).length > 0) {
          this.myEcharts();
        }
      },
      immediate: true // 立即执行一次
    }
  },
  methods: {
    myEcharts() {
      var pieChart = this.$echarts.init(document.getElementById('pieChart'));
      const provinceCodeToName = {
        '100000': '中华人民共和国',
        '650000': '新疆维吾尔自治区',
        '420000': '湖北省',
        '210000': '辽宁省',
        '440000': '广东省',
        '150000': '内蒙古自治区',
        '230000': '黑龙江省',
        '410000': '河南省',
        '370000': '山东省',
        '610000': '陕西省',
        '520000': '贵州省',
        '310000': '上海市',
        '500000': '重庆市',
        '540000': '西藏自治区',
        '340000': '安徽省',
        '350000': '福建省',
        '430000': '湖南省',
        '460000': '海南省',
        '320000': '江苏省',
        '630000': '青海省',
        '450000': '广西壮族自治区',
        '640000': '宁夏回族自治区',
        '330000': '浙江省',
        '130000': '河北省',
        '810000': '香港特别行政区',
        '710000': '台湾省',
        '820000': '澳门特别行政区',
        '620000': '甘肃省',
        '510000': '四川省',
        '120000': '天津市',
        '360000': '江西省',
        '530000': '云南省',
        '140000': '山西省',
        '110000': '北京市',
        '220000': '吉林省',
      };
      const predefinedColors = ['#F44336', '#FF4081', '#C2185B', '#9C27B0', '#7B1FA2', '#7C4DFF', '#512DA8', '#536DFE', '#303F9F', '#3F51B5', '#1976D2', '#2196F3', '#0097A7', '#00BCD4', '#00796B', '#388E3C', '#4CAF50', '#689F38', '#8BC34A', '#AFB42B', '#CDDC39', '#FBC02D', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#757575', '#607D8B'];
      const seriesData = Object.entries(this.disasterData).map(([key, value], index) => {
        return {
          value: value,
          name: key,
          itemStyle: {
            color: predefinedColors[index % predefinedColors.length]
          }
        };
      });

      const formattedSeriesData = seriesData.map((data, index) => {
        const provinceName = provinceCodeToName[data.name] || data.name;
        return {
          value: data.value,
          name: provinceName,
          itemStyle: {
            color: predefinedColors[index % predefinedColors.length]
          }
        };
      });

      var pieOption = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          show: false
        },
        series: [
          {
            name: '文章类型统计',
            type: 'pie',
            radius: '130vw',
            center: ['11%', '11%'],
            data: formattedSeriesData,
            label: {
              position: 'inside', // 将标签放在饼图扇形区域内部
              formatter: '{b}({d}%)', // 设置标签显示内容格式
              textStyle: {
                color: 'white' // 设置标签文字颜色为白色
              }  
            }
          }
        ]
      };
      pieChart.setOption(pieOption);
    }
  }
};
</script>
