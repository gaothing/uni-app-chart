export default (context) => {

	context.setStrokeStyle('#007AFF')
	context.setLineWidth(2)
	context.moveTo(50, 50);
	context.bezierCurveTo(50, 50, 90, 10, 100, 10);
	context.bezierCurveTo(100, 10, 110, 10, 150, 50);
	context.stroke();
	context.draw()

}
