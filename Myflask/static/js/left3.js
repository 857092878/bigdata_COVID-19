var left3 = echarts.init(document.querySelector(".age .chart"));
	option_left3 = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    right: 10,
    top: 20,
    bottom: 20,
	textStyle: {
	     color: 'rgba(255,255,255,0.6);'
	   }
    // data: data.legendData
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
	  label: {
	          show: false,
	    },
      data:[{'name': '湖南', 'value': 4}, {'name': '新疆', 'value': 3}],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
	left3.setOption(option_left3);