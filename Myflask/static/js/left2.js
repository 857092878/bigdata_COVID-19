var left2 = echarts.init(document.querySelector(".pieee .chart"));
	option_left2 = {
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
	left2.setOption(option_left2);