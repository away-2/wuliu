<template>
	<view>
		<view style="display: flex;line-height: 80rpx;background-color: #fff;width: 750rpx;padding: 31rpx;margin: 0;">
			<u-search placeholder="根据用户名搜索入库单" :show-action="false" @search="getdata"></u-search>
		</view>
		<view>
			<u-card v-for="item in list">
				<view slot="head">
					<view style="display: flex;flex-wrap: wrap;height: 40px;">
						<view style="margin: 10px;">
							<image src="../../static/tuandui.png" mode="" style="width: 40px;height: 40px;"></image>
						</view>
						<view style="text-align: left;">
							<view style="font-size: 18px;margin-top: 6px;">{{item.s_name}}</view>
							<!-- <view style="width: 60px;font-size: 12px;border-radius: 10%;margin-top: 5px">{{item.}}</view> -->
						</view>
					</view>
				</view>
				<view class="" slot="body">
					<uni-table stripe emptyText="暂无更多数据">
						<uni-tr>
							<uni-td>重量</uni-td>
							<uni-td>{{item.weight}} KG</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>收件人电话</uni-td>
							<uni-td>{{item.r_phone}}</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>收件人地址</uni-td>
							<uni-td>{{item.r_address}}</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>寄件人电话</uni-td>
							<uni-td>{{item.s_phone}}</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>寄件人地址</uni-td>
							<uni-td>{{item.s_address}}</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>寄件人姓名</uni-td>
							<uni-td>{{item.s_name}}</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>收件人姓名</uni-td>
							<uni-td>{{item.r_name}}</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>总价格</uni-td>
							<uni-td>{{item.price}}元</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td></uni-td>
							<uni-td>
								<u-button style="background-color: #007aff;color: #fff;height: 60rpx;width: 150rpx;"@click="del(item.id)">删除</u-button>
							</uni-td>			
						</uni-tr>
					</uni-table>
				</view>
			</u-card>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				current1:1,
				sc: "star",
				list:[],
				dz: 'heart',
				label:3078,
			}
		},
		onLoad(){
			this.getdata("")
		},
		methods: {
			del(id){
				
					let that = this
					uni.showModal({
						content: '确定要删除吗?',
						showCancel: true,
						success(res) {
							if(res.confirm){
								that.$get("/delinwarehouse?id="+id).then(res=>{
									that.getdata("")
									uni.showToast({
										title:'删除成功',
										icon:'none'
									})
								})
							}
						}
					});
					console.log(id);
				
			},
			getdata(serach){
				this.$get("/inwarehoure",{
					serach:serach
				}).then(res=>{
					this.list = res
					console.log(res);
				})
			},
			change(index) {
				this.current = index;
			},
			change1(index) {
				this.current1 = index;
			},
			shou() {
				if (this.sc != "star-fill") {
					this.sc = "star-fill"
				} else {
					this.sc = "star"
				}
			},
			dian() {
				if (this.dz != "heart-fill") {
					this.dz = "heart-fill",
					this.label += 1
				} else {
					this.dz = "heart"
					this.label -= 1
				}
			}
		}
	}
</script>

<style>

</style>