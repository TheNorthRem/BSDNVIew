<template>
    <!-- <span v-for="i in articlesArrayLength" style="padding-bottom: 5%;"> -->
    <div class="articleInfo">
        <header class="headerBox">
            <!-- <h3>
                {{ this.title }}
            </h3> -->
            <h2> {{this.title}} </h2>
            <keep-alive>
                <div class="authorBox">
               
                     <img :src= this.avatar class="avator" />

                    <div>
                        <h3>
                            {{ this.nickName }}
                        </h3>
                        <p>ID：{{ this.uploaderId }}</p>
                    </div>
               
                </div>
             </keep-alive>
        </header>

        <div style="border: 1px solid #652828;border-radius: 3px; padding: 2%">
            <!-- <Editor style="height: 200px; overflow-y: hidden; width: 800px; " v-model=this.brief
                :defaultConfig="editorConfig" :mode="mode" @onCreated="onCreated" />
              -->
              <h3>
                {{this.brief}}
              </h3>
        </div>

        <footer class="footerBox">
            <!-- <h4>
                    <p style="padding-left: 1300%;" >More...</p>
                </h4> -->
            <div style="padding-left: 90%;">
                <el-button type="primary" text bg @click="MoreRouter">More...</el-button>
            </div>

        </footer>
    </div>
    <!-- </span> -->
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ElButton } from '@/../node_modules/element-plus';
// import { Mounted } from "vue"

export default {
    name: "showEditor_brief",
    components: { Editor, Toolbar, ElButton },
    data() {
        return {
            editor: null,
            html: '<p>hello</p>',
            toolbarConfig: {},
            editorConfig: {
                placeholder: this.$props.brief,
                readOnly: true,
                MENU_CONF: {
                    uploadImage: {
                        server: "http://82.157.75.213:8082/ImageUpload",
                        fieldName: 'image',
                        maxFileSize: 100 * 1024 * 1024, // 1M
                    }
                },
            },
            mode: 'default', // or 'simple',
        }
    },
    props: {
        uploaderId: Number,
        uploaderNickName: String,
        articleId: Number,
        brief: String,
        title: String,
        nickName: String,
        avatar:String
    },

    methods: {
        // 显示热门文章
        MoreRouter() {
            console.log("articleId: " + this.articleId)
            this.$router.push({
                path: "/passageDetail",
                query: {
                    articleID: this.articleId,
                }
            })
            // localStiorage.setItem("articleID", this.articleId);
            // localStorage.setItem("articleID", this.articleId);

        },
        async onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },
    },
    
    

    beforeUnmount() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    },
    watch: {
        uploaderId() {
            // console.log(this.uploaderId);
        },
    },
}
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>

<style>
.headerBox{
    display: inline-flex; 
    padding-right: 2%;
    padding-bottom: 2%;
    align-content: space-between;
    justify-content: space-between;
    justify-items: space-between;
}
.authorBox{
    display: flex; 
    flex-direction: row;
    /* display: block; */
    width: 35%;
    justify-content: flex-end;
}
.avator{
    width: 30%;
    height: auto; 
    padding-right:10%;
    /* padding-left: 5%; */
    padding-bottom: 3%;
}
.footerBox{
    width: 100%;
    display: inline-flex;
    padding-top: 2%;
    flex-direction: row;
    justify-content: flex-end;
}

.articleInfo{
    width: 53vw;
    height: 200px;
    border-radius: 12px;
    border: 2px solid #F6F5F4;
    background: #FBFBFA;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    padding: 5%; 
    flex-direction: column;
}

</style>