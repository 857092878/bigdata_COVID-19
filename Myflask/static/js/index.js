// 定义一个函数获取系统当前的日期
var t = null;

t = setTimeout(time,1000)

function time(){
	// 获取日期对象
	var date = new Date()
	// 获取年
	var year = date.getFullYear()
	// 获取月
	var month = date.getMonth()+1
	// 获取日
	var day = date.getDate()
	// 获取时
	var hour = date.getHours()
	// 获取分
	var min = date.getMinutes()
	// 获取秒
	var sec = date.getSeconds()
	// 将数据绑定给showTime
	document.querySelector('.showTime').innerHTML="当前时间:"+year+"年"+month+"月"+day+"日"+hour+"时"+min+"分"+sec+"秒"
	t = setTimeout(time,1000)
}
$(function(){
	$(".scrool-chart").myScroll({
		speed: 60,
		rowHight:68
	})
})