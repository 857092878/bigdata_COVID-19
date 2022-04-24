var right3 = echarts.init(document.querySelector(".hobby .chart"));
var option_right3 = {
   // title: {
   //   text: 'Distribution of Electricity',
   //   subtext: 'Fake Data'
   // },
   tooltip: {
     trigger: 'axis',
     axisPointer: {
       type: 'cross'
     }

   },
   grid: {
   			left: '5%',
   			right: '5%',
   			bottom: '5%',
   			top: '5%',
   			containLabel: true
   },
   toolbox: {
     show: false,
     feature: {
       saveAsImage: {}
     }
   },
   xAxis: {
     type: 'category',
     boundaryGap: false,
	 axisLine: {
	   lineStyle: {
	 	color :'rgba(255,255,255,0.6);',
	 	width : 2,
	   }
	 },
     // prettier-ignore
     data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
   },
   yAxis: {
     type: 'value',
     axisPointer: {
       snap: true
     },
	 axisLine: {
	   lineStyle: {
	 	color :'#ffff',
	 	width : 2
	   }
	 }
   },
   visualMap: {
     show: false,
   },
   series: [
     {
       name: '确诊人数',
       type: 'line',
       smooth: true,
       // prettier-ignore
       data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],

     }
   ]
 };
	right3.setOption(option_right3);