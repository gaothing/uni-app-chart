export default (option) => {
	const {
		context,
		start,
		end,
		styles
	} = option;
	context.beginPath();
	context.setStrokeStyle(styles.StrokeStyle);
	context.setLineWidth(styles.LineWidth);
	context.moveTo(start.x, start.y);
	context.lineTo(end.x, end.y);
	context.stroke()
}
