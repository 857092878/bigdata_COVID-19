function request_map() {
	$.ajax({
		url:"/map",
		success: function(data) {
			optionMap.series[0].data = data.data//解析json数据定位到data数据替换变量中的data
			center_map.setOption(optionMap);//再次调用chart中的方法
		},
		error: function(xhr, type, errorThrown) {
		
		}
	})
}
function request_left1() {
	$.ajax({
		url:"/left1",
		success: function(data) {
			option_left1.yAxis.data = data.city
			option_left1.series[0].data = data.data1//解析json数据定位到data数据替换变量中的data
			option_left1.series[1].data = data.data2
			left1.setOption(option_left1);//再次调用chart中的方法
		},
		error: function(xhr, type, errorThrown) {

		}
	})
}
function request_left3() {
	$.ajax({
		url:"/left3",
		success: function(data) {
			option_left3.series[0].data = data.data
			left3.setOption(option_left3);
		},
		error: function(xhr, type, errorThrown) {

		}
	})
}
function request_right1() {
	$.ajax({
		url:"/right1",
		success: function(data) {
			option_right1.radar.indicator = data.indicator
			option_right1.series[0].data = data.data
			right1.setOption(option_right1);
		},
		error: function(xhr, type, errorThrown) {

		}
	})
}
function request_right2() {
	$.ajax({
		url:"/right2",
		success: function(data) {
			option_right2.series[0].data = data.data
			right2.setOption(option_right2);
		},
		error: function(xhr, type, errorThrown) {

		}
	})
}
function request_right3() {
	$.ajax({
		url:"/right3",
		success: function(data) {
			option_right3.xAxis.data = data.data1
			option_right3.series[0].data = data.data2
			right3.setOption(option_right3);
		},
		error: function(xhr, type, errorThrown) {

		}
	})
}
request_map()
request_left1()
request_left3()
request_right1()
request_right2()
request_right3()
