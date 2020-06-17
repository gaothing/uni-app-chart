import defaultStyle from './defaultStyle.js'
import drawAxis from './Axis.js'
import calibration from './calibration.js'
export default (option) => {
	const {
		context,
		data,
		yAxis,
		xAxis
	} = option;
	let start= {
			x: defaultStyle.xAxisPad,
			y: context.height - defaultStyle.yAxisPad
		},
		end= {
			x: context.width - defaultStyle.xAxisPad,
			y: context.height - defaultStyle.yAxisPad
		}
		
	// 画x轴
	drawAxis({
		context,
		start,
		end,
		styles:defaultStyle
	})
	// 画轴刻度
	calibration({
		context,
		start,
		end,
		styles:defaultStyle,
		xAxis,
		yAxis,
		data
	})
	// y画轴
	 start= {
			x: defaultStyle.yAxisPad,
			y: context.width - defaultStyle.xAxisPad
		},
		end= {
			x: context.height - defaultStyle.yAxisPad,
			y: context.width - defaultStyle.xAxisPad
		}
	drawAxis({
		context,
		start,
		end,
		styles:defaultStyle
	})
	context.setStrokeStyle(defaultStyle.StrokeStyle);
	context.setLineWidth(defaultStyle.LineWidth);
	// y轴比例
	let yRange = (context.height - defaultStyle.yAxisPad) / (yAxis.max - yAxis.min);
	// x轴每个点间隔
	let xRange = (context.width - defaultStyle.xAxisPad) / (data.length - 1)


	let startPoint = {
		x: start.x,
		y: context.height - defaultStyle.yAxisPad - yRange * data[0]
	}
	context.moveTo(startPoint.x, startPoint.y)
	// bf前边的差值

	for (let i = 1; i < data.length; i++) {
		let bf = data[i] - data[i - 1];
		let af = data[i + 1] - data[i]
		let cha = af - bf;

		let endPoint = {
			x: start.x + xRange * i,
			y: context.height - defaultStyle.yAxisPad - yRange * data[i]
		}
		let k = 10
		if (i == 1) {
			if (cha < 0) {
				context.bezierCurveTo(startPoint.x, startPoint.y, endPoint.x - xRange / k, endPoint.y, endPoint.x, endPoint.y)

			} else {
				context.bezierCurveTo(startPoint.x, startPoint.y, endPoint.x, endPoint.y + xRange / k, endPoint.x, endPoint.y)
			}

		} else {
			let startPoint = {
				x: start.x + xRange * (i - 1),
				y: context.height - defaultStyle.yAxisPad - yRange * data[i - 1]
			}
			if (cha < 0) {
				context.bezierCurveTo(startPoint.x + xRange / k, startPoint.y, endPoint.x - xRange / k, endPoint.y,
					endPoint.x,
					endPoint.y)

			} else {
				context.bezierCurveTo(startPoint.x, startPoint.y - xRange / k, endPoint.x, endPoint.y + xRange / k, endPoint.x,
					endPoint.y)
			}
		}

	}
	context.moveTo(start.x, start.y)
	context.stroke()
	context.draw(false);

}
