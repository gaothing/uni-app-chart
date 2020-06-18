export default {
	grid: [{
		top: 10,
		left: 0,
		right: 10,
		bottom: 0,
		width: '80%',
		height: '20%',
		padding: [10, 10, 10, 10],
		index: 0
	},{
		top: 150,
		left: 0,
		right: 10,
		bottom: 0,
		width: '80%',
		height: '20%',
		padding: [10, 10, 10, 10],
		index: 1
	}],
	xAxis: [{
		show: true,
		index: 0,
		dur: 10,
		data: new Array(100).fill('10')
	},{
		show: true,
		index: 1,
		dur: 1,
		data: new Array(20).fill('0')
	}],
	yAxis: [{
		index: 0,
		show: true,
		max: 89,
		min: 0,
		dur: 20,
	},
	{
		index: 1,
		show: true,
		max: 50,
		min: 0,
		dur: 10,
	}],
	series: [{
		index: 0,
		smooth:true,
		color:'#AA8989',
		data: [...new Array(100).fill('').map(() => Math.random() * 20 + 10)]
	},{
		index: 1,
		smooth:true,
		color:'#EE2212',
		data: [...new Array(20).fill('').map(() => Math.random() * 40 + 10)]
	}]
}
