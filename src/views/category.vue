<template>
    <div class="viewSettings">
        <div class="gird-item">
            <div class="grid-container">
                <!-- 分类1的格子，也是左侧的唯一的格子 -->
                <section class="block1">
                    <div class="blockInsideForCate">
                        <header class="blockHeaderForCate">
                            <!-- 分类上面的小图标 -->
                            <span class="blockIconForCate">
                                <img class="svg" src="../assets/categoryIcon/Icon1.svg" />
                            </span>
                            <!-- 每个分类的标题 -->
                            <span class="blockHeaderTitleForCate">
                                <h2> {{ categoryTitle[0] }} </h2>
                            </span>
                            <!-- More按钮，用于进入分类内部，同时点击分类标题也可进入分类内部 -->
                            <div class="moreButtonForCate">
                                <!-- href中为跳转页面 -->
                                <a class="moreForCate" @click="() => {
                                        this.getByCategoryForm.category = this.categoryTitle[0];
                                        getAllArticlesFunction();
                                    }">More →</a>
                            </div>
                            <img src="../assets/hero.webp" class="block1Img" />

                        </header>
                    </div>
                </section>
                <!-- 右侧是六个小格子 -->
                <div class="rightBlocks">
                    <!-- 分类格2 -->
                    <section class="block2">
                        <div class="blockInsideForCate">
                            <header class="blockHeaderForCate">
                                <!-- 分类上面的小图标 -->
                                <span class="blockIconForCate">
                                    <img class="svg" src="../assets/categoryIcon/Icon2.svg" />
                                </span>
                                <!-- 每个分类的标题 -->
                                <span class="blockHeaderTitleForCate">
                                    <h2> {{ categoryTitle[1] }} </h2>
                                </span>
                                <div class="moreButtonForCate">
                                    <!-- href中为跳转页面 -->
                                    <a class="moreForCate" @click="() => {
                                        this.getByCategoryForm.category = this.categoryTitle[1];
                                        getByCategoryFunction();
                                    }">More →</a>
                                </div>
                            </header>
                        </div>
                    </section>
                    <!-- 分类格3 -->
                    <section class="block2">
                        <div class="blockInsideForCate">
                            <header class="blockHeaderForCate">
                                <!-- 分类上面的小图标 -->
                                <span class="blockIconForCate">
                                    <img class="svg" src="../assets/categoryIcon/Icon3.svg" />
                                </span>
                                <!-- 每个分类的标题 -->
                                <span class="blockHeaderTitleForCate">
                                    <h2> {{ categoryTitle[2] }} </h2>
                                </span>
                                <div class="moreButtonForCate">
                                    <!-- href中为跳转页面 -->
                                    <a class="moreForCate" @click="() => {
                                        this.getByCategoryForm.category = this.categoryTitle[2];
                                        getByCategoryFunction();
                                    }">More →</a>
                                </div>
                            </header>
                        </div>
                    </section>
                    <!-- 分类格4 -->
                    <section class="block2">
                        <div class="blockInsideForCate">
                            <header class="blockHeaderForCate">
                                <!-- 分类上面的小图标 -->
                                <span class="blockIconForCate">
                                    <img class="svg" src="../assets/categoryIcon/Icon4.svg" />
                                </span>
                                <!-- 每个分类的标题 -->
                                <span class="blockHeaderTitleForCate">
                                    <h2> {{ categoryTitle[3] }} </h2>
                                </span>
                                <div class="moreButtonForCate">
                                    <!-- href中为跳转页面 -->
                                    <a class="moreForCate" @click="() => {
                                        this.getByCategoryForm.category = this.categoryTitle[3];
                                        getByCategoryFunction();
                                    }">More →</a>
                                </div>
                            </header>
                        </div>
                    </section>
                    <!-- 分类格5 -->
                    <section class="block2">
                        <div class="blockInsideForCate">
                            <header class="blockHeaderForCate">
                                <!-- 分类上面的小图标 -->
                                <span class="blockIconForCate">
                                    <img class="svg" src="../assets/categoryIcon/Icon5.svg" />
                                </span>
                                <!-- 每个分类的标题 -->
                                <span class="blockHeaderTitleForCate">
                                    <h2> {{ categoryTitle[4] }} </h2>
                                </span>
                                <div class="moreButtonForCate">
                                    <!-- href中为跳转页面 -->
                                    <a class="moreForCate" @click="() => {
                                        this.getByCategoryForm.category = this.categoryTitle[4];
                                        getByCategoryFunction();
                                    }">More →</a>
                                </div>
                            </header>
                        </div>
                    </section>
                    <!-- 分类格6 -->
                    <section class="block2">
                        <div class="blockInsideForCate">
                            <header class="blockHeaderForCate">
                                <!-- 分类上面的小图标 -->
                                <span class="blockIconForCate">
                                    <img class="svg" src="../assets/categoryIcon/Icon6.svg" />
                                </span>
                                <!-- 每个分类的标题 -->
                                <span class="blockHeaderTitleForCate">
                                    <h2> {{ categoryTitle[5] }} </h2>
                                </span>
                                <div class="moreButton">
                                    <a class="more" @click="() => {
                                        this.getByCategoryForm.category = this.categoryTitle[5];
                                        getByCategoryFunction();
                                    }">More →</a>
                                </div>
                            </header>
                        </div>
                    </section>
                    <!-- 分类格7 -->
                    <section class="block2">
                        <div class="blockInsideForCate">
                            <header class="blockHeaderForCate">
                                <!-- 分类上面的小图标 -->
                                <span class="blockIconForCate">
                                    <img class="svg" src="../assets/categoryIcon/Icon7.svg" />
                                </span>
                                <!-- 每个分类的标题 -->
                                <span class="blockHeaderTitleForCate">
                                    <h2> {{ categoryTitle[6] }} </h2>
                                </span>
                                <div class="moreButtonForCate">
                                    <!-- href中为跳转页面 -->
                                    <a class="moreForCate" @click="() => {
                                        this.getByCategoryForm.category = this.categoryTitle[6];
                                        getByCategoryFunction();
                                    }">More →</a>
                                </div>
                            </header>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import  {getByCategory,getAllArticles} from "@/http/api"
import{ElBacktop} from '@/../node_modules/element-plus'
export default {
    name: 'Category',
    components: {
        getByCategory,
        getAllArticles,
        ElBacktop
    },
    data() {
        return {
            categoryTitle: ['所有文章', '前端', '后端', '数据库', '生活', '编程语言', '娱乐'],
            href: [],
            getByCategoryForm: {
                category: "",
                page: 1,
            },
            searchResults: []
        }
    },
    methods: {
        getByCategoryFunction() {
            getByCategory(this.getByCategoryForm) // 发送GET请求，传递搜索查询参数
                .then(result => {
                    console.log("搜索分类成功！")
                    // console.log(this.getByCategoryForm);
                    // 将搜索结果文章存储到searchResults中
                    this.searchResults = JSON.stringify(result.data.data.records);
                    // console.log("searchResult",this.searchResults);
                    // console.log("searchResult",this.searchResults[0].title);
                    // 获取信息成功后跳转到搜索结果页面               
                    this.$router.push({
                        path: '/categorySearch',
                        query: { Articles: this.searchResults }
                    })
                })
                .catch(error => {
                    console.log(this.getByCategoryForm);
                    console.error('搜索失败:', error);
                });
        },
        getAllArticlesFunction() {
            //发送GET请求传递搜索查询参数
                
                    // 将搜索结果文章存储到searchResults中
                 
                this.$router.push({
                    path: '/search',
                    query: { 
                        inputContent: ""
                    }
                })
               
        },
    }
}

</script>

<style>
.block1Img {
    z-index: 3;
    padding-right: 10%;
    width: 80%;
    position: relative;
    top: 120px;
    left: 25px;
    bottom: 0;
}

.viewSettings {
    width: 100vw;
    min-width: 1400px;
    /* 最小宽度 控制缩放时的布局不变形 */
}

.svg {
    z-index: 99;
}

.gird-item {
    padding-top: 8%;
    margin-left: 10%;
    margin-right: 10%;
    grid-column: span 12;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 0px;
    padding-right: 0px;
    gap: 24px;

}

.block1 {
    border-radius: 12px;
    width: 96%;
    height: 100%;
    background-color: #F6F5F4;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out;
    position: relative;
}

.blockInsideForCate {
    padding: 8%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin: 0;
    gap: 40px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    width: 100%;
}

.blockHeaderForCate {
    max-width: 512px;
}

.blockIconForCate {
    display: block;
    width: 26px;
    height: 26px;
    color: #0a85d1;
    margin-bottom: 10px;
}

/* .icon {
    display: block;
    width: 26px;
    height: 26px;
    color: var(--color-link);
    margin-bottom: 10px;
} */

.moreButtonForCate {
    color: #0a85d1;
}

.moreForCate {
    position: relative;
    line-height: 24px;
}

.moreForCate:hover {
    text-decoration: underline;
}

.rightBlocks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    gap: 16px;
}

.block2 {
    padding: 20px;
    border-radius: 12px;
    width: 80%;
    height: 77%;
    background-color: #F6F5F4;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out;
    position: relative;
}</style>