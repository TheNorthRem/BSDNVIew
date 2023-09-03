// 定义GET请求方法
function get(url, data = null, noPrompt = false) {
    return request('get', url, data, noPrompt);
}

// 定义POST请求方法
function post(url, data = {}, noPrompt = false) {
    return request('post', url, data, noPrompt);
}

export default{
    get,post
}