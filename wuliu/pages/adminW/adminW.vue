<template>
	<view>
		<view style="display: flex;line-height: 80rpx;background-color: #fff;width: 750rpx;padding: 31rpx;margin: 0;">
			<u-search placeholder="根据用户名搜索物流公司" :show-action="false" @search="getdata"></u-search>
		</view>
		<view class="" v-if="list.length ==0" style="text-align: center;line-height: 100rpx;color: #aaa;">暂无相关物流公司数据</view>
		<view>
			
			<u-card v-for="item in list">
				<view class="" slot="body">
					<uni-table stripe emptyText="暂无更多数据">
						<uni-tr>
							<uni-td>公司名称</uni-td>
							<uni-td>{{item.name}}</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>公司地址</uni-td>
							<uni-td>{{item.address}}</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>快递单价</uni-td>
							<uni-td>{{item.price}}</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>
								<u-button style="background-color: #007aff;color: #fff;height: 60rpx;width: 150rpx;"@click="updata(item)">编辑</u-button>
							</uni-td>
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
				dz: 'heart',
				label:3078,
				list:[]
			}
		},
		onShow(){
			this.getdata("")
		},
		methods: {
			updata(item){
				uni.setStorageSync("wuliuw",item)
				uni.navigateTo({
					url: 'updata'
				});
			},
			del(id){
					let that = this
					uni.showModal({
						content: '确定要删除吗?',
						showCancel: true,
						success(res) {
							if(res.confirm){
								that.$get("/dellogistics?id="+id).then(res=>{
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
			sendarr(id){
				let that = this
				uni.showModal({
					content: '确定要取消寄件吗?',
					showCancel: true,
					success(res) {
						if(res.confirm){
							that.$get("/wuliuarr?id="+id).then(res=>{
								uni.showToast({
									title:'取消寄件成功',
									icon:'none'
								})
								that.getdata("")
							})
						}
					}
				});
				console.log(id);
			},
			getdata(serach){
				this.$get("/logistics",{
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