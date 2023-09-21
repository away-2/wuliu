const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');
// cors 解决跨域问题
app.use(cors())
// 创建连接
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "123456",
	database: "scsx"
})
db.connect((err) => {
	if (err) throw err;
	console.log('连接成功');
})

// 查询内容
app.get("/gets", (req, res) => {
	let sql = "SELECT * FROM user";
	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
			res.json(result);
		}
	})
})

// 查询物流公司
app.get("/logistics", async(req, res) => {
	const serach = req.query.serach;
	console.log(serach);
	let sql = `SELECT * FROM logistics where name like '%${serach}%'`;
	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(sql);
			console.log(result);
			res.json(result);
		}
	})
})
// 查件请求
app.get("/sending", async(req, res) => {
	const serach = req.query.serach;
	console.log(serach);
	let sql = `SELECT * FROM sending where s_name like '%${serach}%'`;
	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(sql);
			console.log(result);
			res.json(result);
		}
	})
})


// 寄件请求
app.get("/addsend", async(req, res) => {
	console.log(req.query);
	try {
	      const s_name = req.query.s_name;
		  const user_id = req.query.user_id;
	      const s_phone = req.query.s_phone;
		  const s_address = req.query.s_address;
		  const r_name = req.query.r_name;
		  const type = req.query.type;
		  const r_phone = req.query.r_phone;
		  const r_address = req.query.r_address;
		  const weight = req.query.weight;
		  const price = req.query.price;
		  
		  let sql = `INSERT INTO sending (s_name, s_phone, s_address,r_name,r_phone,r_address,type,weight,price,user_id,isservice) VALUES ('${s_name}', '${s_phone}','${s_address}','${r_name}','${r_phone}','${r_address}','${type}','${weight}','${price}','${user_id}', '0')`;
		 // let sql = "SELECT * FROM user";
		 db.query(sql, (err, result) => {
		 	if (err) {
		 		console.log(err);
		 	} else {
		 		console.log(result);
		 		res.send("寄件成功")
		 	}
		 })
		 
		 let sql2 = `INSERT INTO outwarehouse_copy1 (weight,s_name, s_phone, s_address,r_name,r_phone,r_address,price,isservice) VALUES ('${weight}', '${s_name}','${s_phone}','${s_address}','${r_name}','${r_phone}','${r_address}','${price}', '0')`;
		 db.query(sql2, (err, result)=>{
			 if (err) {
			 	console.log(err);
			 } else {
			 	console.log(result);
			 }
		 })
		 
		 let sql3 = `INSERT INTO inwarehouse (weight,s_name, s_phone, s_address,r_name,r_phone,r_address,price) VALUES ('${weight}', '${s_name}','${s_phone}','${s_address}','${r_name}','${r_phone}','${r_address}','${price}')`;
		 db.query(sql3, (err, result)=>{
			 if (err) {
			 	console.log(err);
			 } else {
			 	console.log(result);
			 }
		 })
		 
		 
	    }catch (error) {
	        res.status(500).json({ message: error.message })
	    }
	
})
// 入库单查询请求
app.get("/inwarehoure", async(req, res) => {
	const serach = req.query.serach;
	console.log(serach);
	let sql = `SELECT * FROM inwarehouse where s_name like '%${serach}%'`;

	
	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(sql);
			console.log(result);
			res.json(result);
		}
	})
})
// 送货单查询请求

app.get("/outwarehouse", async(req, res) => {
	const serach = req.query.serach;
	console.log(serach);
	let sql = `SELECT * FROM outwarehouse_copy1 where s_name like '%${serach}%'`;

	
	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(sql);
			console.log(result);
			res.json(result);
		}
	})
})


// 注册请求
app.get("/resgie", async(req, res) => {
	try {
	      const loginPwd = req.query.loginPwd;
	      const loginName = req.query.loginName;
		  let post = {
		  	loginName: loginName,
		  	loginPwd: loginPwd,
			limits:0
		  };
		  let sql = `INSERT INTO user (loginName, loginPwd, limits) VALUES ('${loginName}', '${loginPwd}', '0')`;
		 // let sql = "SELECT * FROM user";
		 db.query(sql, (err, result) => {
		 	if (err) {
		 		console.log(err);
		 	} else {
		 		console.log(result);
		 		res.send("注册成功")
		 	}
		 })
	    }catch (error) {
	        res.status(500).json({ message: error.message })
	    }
	
})

// 登录请求
app.get("/login", async(req, res) => {
	try {
	      const loginPwd = req.query.loginPwd;
	      const loginName = req.query.loginName;   
		 let sql = `SELECT * FROM user WHERE loginName = '${loginName}' and loginPwd = '${loginPwd}'`;
		 // let sql = "SELECT * FROM user";
		 db.query(sql,(err,result) => {
		        if(err){
		            console.log(err);
		        }else{
		 		//console.log(result);
		            res.json(result);
		 		// res.json(req.params);
		        }
		    })
	    }catch (error) {
	        res.status(500).json({ message: error.message })
	    }
	
})

// 入库单编辑
app.get("/updatain", async(req, res) => {
	
	try {
	      const s_name = req.query.s_name;
	      const r_phone = req.query.r_phone;
		  const r_address = req.query.r_address;
		  const s_phone = req.query.s_phone;
		  const s_address = req.query.s_address;
		  const r_name = req.query.r_name;
		  
		 let sql = `UPDATE inwarehouse set s_name = '${s_name}',r_phone = '${r_phone}',r_address = '${r_address}',s_phone = '${s_phone}',s_address = '${s_address}',r_name = '${r_name}' WHERE id = '${req.query.id}'`;
		 db.query(sql, (err, result) => {
		 	if (err) {
		 		console.log(err);
		 	} else {
		 		console.log(result);
		 		res.send(`update ${req.params.id} success....`)
		 	}
		 })
		 
	    }catch (error) {
	        res.status(500).json({ message: error.message })
	    }
	
	
})

// 寄件单编辑
app.get("/updatasending", async(req, res) => {
	
	try {
	      const s_name = req.query.s_name;
	      const r_phone = req.query.r_phone;
		  const r_address = req.query.r_address;
		  const s_phone = req.query.s_phone;
		  const s_address = req.query.s_address;
		  const r_name = req.query.r_name;
		  const price = req.query.price;
		  
		 let sql = `UPDATE sending set s_name = '${s_name}',r_phone = '${r_phone}',r_address = '${r_address}',s_phone = '${s_phone}',s_address = '${s_address}',r_name = '${r_name}',price = '${price}' WHERE id = '${req.query.id}'`;
		 db.query(sql, (err, result) => {
		 	if (err) {
		 		console.log(err);
		 	} else {
		 		console.log(result);
		 		res.send(`update ${req.params.id} success....`)
		 	}
		 })
		 
	    }catch (error) {
	        res.status(500).json({ message: error.message })
	    }
	
	
})
// 物流公司编辑
app.get("/updatawuliu", async(req, res) => {
	
	try {
	      const name = req.query.name;
		  const address = req.query.address;
		  
		 let sql = `UPDATE logistics set name = '${name}',address = '${address}' WHERE id = '${req.query.id}'`;
		 db.query(sql, (err, result) => {
		 	if (err) {
		 		console.log(err);
		 	} else {
		 		console.log(result);
		 		res.send(`update ${req.params.id} success....`)
		 	}
		 })
		 
	    }catch (error) {
	        res.status(500).json({ message: error.message })
	    }
	
	
})
// 送货单编辑
app.get("/updataout", async(req, res) => {
	
	try {
	      const s_name = req.query.s_name;
	      const r_phone = req.query.r_phone;
		  const r_address = req.query.r_address;
		  const s_phone = req.query.s_phone;
		  const s_address = req.query.s_address;
		  const r_name = req.query.r_name;
		  
		 let sql = `UPDATE outwarehouse_copy1 set s_name = '${s_name}',r_phone = '${r_phone}',r_address = '${r_address}',s_phone = '${s_phone}',s_address = '${s_address}',r_name = '${r_name}' WHERE id = '${req.query.id}'`;
		 db.query(sql, (err, result) => {
		 	if (err) {
		 		console.log(err);
		 	} else {
		 		console.log(result);
		 		res.send(`update ${req.params.id} success....`)
		 	}
		 })
		 
	    }catch (error) {
	        res.status(500).json({ message: error.message })
	    }
	
	
})
// 送货单更新状态
app.get("/sendarr", (req, res) => {
	let sql = `UPDATE outwarehouse_copy1 set isservice = '1' WHERE id = '${req.query.id}'`;
	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
			res.send(`update ${req.params.id} success....`)
		}
	})
	
	let sql1 = `UPDATE sending set isservice = '2' WHERE id = '${req.query.id}'`;
	console.log(sql1);
	db.query(sql1)
}) 
// 删除物流公司
app.get("/dellogistics", (req, res) => {
	let sql = `delete FROM logistics WHERE id = '${req.query.id}'`;
	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
			res.send(`update ${req.params.id} success....`)
		}
	})
})

// 删除寄件单
app.get("/delsending", (req, res) => {
	let sql1 = `delete FROM inwarehouse WHERE id = '${req.query.id}'`;
	db.query(sql1)
	
	
	let sql3 = `delete FROM sending WHERE id = '${req.query.id}'`;
	db.query(sql3)
	let sql = `delete FROM outwarehouse_copy1 WHERE id = '${req.query.id}'`;
	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
			res.send(`update ${req.params.id} success....`)
		}
	})
	
	
})
// 删除送货单
app.get("/deoutnwarehouse", (req, res) => {
	
	let sql1 = `delete FROM inwarehouse WHERE id = '${req.query.id}'`;
	db.query(sql1)
	
	
	let sql3 = `delete FROM sending WHERE id = '${req.query.id}'`;
	db.query(sql3)
	let sql = `delete FROM outwarehouse_copy1 WHERE id = '${req.query.id}'`;
	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
			res.send(`update ${req.params.id} success....`)
		}
	})
	
	
})
// 删除入库单
app.get("/delinwarehouse", (req, res) => {
	let sql1 = `delete FROM inwarehouse WHERE id = '${req.query.id}'`;
	db.query(sql1)
	
	
	let sql3 = `delete FROM sending WHERE id = '${req.query.id}'`;
	db.query(sql3)
	let sql = `delete FROM outwarehouse_copy1 WHERE id = '${req.query.id}'`;
	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
			res.send(`update ${req.params.id} success....`)
		}
	})
	
	
})
// 物流单更新状态
app.get("/wuliuarr", (req, res) => {
	
		let sql = `UPDATE sending set isservice = '1' WHERE id = '${req.query.id}'`;
		db.query(sql, (err, result) => {
			if (err) {
				console.log(err);
			} else {
				console.log(result);
				res.send(`update ${req.params.id} success....`)
			}
		})
	
})

// 删除内容
app.get("/del/:id", (req, res) => {
	let sql = `DELETE FROM user WHERE id = ${req.params.id}`;
	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
			res.send("删除成功.....")
		}
	})

})



app.listen(3000, () => {
	console.log("web服务器,访问地址http://localhost:3000-------------");
})