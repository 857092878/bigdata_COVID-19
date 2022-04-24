//初始化echarts实例
var center_map = echarts.init(document.querySelector(".map .chart"))
var mydata = [{
				name: '贵州',
				value: [106.625442]
			},
			{
				name: '广东',
				value: [113.280637]
			},
			{
				name: '北京',
				value: [116.405285]
			},
			{
				name: "重庆",
				value: [108.384366]
			},
			{
				name: "四川",
				value: [103.9526]
			},
			{
				name: "云南",
				value: [102.9199]
			}
		]
var optionMap = {
		title: {
			text: '',
			subtext: '',
			x: 'left'
		},
		tooltip: {
			trigger: 'item'
		},
		//左侧小导航图标
		visualMap: {
			show: true,
			x: 'left',
			y: 'bottom',
			textStyle: {
				fontSize: 8,
				color: '#fff'
			},
			splitList: [{
					start: 0,
					end: 5
				},
				{
					start: 5,
					end: 20
				},
				{
					start: 20,
					end: 100
				},
				{
					start: 100,
					end: 500
				},
				{
					start: 500
				}
			],
			color: ['#8A3310','#C64918', '#E55B25','#F2AD92', '#F9DCD1']
		},

			//配置属性
			series: [{
				name: '累积确诊人数',
				type: 'map',
				mapType: 'china',
				roam: false,
				itemStyle: {
					normal: {
						areaColor: 'rgba(20,41,87,0.5)', //设置颜色
						borderColor: '#0a53e9',
						shadowColor: '#092f8f',
					},
					emphasis: {
						borderWidth: .5,
						borderColor: '#4b0082',
						areaColor: '#fff'
					}
				},
				label: {
					normal: {
						show: true,
						textStyle: {
							color: '#fff',
							fontSize: 8
						}
					}
				},
				data: mydata //数据
			}]
		};

		//使用制定的配置项和数据显示图表
		center_map.setOption(optionMap);
