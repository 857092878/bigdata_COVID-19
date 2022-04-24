var right1 = echarts.init(document.querySelector(".piee .chart"));
	option_right1 = {
	  tooltip: {
				trigger: 'axis',
				axisPointer: {
				  type: 'shadow'
				}
		},
	  legend: {
	  			orient: 'vertical',
	  			x:'left',
	  			y:'top',
	  			 textStyle: {
	  			      color: '#fff'
	  			    }},
	     grid: {
   			left: '5%',
   			right: '5%',
   			bottom: '5%',
   			top: '5%',
   			containLabel: true
   },
	  radar: {
		// shape: 'circle',
		indicator: [
		  { name: '新增病例123'},
		  { name: '现有病例'},
		  { name: '累计病例'},
		  { name: '累计死亡'},
		  { name: '累计治愈'},
		]
	  },
	  series: [
		{
		  name: 'Budget vs spending',
		  type: 'radar',
		  data: [
//			{
//			  value: [4200, 3000, 20000, 35000, 50000],
//			  name: '东北'//legend
//			},
//			{
//			  value: [420, 300, 2000, 3500, 5000],
//			  name: '华东'
//			},
//			{
//			  value: [420, 300, 2000, 3500, 5000],
//			  name: '华中'
//			},
//			{
//			  value: [420, 300, 2000, 3500, 5000],
//			  name: '华北'
//			},
//			{
//			  value: [5000, 14000, 28000, 26000, 42000],
//			  name: '华南'
//			},
//			 {
//			  value: [420, 300, 2000, 3500, 5000],
//			  name: '西北'
//			},
//			 {
//			  value: [420, 300, 2000, 3500, 5000],
//			  name: '西南'
//			},
		  ]
		}
	  ]
	};
	right1.setOption(option_right1);
	right1.setOption(option_right1);