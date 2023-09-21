<template>
	<view>
		<view class="" style="background-color: #fff;padding: 31rpx;padding-top: 0;margin-top: 20rpx;">
			<u-swiper :list="list"></u-swiper>
		</view>
		<u-grid :col="3" :border="false">
			<u-grid-item v-for="item in tuijian" v-if="item.show == 2 || item.show == userlimits">
				<u-icon :name="item.icon" :size="66" @click="zhuan(item.name)"></u-icon>
				<view class="grid-text" style="font-size: 25rpx;margin-top: 10rpx;">{{item.name}}</view>
			</u-grid-item>
		</u-grid>
		<u-gap></u-gap>
		<view style="background-color: #fff;height: 335px;">

			<view style="margin:10rpx;" v-if="userlimits == 0">
				<u-section lineColor="#a9966c" title="智慧物流" :right="false" style="margin-top: 5px;"></u-section>
			</view>

			<view style="" v-if="userlimits == 0">
				<view style="display: flex;justify-content: space-around;flex-wrap: wrap">
					<view v-for="(mall,index) in malls" @click="jijian(mall.title)"
						style="margin: 10rpx;box-shadow: 0px 0px 15px #ccc;border-radius: 5%;overflow: hidden;">
						<view>
							<u-image :src="mall.cover" width="330" height="200" style="border-radius: 5%;"></u-image>
						</view>
						<view
							style="width: 300rpx;border-radius: 0 0 5% 5%;text-align: center;height: 30px;line-height: 30px;margin: auto;"
							class="u-line-1">
							{{mall.title}}
						</view>
					</view>
				</view>

			</view>
			<view style="margin:10rpx;" v-if="userlimits == 1">
				<u-section lineColor="#a9966c" title="物流管理" :right="false" style="margin-top: 5px;"></u-section>
			</view>

			<view style="" v-if="userlimits == 1">
				<view style="display: flex;justify-content: space-around;flex-wrap: wrap">
					<view v-for="(mall,index) in mall1s" @click="jijian(mall.title)"
						style="margin: 10rpx;box-shadow: 0px 0px 15px #ccc;border-radius: 5%;overflow: hidden;">
						<view>
							<u-image :src="mall.cover" width="330" height="200" style="border-radius: 5%;"></u-image>
						</view>
						<view
							style="width: 300rpx;border-radius: 0 0 5% 5%;text-align: center;height: 30px;line-height: 30px;margin: auto;"
							class="u-line-1">
							{{mall.title}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-gap></u-gap>

		<!-- <view style="background-color: #fff;height: 160px;">

			<view style="margin-top: 10px;margin-bottom: 10px;">
				<u-section lineColor="#007aff" title="旅游攻略" style="margin-top: 5px;"></u-section>
			</view>

			<scroll-view scroll-x style="white-space: nowrap;width: 100%;">
				<view style="display: flex;justify-content: space-around;flex-wrap: nowrap">
					<view v-for="(mall,index) in malls"
						style="margin: 20rpx;box-shadow: 0px 0px 15px #ccc;border-radius: 5%;">
						<view>
							<u-image :src="mall.cover" width="180" height="120" style="border-radius: 5%;"></u-image>
						</view>
						<view
							style="width: 150rpx;border-radius: 0 0 5% 5%;text-align: center;height: 30px;line-height: 30px;">
							{{mall.title}}
						</view>
					</view>
				</view>
			</scroll-view>
		</view> -->
		<!-- 
		<u-gap></u-gap>

		<view style="background-color: #fff;padding: 31rpx;">
			<view style="margin-t'itop: 10px;margin-bottom: 10px;">
				<u-section lineColor="#007aff" title="周边的推荐（西宁）" style="margin-top: 5px;"></u-section>
			</view>

			<view>
				<view style="display: flex;justify-content: space-around;flex-wrap: wrap">
					<view v-for="(mall,index) in malls"
						style="margin: 20rpx;box-shadow: 0px 0px 15px #ccc;border-radius: 15%;">
						<view>
							<u-image :src="mall.cover" width="700" height="400" style="border-radius : 15%;"></u-image>
						</view>
					</view>
				</view>
			</view>
		</view> -->
		<view class="" style="height: 200rpx;"></view>
	</view>
</template>

<script>
	export default {
		onLoad() {

		},
		data() {
			return {
				userlimits: uni.getStorageSync("user").limits,
				mall1s: [{
					cover: "../../static/lv2.png",
					title: "入库单管理"
				}, {
					cover: "../../static/img4.png",
					title: "送货单管理"
				}, {
					cover: "../../static/lv3.png",
					title: "寄件单管理"
				}, {
					cover: "../../static/img5.png",
					title: "物流公司管理"
				}],
				malls: [{
					cover: "../../static/lv2.png",
					title: "寄件"
				}, {
					cover: "../../static/lv3.png",
					title: "物流公司查询"
				}],
				tuijian: [{
						icon: "../../static/sjlv.png",
						name: "物流公司列表",
						show: 2
					},
					// {
					// 	icon: "../../static/ly.png",
					// 	name: " 寄件",
					// 	show: 0
					// },
					{
						icon: "../../static/ly.png",
						name: "入库单列表",
						show: 2
					},
					{
						icon: "../../static/jd.png",
						name: "送货单列表",
						show: 1
					},
					{
						icon: "../../static/food.png",
						name: "物流信息列表",
						show: 0
					},
				],
				list: [{
						image: '../../static/swiper1.png',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../static/swiper2.png',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: '../../static/swiper3.png',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
			}
		},
		methods: {
			jijian(title) {
				if (title == "物流公司查询") {
					uni.switchTab({
						url: '/pages/mall/mall'
					})
				} else if (title == "入库单管理") {
					uni.navigateTo({
						url: '../adminIn/adminIn'
					});
				} else if (title == "送货单管理") {
					uni.navigateTo({
						url: '../adminOut/adminOut'
					});
				} else if (title == "寄件单管理") {
					uni.navigateTo({
						url: '../adminJ/adminJ'
					});
				} else if (title == "物流公司管理") {
					uni.navigateTo({
						url: '../adminW/adminW'
					});
				} else {
					uni.navigateTo({
						url: '../jijian/jijian'
					});
				}
			},
			zhuan(name) {
				if (name == "物流公司列表") {
					uni.switchTab({
						url: '/pages/mall/mall'
					})
				} else if (name == "入库单列表") {
					uni.navigateTo({
						url: '/pages/creation/creation'
					})
				} else if (name == "送货单列表") {
					uni.navigateTo({
						url: '/pages/community/community'
					});
				} else {
					uni.navigateTo({
						url: '/pages/wuliulist/wuliulist'
					});
				}
			}
		}
	}
</script>

<style>

</style>