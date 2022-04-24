// 图表数据
mojar_chart()
age_chart()
pie_chart()
hobby_chart()
my_map()
function mojar_chart(){
	// 实例化echarts对象
	
	var myEchart = echarts.init(document.querySelector(".mojar .chart"));
	option = {
		// title:{
		// 	text:"专业人数占比图",
		// 	// textAlign:5px,
		// 		},
		color:["#3398DB","#56D0E3"],
		// 设置图表提示框
		grid: {
			top: "15px",
			left: "0%",
			right: "0%",
			bottom: "0%",
			containLabel: true
		},
		splitLine: {
			lineStyle: {
			color: 'rgba(255,255,255,0.1)'
			}
		},
		tooltip:{
			show:true,
			trigger:"axis",
			axisPointer:{
				show:true,
				// type:"shadow"
			}
		},
		// 设置图例组件
		legend: {
			orient: 'horizontal',
			x: 'center',
			padding: 0,
			textStyle: {
			color: '#fff'
		}
		},
	  xAxis: {
	    type: 'category',
	    data: ['数管', '信息管理', '软件工程', '会计', '人工智能', '云计算', 'Sun'],
		// 设置x轴
		axisLabel:{
			// show:False,
			color:"rgba(255,255,255,0.8)",
			fontSize:10,
		},
	  },
	  // y轴
	  yAxis: {
	    type: 'value',
		// 设置分割线
		solitLine:{
			lineStyle:{
				color:"rgba(255,255,255,0.2)"
			}
		}
	  },
	  series: [
	    {
	      data: [120, 200, 150, 80, 70, 110, 130],
		  name:"男",
	      type: 'bar',
	      showBackground: true,
		  barWidth:"25%",
		  itemStyle:{
			  barBoorderRadius:[3,3,0,0]
		  },
	      backgroundStyle: {
	        color: 'rgba(180, 180, 180, 0.2)'
	      }
	    },
		{
		  data: [100, 250, 150, 40, 60, 150, 170],
		  name:"女",
		  type: 'bar',
		  showBackground: true,
		  barWidth:"25%",
		  itemStyle:{
			  barBoorderRadius:[3,3,0,0]
		  },
		  backgroundStyle: {
		    color: 'rgba(180, 180, 180, 0.2)'
		  }
		}
	  ]
	};
	// 将option设置给echarts实例对象
	myEchart.setOption(option);
	window.addEventListener("resize",function(){
		myEchart.resize()
	})
	
}
// 定义函数
function age_chart(){
	// 实例化echarts对象
	var myEchart = echarts.init(document.querySelector(".age .chart"));
	option = {
	  tooltip: {
	    trigger: 'item'
	  },
	  legend: {
	    // top: '5%',
		bottom:"0%",
	    left: 'center',
		itemWidth:10,
		itemHeight:10,
		textStyle:{
			color:"rgba(255,255,255,0.6)",
			fontSize:10
		}
	  },
	  series: [
	    {
	      name: 'Access From',
	      type: 'pie',
	      radius: ['40%', '70%'],
	      avoidLabelOverlap: false,
	      itemStyle: {
	        borderRadius: 10,
	        borderColor: '#fff',
	        borderWidth: 2
	      },
	      label: {
	        show: false,
	        position: 'center'
	      },
	      emphasis: {
	        label: {
	          show: true,
	          fontSize: '40',
	          fontWeight: 'bold'
	        }
	      },
	      labelLine: {
	        show: false
	      },
	      data: [
	        { value: 1048, name: 'Search Engine' },
	        { value: 735, name: 'Direct' },
	        { value: 580, name: 'Email' },
	        { value: 484, name: 'Union Ads' },
	        { value: 300, name: 'Video Ads' }
	      ]
	    }
	  ]
	};
	myEchart.setOption(option);
		window.addEventListener("resize",function(){
		myEchart.resize()
	})
}
function pie_chart(){
	// 实例化echarts对象
	var myEchart = echarts.init(document.querySelector(".pie .chart"));
	option = {
		color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
		
	  // title: {
	  //   text: 'Referer of a Website',
	  //   subtext: 'Fake Data',
	  //   left: 'center'
	  // },
	  tooltip: {
	    trigger: 'item'
	  },
	  legend: {
	    top: 'bottom',
	  		bottom:"0%",
	  		left: 'center',
	  		itemWidth:10,
	  		itemHeight:10,
	  		textStyle:{
	  			color:"rgba(255,255,255,0.6)",
	  			fontSize:10
	  		}
	  },
	  series: [
	    {
	      name: 'Access From',
	      type: 'pie',
	      radius: '50%',
	      data: [
	        { value: 1048, name: 'Search Engine' },
	        { value: 735, name: 'Direct' },
	        { value: 580, name: 'Email' },
	        { value: 484, name: 'Union Ads' },
	        { value: 300, name: 'Video Ads' }
	      ],
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
	myEchart.setOption(option);
		window.addEventListener("resize",function(){
		myEchart.resize()
	})
	
}
// 爱好分布图表
function hobby_chart(){
	// 实例化echarts对象
	var myEchart = echarts.init(document.querySelector(".hobby .chart"));
	option = {
		color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
	  legend: {
	    top: 'bottom',
		bottom:"0%",
		left: 'center',
		itemWidth:10,
		itemHeight:10,
		textStyle:{
			color:"rgba(255,255,255,0.6)",
			fontSize:10
		}
	  },
	  tooltip:{
		trigger:'item',
		formtter:'{a}<{br/}<{b}:{c} ({d}%)'
	  },
	  toolbox: {
	    show: true,
	    feature: {
	      mark: { show: true },
	      dataView: { show: false, readOnly: false },
	      restore: { show: false },
	      saveAsImage: { show: false },
		  
	    }
	  },
	  
	  series: [
	    {
	      name: 'Nightingale Chart',
	      type: 'pie',
	      radius: [30, 65],
	      center: ['50%', '40%'],
	      roseType: 'area',
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
	myEchart.setOption(option);
	window.addEventListener("resize",function(){
	myEchart.resize()
})
}
// 地图模块
function my_map(){
	// 准备数据
	var myData = [{
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
		// 
		var myEchart = echarts.init(document.querySelector(".map .chart"))
		// 指定配置项
//指定配置项
		var option = {
			geo: {
				map: 'china',
				roam: true, //是否可以缩放和移动
				itemStyle: {
					//普通状态下的样式
					normal: {
						areaColor: 'rgba(20,41,87,0.5)', //设置颜色
						borderColor: '#0a53e9',
						shadowColor: '#092f8f',
					},
					//高亮状态下的样式
					emphasis: {
						areaColor: '#092f8f',
					},

				},
				//设置label标签样	
				label: {
					normal: {
						show: true,
						textStyle: {
							color: '#fff',
							fontSize: 10
						}
					}
				},
				
			},
			series: [{
				type: 'effectScatter', // series图表类型
				coordinateSystem: 'geo', // series坐标系类型
				symbolSize: function(val) {
					return val[2];
				},
				itemStyle: {
					color: '#c34e52'
				},
				data: myData
			}]
		}
		myEchart.setOption(option);
			window.addEventListener("resize",function(){
			myEchart.resize()
		})
}
m
