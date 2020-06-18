export default (context) => {
	context.setStrokeStyle('#007AFF')
	context.setLineWidth(2)
	context.moveTo(0, 100);
	context.bezierCurveTo(0, 100, 30, 50, 50, 50);
	context.bezierCurveTo(70, 50, 100, 100, 100, 100);
	context.bezierCurveTo(100, 100, 130, 150, 150, 150);
	context.bezierCurveTo(170, 150, 150, 150, 200, 0);
	context.stroke();
	context.draw()

}
