import request from './request'

//登录
export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })}


//注册
export function register(data) {
    return request({
        url: '/login/register',
        method: 'post',
        data
    })
}

//上传文章
export function uploadPassage(data){
    return request({
        url: "/bsArticle/upload",
        method: 'post',
        data
    })
}

//上传文章照片
export function ImageUpload(data){
    return request({
        url: "/ImageUpload",
        method: 'get',
        data
    })
}

//热门文章
export function getTopArticles(){
    return request({
        url: "/bsArticle/getTopArticles",
        method: 'get',
    })
}

//搜索
// export function ImageUpload(data){
//     return request({
//         url: "/ImageUpload",
//         method: 'get',
//         data
//     })
// }

//文章搜索
export function searchPassage(params){
    return request({
        url: "/bsArticle/searchContent",
        method: 'get',
        params
    })
}

//获取当前用户信息
export function getUserInfo(params){
    return request({
        url: "/bsUser/getById",
        method: 'get',
        params
    })
}


//获取用户的详细信息：用户主页展示信息
export function detailedUserInfo(params){
    return request({
        url: "/bsUserInformation/search",
        method: 'get',
        params
    })
}

//分类跳转，返回分类文章(分页)
export function getClassifiedArticle(params) {
    return request({
        url: "/bsArticle/getByCategory",
        method: 'get',
        params
    })
}
