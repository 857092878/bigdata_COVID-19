var left1 = echarts.init(document.querySelector(".mojar .chart"));
	option_left1 = {
		  tooltip: {
			trigger: 'axis',
			axisPointer: {
			  type: 'shadow'
			}
		  },
		  legend: {
			orient: 'vertical',
			x:'right',
			y:'top',
			 textStyle: {
			      color: 'rgba(255,255,255,0.6);'
			    }},
   grid: {
   			left: '5%',
   			right: '5%',
   			bottom: '5%',
   			top: '5%',
   			containLabel: true
   },
		  xAxis: {
			type: 'value',
			boundaryGap: false,
			axisLine: {
			  lineStyle: {
				color :'rgba(255,255,255,0.6);',
				width : 0.01,
			  }
			}

		  },
		  yAxis: {
			type: 'category',
			data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
			 axisLine: {
			  lineStyle: {
				color :'#ffff',
				width : 2
			  }
			}
		  },
		  series: [
			{
			  name: '现有病例',
			  type: 'bar',
			  data: [18203, 23489, 29034, 104970, 131744, 630230],
				itemStyle: {
			  color: '#006cff'
			}
			},
			{
			  name: '新增本土',
			  type: 'bar',
			  data: [19325, 23438, 31000, 121594, 134141, 681807],
			   itemStyle: {
					color: '#60cda0'
				  }
			}
		  ]
		};
	left1.setOption(option_left1);