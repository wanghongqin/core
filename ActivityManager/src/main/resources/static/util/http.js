 // var http = [];

 //axios 配置
 axios.defaults.timeout = 5000
 axios.defaults.baseURL = "http://192.168.1.48:10189/ActivityManager/";

 //http request 拦截配置
 axios.interceptors.request.use(
 	function (config) {
 		//在请求发出之前进行一些操作
 		var token = sessionStorage.getItem("token"); //获取存储在本地的token
 		var data = config.data;
 		var params = new URLSearchParams()
 		for (var key in config.data) {
 			if (typeof (data[key]) == "object" &&
 				Object.prototype.toString.call(data[key]).toLowerCase() == "[object object]" && !data[key].length) {
 				console.log(data[key])
 				for (var keys in data[key]) {
 					params.append(key + "." + keys, data[key][keys])
 				}
 			} else {
 				params.append(key, data[key])
 			}
 		}
 		config.data = params;
 		if (token) {
 			config.headers.Authorization = "Token " + token; //携带权限参数
 		}
 		return config;
 	},
 	function (err) {
 		//Do something with request error
 		return Promise.reject(error);
 	}
 );

 // http response 拦截器（所有接收到的请求都要从这儿过一次）
 axios.interceptors.response.use(
 	function (response) {
 		if (response.status == 401) {
 			router.push({ //push后面是一个参数对象，可以携带很多参数，具体可以去vue-router上查看，例如query字段表示携带的参数
 				path: '/login'
 			})
 		}
 		return response;
 	},
 	function (error) {
 		return Promise.reject(error.response)
 	}
 );

 // export default axios;

 //封装方法
 /**
  * get方法
  */
 //  http.get = function (url, params = {}) {
 //  	return new Promise(function (resolve, reject) {
 //  		axios.get(url, params).then(function (respone) {
 //  			resolve(respone.data)
 //  		}).catch(function (err) {
 //  			reject(err)
 //  		})
 //  	});
 //  }
 // 
 //  /**
 //   * post 请求方法
 //   */
 //  http.post = function (url, params = {}) {
 //  	return new Promise(function (resolve, reject) {
 //  		axios.post(url, params).then(function (respone) {
 //  			resolve(respone.data)
 //  		}).catch(function (err) {
 //  			reject(err)
 //  		})
 //  	});
 //  }
