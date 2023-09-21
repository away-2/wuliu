<template>
	<view>
		<view style="margin-top: 10px;margin-bottom: 10px;">
			<u-section lineColor="#a9966c" title="物流寄件" style="margin-top: 5px;" :right="false"></u-section>
		</view>
		
		<view class="wrap">
			<u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="120" :label-position="labelPosition" label="寄件" prop="sname">
					<u-input :border="border" placeholder="请输入寄件人姓名" v-model="model.sname" type="text"></u-input>
				</u-form-item>
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="120" :label-position="labelPosition" label="收件" prop="rname">
					<u-input :border="border" placeholder="请输入收件人姓名" v-model="model.rname" type="text"></u-input>
				</u-form-item>
				<!-- <u-form-item :label-position="labelPosition" label="简介" prop="intro">
					<u-input type="textarea" :border="border" placeholder="请填写简介" v-model="model.intro" />
				</u-form-item> -->
				
				
				<u-form-item :label-position="labelPosition" label="货物种类" label-width="150" prop="likeFruit">
					
					<u-radio-group v-model="radio1" @change="checkboxGroupChange" :width="radioCheckWidth" :wrap="radioCheckWrap">
						<u-radio shape="circle" v-for="(item, index) in checkboxList" :key="index" :name="item.name">{{ item.name }}</u-radio>
					</u-radio-group>
					
					
				</u-form-item>
				
				<u-form-item :label-position="labelPosition" label="结算方式" prop="payType" label-width="150">
					<u-radio-group v-model="radio" @change="radioGroupChange" :width="radioCheckWidth" :wrap="radioCheckWrap">
						<u-radio shape="circle" v-for="(item, index) in radioList" :key="index" :name="item.name">{{ item.name }}</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item :label-position="labelPosition" label="寄件人地址" prop="sregion" label-width="150">
					<u-input :border="border" type="select" :select-open="spickerShow" v-model="model.sregion" placeholder="请选择地区" @click="spickerShow = true"></u-input>
				</u-form-item>
				
				
				<u-form-item :label-position="labelPosition" label="收件人地址" prop="rregion" label-width="150">
					<u-input :border="border" type="select" :select-open="rpickerShow" v-model="model.rregion" placeholder="请选择地区" @click="rpickerShow = true"></u-input>
				</u-form-item>

				<u-form-item :label-position="labelPosition" label="物流公司" prop="comname" label-width="150">
					<u-input :border="border" type="select" :select-open="compickerShow" v-model="model.comname" placeholder="请选择物流公司" @click="compickerShow = true"></u-input>
				</u-form-item>
					
				<u-form-item :rightIconStyle="{color: '#888', fontSize: '32rpx'}" :label-position="labelPosition" label="寄件人电话" prop="sphone" label-width="150">
					<u-input :border="border" placeholder="请输入寄件人电话" v-model="model.sphone" type="number"></u-input>
				</u-form-item>
				
				
				<u-form-item :rightIconStyle="{color: '#888', fontSize: '32rpx'}"  :label-position="labelPosition" label="收件人电话" prop="rphone" label-width="150">
					<u-input :border="border" placeholder="请输入收件人电话" v-model="model.rphone" type="number"></u-input>
				</u-form-item>
				
				<u-form-item :rightIconStyle="{color: '#888', fontSize: '32rpx'}"  :label-position="labelPosition" label="总重量" prop="phone" label-width="150">
					<u-input @input="updataprice" :border="border" v-model="model.weight" type="number"></u-input>
				</u-form-item>
				
				<u-form-item :rightIconStyle="{color: '#888', fontSize: '32rpx'}"  :label-position="labelPosition" label="总价格(元)" prop="phone" label-width="150">
					<u-input :disabled="true" :border="border" v-model="model.price" type="number"></u-input>
				</u-form-item>
				
			</u-form>
			<view class="agreement">
				<u-checkbox v-model="check" @change="checkboxChange"></u-checkbox>
				<view class="agreement-text">
					勾选代表同意物流寄件协议
				</view>
			</view>
			
			<u-action-sheet :list="actionSheetList" v-model="actionSheetShow" @click="actionSheetCallback"></u-action-sheet>
			<u-select mode="single-column" :list="selectList" v-model="selectShow" @confirm="selectConfirm"></u-select>
			<u-picker mode="region" v-model="spickerShow" @confirm="sregionConfirm"></u-picker>
			
			<u-picker mode="region" v-model="rpickerShow" @confirm="rregionConfirm"></u-picker>
			
			<u-select v-model="compickerShow" :list="comyarrs" @confirm="compyfirm"></u-select>
		</view>
		
		<u-button style="background-color: #007aff;width: 300rpx;color: #fff;" @click="submit">确认寄件</u-button>
	</view>
</template>
<script>
export default {
	data() {
		let that = this;
		return {
			comyarrs:[],
			comyarrs1:[],
			selectShow:false,
			actionSheetList:[],
			model: {
				rname: '',
				sname: '',
				likeFruit: '',
				intro: '',
				payType: '支付宝',
				agreement: false,
				rregion: '',
				sregion: '',
				goodsType: '',
				rphone: '',
				comname:'',
				price:0,
				weight:1,
				sphone: '',
				code: '',
				password: '',
				rePassword: '',
				remember: false,
				photo: ''
			},
			selectList: [
				{
					value: '电子产品',
					label: '电子产品'
				},
				{
					value: '服装',
					label: '服装'
				},
				{
					value: '工艺品',
					label: '工艺品'
				}
			],
			rules: {
				sname: [
					{
						required: true,
						message: '请输入姓名',
						trigger: 'blur' ,
					},
					{
						min: 3,
						max: 5,
						message: '姓名长度在3到5个字符',
						trigger: ['change','blur'],
					},
					{
						// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
						validator: (rule, value, callback) => {
							// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
							return this.$u.test.chinese(value);
						},
						message: '姓名必须为中文',
						// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						trigger: ['change','blur'],
					}
				],
				rname: [
					{
						required: true,
						message: '请输入姓名',
						trigger: 'blur' ,
					},
					{
						min: 3,
						max: 5,
						message: '姓名长度在3到5个字符',
						trigger: ['change','blur'],
					},
					{
						// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
						validator: (rule, value, callback) => {
							// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
							return this.$u.test.chinese(value);
						},
						message: '姓名必须为中文',
						// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						trigger: ['change','blur'],
					}
				],
				likeFruit: [
					{
						required: true,
						message: '请选择货物种类',
						trigger: 'change',
						// type: 'array',
					}
				],
				payType: [
					{
						required: true,
						message: '请选择任意一种支付方式',
						trigger: 'change',
					}
				],
				comname: [
					{
						required: true,
						message: '请选择物流公司',
						trigger: 'change',
					}
				],
				sregion: [
					{
						required: true,
						message: '请选择地区',
						trigger: 'change',
					}
				],
				rregion: [
					{
						required: true,
						message: '请选择地区',
						trigger: 'change',
					}
				],
				goodsType: [
					{
						required: true,
						message: '请选择商品类型',
						trigger: 'change',
					}
				],
				rphone: [
					{
						required: true,
						message: '请输入手机号',
						trigger: ['change','blur'],
					},
					{
						validator: (rule, value, callback) => {
							// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
							return this.$u.test.mobile(value);
						},
						message: '手机号码不正确',
						// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						trigger: ['change','blur'],
					}
				],
				sphone: [
					{
						required: true,
						message: '请输入手机号',
						trigger: ['change','blur'],
					},
					{
						validator: (rule, value, callback) => {
							// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
							return this.$u.test.mobile(value);
						},
						message: '手机号码不正确',
						// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						trigger: ['change','blur'],
					}
				]
			},
			border: false,
			check: false,
			selectStatus: 'close',
			checkboxList: [
				{
					name: '服装',
					checked: true,
					disabled: false
				},
				{
					name: '木材',
					checked: false,
					disabled: false
				},
				{
					name: '建材',
					checked: false,
					disabled: false
				},
				{
					name: '电子产品',
					checked: false,
					disabled: false
				}
			],
			radioList: [
				{
					name: '支付宝',
					checked: true,
					disabled: false
				},
				{
					name: '微信',
					checked: false,
					disabled: false
				},
				{
					name: '银联',
					checked: false,
					disabled: false
				},
				{
					name: '现金',
					checked: false,
					disabled: false
				}
			],
			radio: '支付宝',
			radio1: '服装',
			actionSheetShow: false,
			rpickerShow: false,
			compickerShow:false,
			spickerShow: false,
			sselectShow: false,
			rselectShow: false,
			radioCheckWidth: 'auto',
			radioCheckWrap: false,
			labelPosition: 'left',
			codeTips: '',
			errorType: ['message'],
		};
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
	computed: {
		borderCurrent() {
			return this.border ? 0 : 1;
		}
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
	methods: {
		updataprice(){
			this.model.price = this.model.price*this.model.weight
		},
		quersend(){
			let that = this
			uni.showModal({
				content: '确定要寄件吗?',
				showCancel: true,
				success(res) {
					let user = uni.getStorageSync("user")
					if(res.confirm){
						let jsonarr = {
							user_id:user.id,
							s_name:that.model.sname,
							s_phone:that.model.sphone,
							s_address:that.model.sregion,
							r_name:that.model.rname,
							r_phone:that.model.sphone,
							r_address:that.model.rregion,
							weight:that.model.weight,
							price:that.model.price,
							type:that.radio1
						}
						console.log(jsonarr);
						that.$get("/addsend",jsonarr).then(res1=>{
							if(res1=="寄件成功"){
								uni.showToast({
									title:"寄件成功",
									icon:'none',
									success() {
										setTimeout(function(){
											uni.navigateBack({
												delta: 1
											});
										},500)
									}
								})
							}else{
								uni.showToast({
									title:'寄件失败',
									icon:'none'
								})
							}
						})
					}
				}
			});
		},
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					if(!this.model.agreement) return this.$u.toast('请勾选协议');
					console.log('验证通过');
					this.quersend()
					
				} else {
					console.log('验证失败');
				}
			});
		},
		// 点击actionSheet回调
		actionSheetCallback(index) {
			uni.hideKeyboard();
			this.model.sex = this.actionSheetList[index].text;
		},
		// checkbox选择发生变化
		checkboxGroupChange(e) {
			this.model.likeFruit = e;
		},
		// radio选择发生变化
		radioGroupChange(e) {
			this.model.payType = e;
		},
		// 勾选版权协议
		checkboxChange(e) {
			this.model.agreement = e.value;
		},
		// 选择地区回调
		rregionConfirm(e) {
			this.model.rregion = e.province.label + '-' + e.city.label + '-' + e.area.label;
		},
		compyfirm(e){
			console.log(e);
			this.model.comname = e[0].label;
			this.model.price = e[0].value * this.model.weight;
		},
		sregionConfirm(e) {
			this.model.sregion = e.province.label + '-' + e.city.label + '-' + e.area.label;
		},
		// 选择商品类型回调
		selectConfirm(e) {
			this.model.goodsType = '';
			e.map((val, index) => {
				this.model.goodsType += this.model.goodsType == '' ? val.label : '-' + val.label;
			})
		},
		borderChange(index) {
			this.border = !index;
		},
		radioCheckboxChange(index) {
			if(index == 0) {
				this.radioCheckWrap = false;
				this.radioCheckWidth = 'auto';
			} else if(index == 1) {
				this.radioCheckWrap = true;
				this.radioCheckWidth = 'auto';
			} else if(index == 2) {
				this.radioCheckWrap = false;
				this.radioCheckWidth = '50%';
			}
		},
		labelPositionChange(index) {
			this.labelPosition = index == 0 ? 'left' : 'top';
		},
		codeChange(text) {
			this.codeTips = text;
		},
		errorChange(index) {
			if(index == 0) this.errorType = ['message'];
			if(index == 1) this.errorType = ['toast'];
			if(index == 2) this.errorType = ['border-bottom'];
			if(index == 3) this.errorType = ['border'];
		}
	}
};
</script>

<style scoped lang="scss">
.wrap {
	padding: 30rpx;
}

.agreement {
	display: flex;
	align-items: center;
	margin: 40rpx 0;

	.agreement-text {
		padding-left: 8rpx;
		color: $u-tips-color;
	}
}
</style>