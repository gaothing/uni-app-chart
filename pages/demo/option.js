export default {
	grid: [{
		top: 0,
		left: 0
	}],
	xAxis: [{
		show: true,

		data: new Array(150).fill('10')
	}],
	yAxis: [{
		show: true,
		max: 120,
		min: 0,
		dur:30,
	}],
	series: [{
		data: [...new Array(50).fill("").map(v => Math.random() * 20 + 20), ...new Array(50).fill("").map(v => Math.random() *
			20 + 40), ...new Array(49).fill("").map(v => Math.random() * 20 + 60),120]
	}]
}
