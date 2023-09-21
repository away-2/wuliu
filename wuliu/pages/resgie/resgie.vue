<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎注册</view>
			<input class="u-border-bottom" type="text" v-model="username" placeholder="请输入账号" />
			<input class="u-border-bottom" type="password" v-model="psw" placeholder="请输入密码" />
			<button @click="submit" :style="[inputStyle]" style="background-color: antiquewhite;">注册</button>
			<view class="alternative">
				<view class="password"></view>
				<view class="issue"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				psw: ''
			}
		},
		computed: {
			inputStyle() {
				let style = {};
				if (this.tel) {
					style.color = "#fff";
					style.backgroundColor = this.$u.color['warning'];
				}
				return style;
			}
		},
		methods: {
			submit() {
				let that = this
				// 注册
				if (this.psw == "" || this.username == "") {
					uni.showToast({
						title: "请输入账号或密码",
						icon: 'none'
					})
				} else {
					uni.showModal({
						content: '确定要注册吗',
						showCancel: true,
						success(res) {
							if (res.confirm) {
								that.$get("/resgie", {
									"loginPwd": that.psw,
									"loginName": that.username
								}).then(res => {
									if (res != "注册成功") {
										uni.showToast({
											title: '注册失败',
											icon: 'none'
										})
									} else {
										uni.showToast({
											title: '注册成功',
											icon: 'none'
										})
										setTimeout(function() {
											uni.navigateBack({
												delta: 1
											});
										}, 500)
									}
									console.log(res);
								})




								uni.showToast({
									title: '注册成功',
									icon: 'none'
								})
							}
						}
					});
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.u-border-bottom {
		margin-bottom: 30rpx;
		height: 80rpx;
	}

	.wrap {
		font-size: 28rpx;

		.content {
			width: 600rpx;
			margin: 80rpx auto 0;

			.title {
				text-align: left;
				font-size: 60rpx;
				font-weight: 500;
				margin-bottom: 100rpx;
			}

			input {
				text-align: left;
				margin-bottom: 10rpx;
				padding-bottom: 6rpx;
			}

			.tips {
				color: $u-type-info;
				margin-bottom: 60rpx;
				margin-top: 8rpx;
			}

			.getCaptcha {
				background-color: rgb(253, 243, 208);
				color: $u-tips-color;
				border: none;
				font-size: 30rpx;
				padding: 12rpx 0;

				&::after {
					border: none;
				}
			}

			.alternative {
				color: $u-tips-color;
				display: flex;
				justify-content: space-between;
				margin-top: 30rpx;
			}
		}

		.buttom {
			.loginType {
				display: flex;
				padding: 350rpx 150rpx 150rpx 150rpx;
				justify-content: space-between;

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;
					color: $u-content-color;
					font-size: 28rpx;
				}
			}

			.hint {
				padding: 20rpx 40rpx;
				font-size: 20rpx;
				color: $u-tips-color;

				.link {
					color: $u-type-warning;
				}
			}
		}
	}
</style>