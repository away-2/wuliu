<template>
	<view>
		<view>
			<u-card>
				<view class="" slot="body">
					<uni-table stripe emptyText="暂无更多数据">
						<uni-tr>
							<uni-td>公司名称</uni-td>
							<uni-td>
							<uni-easyinput  v-model="item.name" placeholder="" />
							</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>地点</uni-td>
							<uni-td>
							<uni-easyinput  v-model="item.address" placeholder="" />
							</uni-td>			
						</uni-tr>
					</uni-table>
				</view>
			</u-card>
			<u-button style="width: 318rpx;background-color: #007aff;color: #fff;" @click="save">保存</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:uni.getStorageSync("wuliuw")
			}
		},
		methods: {
			save(){
				let that = this
				uni.showModal({
					content: '确定要保存吗?',
					showCancel: true,
					success(res) {
						if(res.confirm){
							that.$get("/updatawuliu",that.item).then(res=>{
								uni.showToast({
									title:'保存成功',
									icon:'none'
								})
								setTimeout(function(){
									uni.navigateBack({
										delta: 1
									});
								},500)
							})
						}
					}
				});
			}
		}
	}
</script>

<style>

</style>
