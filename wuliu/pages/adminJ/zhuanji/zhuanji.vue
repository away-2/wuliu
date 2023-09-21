<template>
	<view>
		<view>
			<u-card>
				<view class="" slot="body">
					<uni-table stripe emptyText="暂无更多数据">
						<uni-tr>
							<uni-td>寄件人</uni-td>
							<uni-td>
								{{item.s_name}}
							</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>重量</uni-td>
							<uni-td>{{item.weight}} KG</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>收件人电话</uni-td>
							<uni-td>
								{{item.r_phone}}
							</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>收件人地址</uni-td>
							<uni-td>
								{{item.r_address}}
							</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>寄件人电话</uni-td>
							<uni-td>
								{{item.s_phone}}
							</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>寄件人地址</uni-td>
							<uni-td>
								{{item.s_address}}
							</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>收件人姓名</uni-td>
							<uni-td>
								{{item.r_name}}
							</uni-td>			
						</uni-tr>
						
						<uni-tr>
							<uni-td>总价格</uni-td>
							<uni-td>{{item.price}}元</uni-td>			
						</uni-tr>
						<uni-tr>
							<uni-td>转寄物流</uni-td>
							<uni-td>
								<view  @click="show=true" class="" style="color: #aaa;">
									{{com}}
								</view>
							</uni-td>			
						</uni-tr>
					</uni-table>
				</view>
			</u-card>
			<u-select v-model="show" :list="comyarrs" @confirm="compyfirm"></u-select>
			<u-button style="width: 318rpx;background-color: #007aff;color: #fff;" @click="save">保存</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:uni.getStorageSync("outstorzhuan"),
				show:false,
				com:"请选择转寄物流公司",
				comyarrs:[]
			}
		},
		onLoad() {
			this.$get("/logistics",{
				serach:""
			}).then(res=>{
				res.map(item=>{
					item.label = item.name
					item.value = item.price
				})
				this.comyarrs = res
				// this.$forceUpdata()
			})
		},
		methods: {
			compyfirm(e){
				console.log(e);
				this.com = e[0].label;
				this.item.price = e[0].value * this.item.weight;
			},
			save(){
				let that = this
				uni.showModal({
					content: '确定要保存吗?',
					showCancel: true,
					success(res) {
						if(res.confirm){
							that.$get("/updatasending",that.item).then(res=>{
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
