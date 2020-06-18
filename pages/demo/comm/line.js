import styles from './defaultStyle.js'
import drawAxis from './Axis.js'
import calibration from './calibration.js'
import drawLine from './drawLine.js'
export default (context, option) => {
	const {
		grid,
		series,
		yAxis,
		xAxis
	} = option;
	const canvasWidth = context.width;
	const canvasHeight = context.height;
	grid.forEach((v, i) => {
		const left = v.left ? v.left : styles.xAxisPad;
		const top = v.top ? v.top : 0;
		const right = v.right ? v.right : 0;
		const bottom = v.bottom ? v.bottom : styles.yAxisPad;
		const width = canvasWidth * Number(v.width.slice(0, v.width.length - 1)) / 100;
		const height = canvasHeight * Number(v.height.slice(0, v.height.length - 1)) / 100;
		let start = {
				x: left,
				y: height + top
			},
			end = {
				x: left + width,
				y: height + top
			};
		// x轴
		drawAxis({
			context,
			start,
			end,
			styles
		})
		const seriesV = series.filter(s => v.index === s.index);
		const xAxisV = xAxis.filter(s => v.index === s.index)[0];
		const yAxisV = yAxis.filter(s => v.index === s.index)[0];
		// 刻度值（x和y轴）
		calibration({
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
			gridV:v,
			seriesV
		})
		// y轴
		start = {
			x: left,
			y: top
		};
		end = {
			x: left,
			y: height + top
		}
		drawAxis({
			context,
			start,
			end,
			styles
		})
		//绘制曲线
		drawLine({
			context,
			left,
			right,
			top,
			bottom,
			width,
			height,
			gridV:v,
			seriesV,
			yAxisV,
			xAxisV,
			styles
		})

	})
	context.draw(false, () => {	});

}
