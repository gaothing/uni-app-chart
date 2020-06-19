<template>
	<view class="content">
		4hahahah
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad() {

		},
		onShow() {
			// console.log(12)
			// const UDPSocket = wx.createUDPSocket()
			// const port = UDPSocket.bind(8080)
			// UDPSocket.onMessage((e) => {
			// 	console.log(this.ab2hex(e.message))

			// })
		},
		methods: {
			ab2hex  (buffer) {
				const hexArr = Array.prototype.map.call(
					new Uint8Array(buffer),
					function(bit) {
						return ('00' + bit.toString(16)).slice(-2)
					}
				)
				return hexArr.join('');
			}
		}
	};
</script>

<style>

</style>
