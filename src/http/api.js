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
export function searchPassage(){
    return request({
        url: "/bsArticle/searchContent",
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