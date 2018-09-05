import axios from 'axios'
//创建一个axios实例，并在上面进行配置
var instance = axios.create({
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
})
export default instance