export default (option) => {
	const {
		context,
		left,
		top,
		right,
		bottom,
		width,
		height,
		styles,
		xAxisV,
		yAxisV,
		gridV,
		seriesV
	} = option;
	const data = seriesV[0].data;
	// x轴刻度值
	if (xAxisV.data.length == data.length && xAxisV.show) {
		let xRange = width / (data.length - 1);
		context.beginPath();
		context.setFontSize(styles.fontSize);

		xAxisV.data.forEach((item, j) => {
			(j == 0 || (j + 1) % xAxisV.dur == 0) && context.fillText(item, j * xRange + left - styles.fontSize / 2, height +
				top +
				styles.fontSize);
		})
		context.stroke()
	}
	if (yAxisV.show) {
		let dur = Math.ceil((yAxisV.max - yAxisV.min) / yAxisV.dur) + 1;
		let yRange = height / ((yAxisV.max - yAxisV.min) / yAxisV.dur);
		for (let i = 0; i < dur; i++) {
			context.beginPath();
			context.setFontSize(styles.fontSize);
			context.fillText((yAxisV.min + i * yAxisV.dur).toString(), 0, height + top + styles.fontSize / 2 - i * yRange)
		}
		context.stroke()
	}

}
