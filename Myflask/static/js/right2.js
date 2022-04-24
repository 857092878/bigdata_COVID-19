var right2 = echarts.init(document.querySelector(".pie .chart"));

	option_right2 = {
		color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
	 //  legend: {
		// top: 'bottom'
	 //  },
	  toolbox: {
		show: false,
		feature: {
		  mark: { show: true },
		  dataView: { show: true, readOnly: true },
		  restore: { show: true },
		  saveAsImage: { show: true }
		}
	  },
	  tooltip: {
	    trigger: 'item'
	  },
	  series: [
		{
		  name: 'Nightingale Chart',
		  type: 'pie',
		  radius: [10, 60],
		  center: ['50%', '50%'],
		  // roseType: 'area',
		  itemStyle: {
			borderRadius: 8
		  },
		  data: [
			{ value: 40, name: 'rose 1' },
			{ value: 38, name: 'rose 2' },
			{ value: 32, name: 'rose 3' },
			{ value: 30, name: 'rose 4' },
			{ value: 28, name: 'rose 5' },
			{ value: 26, name: 'rose 6' },
			{ value: 22, name: 'rose 7' },
			{ value: 18, name: 'rose 8' }
		  ]
		}
	  ]
	};
	right2.setOption(option_right2);