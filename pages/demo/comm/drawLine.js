export default (option) => {
	const {
		context,
		left,
		right,
		top,
		bottom,
		width,
		height,
		gridV,
		seriesV,
		yAxisV,
		xAxisV,
		styles
	} = option;
	const seriesList = seriesV;
	const yAxisItem = yAxisV;
	seriesList.forEach((item, j) => {
		const lineColor = item.color ? item.color : styles.StrokeStyle;
		const lineWidth = item.width ? item.width : styles.LineWidth;
		const data = item.data;
		// y轴每个单位的占高
		let yRange = height / (yAxisItem.max - yAxisItem.min);
		// // x轴每个点间隔
		let xRange = width / (data.length - 1);
		let startPoint = {
			x: left,
			y: top + height - yRange * data[0]
		};
		context.beginPath();
		context.setStrokeStyle(lineColor);
		context.setLineWidth(lineWidth);
		context.moveTo(startPoint.x, startPoint.y);
		for (let i = 1; i < data.length; i++) {
			let endPoint = {
				x: left + xRange * i,
				y: top + height - yRange * data[i]
			};
			if (item.smooth) {
				let k1 = data[i] - data[i - 1];
				let k2 = data[i + 1] - data[i];
				let offset = {
					x1: 0,
					y1: 0,
					x2: 0,
					y2: 0
				}
				const cha = k2 - k1;
				let moveK = xRange / 2;
				if (i == 1) {
					if (k1 > 0 && k2 > 0) {
						if (cha >= 0) {
							offset.y2 += moveK
						} else {
							offset.x2 -= moveK
						}
					} else if (k1 > 0 && k2 < 0) {
						offset.x2 -= moveK
					} else if (k1 < 0 && k2 > 0) {
						offset.x2 -= moveK
					} else if (k1 < 0 && k2 < 0) {
						if (cha > 0) {
							offset.x2 -= moveK
						} else {
							offset.y2 -= moveK
						}
					}
				} else {
					let k0 = data[i - 1] - data[i - 2];
					let cha0 = k1 - k0;
					if (k0 > 0 && k1 > 0) {
						// if (cha > 0) {
						// 	offset.y1 += moveK
						// } else {
						// 	offset.x1 -= moveK
						// }
					} else if (k0 > 0 && k1 < 0) {
						offset.x1 += moveK
					} else if (k0 < 0 && k1 > 0) {
						offset.x1 += moveK
					} else if (k0 < 0 && k1 < 0) {
						// if (cha0 > 0) {
						// 	offset.x1 -= moveK
						// } else {
						// 	offset.y1 -= moveK
						// }
					}
					if (k1 > 0 && k2 > 0) {
						// if (cha > 0) {
						// 	offset.y2 += moveK
						// } else {
						// 	offset.x2 -= moveK
						// }
					} else if (k1 > 0 && k2 < 0) {
						offset.x2 -= moveK
					} else if (k1 < 0 && k2 > 0) {
						offset.x2 -= moveK
					} else if (k1 < 0 && k2 < 0) {
						// if (cha > 0) {
						// 	offset.x2 -= moveK
						// } else {
						// 	offset.y2 -= moveK
						// }
					}

				}
				context.bezierCurveTo(startPoint.x + offset.x1, startPoint.y + offset.y1, endPoint.x + offset.x2, endPoint.y +
					offset.y2, endPoint.x, endPoint.y)
			} else {
				context.lineTo(endPoint.x, endPoint.y)
			}
			startPoint = JSON.parse(JSON.stringify(endPoint))
		}
		context.moveTo(0, 0);
		context.stroke()
	})
	// })
}
