export default (option) => {
	const {
		context,
		start,
		end,
		styles,
		xAxis,
		yAxis,
		data
	} = option;
	// x轴刻度值
	if (xAxis.data.length == data.length && xAxis.show) {
		let xRange = (context.width - styles.xAxisPad) / (data.length - 1)
		context.setFontSize(styles.fontSize)
		const dur = Math.floor(data.length / ((context.width - styles.xAxisPad) / (20 + styles.fontSize)))
		xAxis.data.forEach((v, i) => {
			(i % dur == 0) &&
			context.fillText(v, i * xRange + styles.yAxisPad, context.height);
		})
	}
	// y轴刻度值
	if (yAxis.show) {
		// y轴比例
		let dur = Math.floor((yAxis.max - yAxis.min) / yAxis.dur) + 1
		let yRange = Math.floor((context.height - styles.yAxisPad) / dur)
		for (let i = 0; i < dur; i++) {
			context.fillText((yAxis.min + i * yAxis.dur).toString(), 0, context.height - styles.yAxisPad - i * yRange)
		}
	}
}
