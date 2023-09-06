<template>
    <!-- <span v-for="i in articlesArrayLength" style="padding-bottom: 5%;"> -->
    <div class="articleInfo">
        <header class="headerBox">
            <!-- <h3>
                {{ this.title }}
            </h3> -->
            <h2> {{this.title}} </h2>
            <!-- 等待替换动态头像资源
                :src=this.profilePhotoPath[i-1] -->
            <!-- <img src="../assets/avatar/avatar1.png" style="width: 10%;height: auto; padding-right:3%;" /> -->
            <div class="authorBox">

                <img src="../assets/avatar/avatar1.png" class="avator" />

                <div>
                    <h3>
                        {{ this.nickName }}
                    </h3>
                    <p>ID：{{ this.uploaderId }}</p>
                </div>
            </div>
        </header>

        <div style="border: 1px solid #652828;border-radius: 3px;">
            <!-- <Editor style="height: 200px; overflow-y: hidden; width: 800px; " v-model=this.brief
                :defaultConfig="editorConfig" :mode="mode" @onCreated="onCreated" />
              -->
              <p>
                {{ this.brief }}
              </p>
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
import { Mounted, BeforeCreate } from "vue"

export default {
    name: "showEditor_brief",
    components: { Editor, Toolbar, Mounted, ElButton, BeforeCreate },
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
                        server: "http://localhost:8081/ImageUpload",
                        fieldName: 'image',
                        maxFileSize: 100 * 1024 * 1024, // 1M
                    }
                },
            },
            mode: 'default', // or 'simple',
            //添加了标题、简介标头、省略号
        }
    },
    props: {
        uploaderId: Number,
        uploaderNickName: String,
        articleId: Number,
        brief: String,
        title: String,
        nickName: String,
    },

    methods: {
        // 显示热门文章
        MoreRouter() {
            console.log("articleId: " + this.articleId)
            this.$router.push({
                path: "/passageDetail",
                query: {
                    id: this.articleId,
                }
            })
            localStorage.setItem("ID", this.articleId);
        },
        async onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
            // console.log(this.uploaderId);
            // console.log(this.articleId);
        },
    },
    mounted() {

    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    },
    watch: {
        uploaderId() {
            console.log(this.uploaderId);
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
    width: 30%;
    justify-content: flex-end;
}
.avator{
    width: 35%;
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
</style>