export default{
	get(url,data){
		return new Promise((resolve,reject)=>{
			uni.request({
				url: "http://localhost:3000"+url,
				method: 'GET',
				data:data,
				success: res => {
					resolve(res.data);
				},
				fail: () => {},
				complete: () => {}
			});
		})
	}
}