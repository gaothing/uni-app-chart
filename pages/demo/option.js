export default {
	grid: [{
		top: 10,
		left: 0,
		right: 10,
		bottom: 0,
		width: '80%',
		height: '10%',
		padding: [10, 10, 10, 10],
		index: 0
	},{
		top: 100,
		left: 0,
		right: 10,
		bottom: 0,
		width: '80%',
		height: '10%',
		padding: [10, 10, 10, 10],
		index: 1
	},{
		top: 200,
		left: 0,
		right: 10,
		bottom: 0,
		width: '80%',
		height: '10%',
		padding: [10, 10, 10, 10],
		index: 2
	},,{
		top: 300,
		left: 0,
		right: 10,
		bottom: 0,
		width: '80%',
		height: '10%',
		padding: [10, 10, 10, 10],
		index: 3
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
	},{
		show: true,
		index: 2,
		dur: 1,
		data: new Array(20).fill('0')
	},{
		show: true,
		index: 3,
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
	},{
		index: 2,
		show: true,
		max: 50,
		min: 0,
		dur: 10,
	},{
		index: 3,
		show: true,
		max: 50,
		min: 0,
		dur: 10,
	}],
	series: [{
		type:'area',
		index: 0,
		smooth:true,
		color:'#AA8989',
		data: [...new Array(100).fill('').map(() => Math.random() * 20 + 10)]
	},{
		index: 1,
		// smooth:true,
		color:'#EE2212',
		data: [...new Array(20).fill('').map(() => Math.random() * 40 + 10)]
	},
	,{
		index: 2,
		smooth:true,
		color:'#66EE99',
		data: [...new Array(200).fill('').map(() => Math.random() * 40 + 10)]
	},
	{
		index: 3,
		smooth:true,
		color:'#333',
		data: [...new Array(200).fill('').map(() => Math.random() * 40 + 10)]
	},{
		index: 3,
		smooth:true,
		color:'#EE44EE',
		data: [...new Array(100).fill('').map(() => Math.random() * 40 + 10)]
	}]
}
