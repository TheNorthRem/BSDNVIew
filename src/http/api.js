import request from './request'

//登录
export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}


//注册
export function register(data) {
    return request({
        url: '/login/register',
        method: 'post',
        data
    })
}

//上传文章
export function uploadPassage(data) {
    return request({
        url: "/bsArticle/upload",
        method: 'post',
        data
    })
}

//上传文章照片
export function ImageUpload(data) {
    return request({
        url: "/ImageUpload",
        method: 'get',
        data
    })
}

//热门文章
export function getTopArticles() {
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
export function searchPassage(params) {
    return request({
        url: "/bsArticle/searchContent",
        method: 'get',
        
        params
    })
}

//获取当前用户信息
export function getUserInfo(params) {
    return request({
        url: "/bsUser/getById",
        method: 'get',
        params
    })
}


//获取用户的详细信息：用户主页展示信息
export function detailedUserInfo(params) {
    return request({
        url: "/bsUserInformation/search",
        method: 'get',
        params
    })
}

export function getMessageUser(params){
    return request({
        url: "/bsMessage/searchSendUser",
        method:'get',
        params
    })
}

export function getMessage(params){
    return request({
        url: "/bsMessage/searchMessage",
        method:'get',
        params
    })
}

//获取文章详情根据id查询
export function detailedPassageInfo(params){
    return request({
        url: "/bsArticle/getById",
        method: 'get',
        params
    })
}


//获取文章的全部评论
export function getComments(articleId, page){
    return request({
        url: "/bsComments/getComments",
        method: 'get',
        params:{
            "articleId":articleId,
            "page":page
        }
    })
}

//分类跳转，返回分类文章(分页)
export function getClassifiedArticle(category, page) {
    return request({
        url: "/bsArticle/getByCategory",
        method: 'get',
        params: {
            "category": category,
            "page": page
        }
    })
}


//登出用户
export function logOutUser(userId,token) {
    return request({
        url: "/login/logOut",
        method: 'delete',
        params:{
            "userId":userId,
            "token":token
        }
    })
}

//注销用户
export function deleteUserByID(params) {
    return request({
        url: "/bsUser/delete",
        method: 'delete',
        params
    })
}

//上传用户头像
export function uploadUserAvatar(data) {
    return request({
        url: "/ImageUpload",
        method: 'post',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}



//修改用户信息
export function editUserInfo(data) {
    return request({
        url: "/bsUserInformation/edit",
        method: 'post',
        data
    })
}



//通过文章id访问
export function getArticleById(params) {
    return request({
        url: "/bsArticle/getById",
        method: 'get',
        params
    })
}

//通过类别访问文章
export function getByCategory(params) {
    return request({
        url: "/bsArticle/getByCategory",
        method: 'get',
        params
    })
}
//收藏文章
export function addFavorites(params) {
    return request({
        url: "/bsArticle/addFavorites",
        method: 'post',
        params
    })
}

export function getAllArticles(params) {
    return request({
        url: "/bsArticle/list",
        method: 'get',
    })
}

export function sendMessage(data) {
    return request({
        url: "/bsMessage/add",
        method: 'post',
        data
    })
}

//上传评论
export function uploadComment(params) {
    return request({
        url: "/bsComments/uploadComment",
        method: 'post',
        params
    })
}

//取消文章收藏
export function deleteFavorites(params) {
    return request({
        url: "/bsArticle/deleteFavorites",
        method: 'delete',
        params
    })
}

export function getArticlesByUser(params){
    return request({
        url: "/bsArticle/getUserArticles",
        method: 'get',
        params
    })  
}

export function getFavoriteArticlesByUser(params){
    return request({
        url: "/bsArticle/getUserFavoriteArticles",
        method: 'get',
        params
    })  
}