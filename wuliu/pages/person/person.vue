<template>
	<view>
		<view style="display: flex;flex-wrap: wrap;background-color: #a9966c;position: relative;">
			<view class="" style="width: 95%;text-align: right;">
				<u-icon name="setting-fill" color="#fff" size="50"></u-icon>
			</view>
			<view style="margin: 20px;">
				<image src="../../static/avtet.jpg" mode="" style="width: 80px;height: 80px;border-radius: 50%;"></image>
			</view>
			<view style="">
				<view style="color: #fff;font-size: 18px;margin-top: 30px;">书小旅</view>
				<view
					style="border: #fff 1px solid;color: #fff;width: 60px;font-size: 12px;text-align: center;border-radius: 10%;margin-top: 10px">
					信息管理</view>
			</view>
		</view>
		<u-gap></u-gap>
		<view style="background-color: #fff;">
			<u-grid :col="4" :border="false">
				<u-grid-item v-for="item in gongnengs">
					<u-icon :name="item.icon" :size="66"></u-icon>
					<view class="grid-text" style="font-size: 25rpx;margin-top: 10rpx;">{{item.name}}</view>
				</u-grid-item>
			</u-grid>
		</view>
		<u-gap></u-gap>
		<view style="background-color: #fff;">
			<u-section lineColor="#a9966c" title="工具"></u-section>
			<u-grid :col="4" :border="false">
				<u-grid-item v-for="item in gongjus">
					<u-icon :name="item.icon" :size="66"></u-icon>
					<view class="grid-text" style="font-size: 25rpx;margin-top: 10rpx;">{{item.name}}</view>
				</u-grid-item>
			</u-grid>
		</view>
		
		<u-gap></u-gap>
		<view style="background-color: #fff;">
			<u-section lineColor="#a9966c" title="客服"></u-section>
			<u-grid :col="4" :border="false">
				<u-grid-item v-for="item in kefus">
					<u-icon :name="item.icon" :size="66"></u-icon>
					<view class="grid-text" style="font-size: 25rpx;margin-top: 10rpx;">{{item.name}}</view>
				</u-grid-item>
			</u-grid>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gongnengs: [{
						icon: "../../static/huiyuanzhongxin.png",
						name: "我的订单"
					},
					{
						icon: "../../static/liwu.png",
						name: "待付款"
					},
					{
						icon: "../../static/paihangbang.png",
						name: "待出行"
					},
					{
						icon: "../../static/tuandui.png",
						name: "待评价"
					},{
						icon: "../../static/yinhangka.png",
						name: "我的行程"
					},{
						icon: "../../static/zhibo.png",
						name: "旅行足迹"
					},
					{
						icon: "../../static/youhuiquan.png",
						name: "旅行规划"
					}
				],
				gongjus:[{
					icon: "../../static/paihangbang.png",
					name: "收藏夹"
				},{
					icon: "../../static/zhibo.png",
					name: "浏览历史"
				},{
					icon: "../../static/huiyuanzhongxin.png",
					name: "意见反馈"
				},{
					icon: "../../static/youhuiquan.png",
					name: "优惠券"
				},],
				kefus:[{
					icon: "../../static/tuandui.png",
					name: "在线客服"
				},{
					icon: "../../static/tuandui.png",
					name: "常见问题"
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>