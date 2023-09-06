<template>
    <!-- <span v-for="i in articlesArrayLength" style="padding-bottom: 5%;"> -->
        <div class="articleInfo">
            <footer style="display: inline-flex; padding-top: 2%;">
                <!-- 等待替换动态头像资源
                :src=this.profilePhotoPath[i-1] -->
                <img src="../assets/avatar/avatar1.png" style="width: 10%;height: auto; padding-right:3%;" />
                <div>
                    <h3>
                        {{ this.nickName }}
                    </h3>
                    <p>ID：{{ this.uploaderId }}</p>
                </div>

            </footer>

            <div style="border: 1px solid #652828;border-radius: 3px;">
                <Editor style="height: 100px; overflow-y: hidden; width: 800px; " v-model=this.brief[i-1]
                    :defaultConfig="editorConfig" :mode="mode" @onCreated="onCreated" />
            </div>

            <footer style="display: inline-flex;padding-top: 2%;">
                <!-- <h4>
                    <p style="padding-left: 1300%;" >More...</p>
                </h4> -->
                <div style="padding-left: 1000%;">
                    <el-button type="primary" text bg @click="MoreRouter(i)" :index=i>More...</el-button>
                </div>

            </footer>
        </div>
    <!-- </span> -->
</template>


<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ElButton } from '@/../node_modules/element-plus';
import { Mounted } from "vue"

export default {
    name: "showEditor_brief",
    components: { Editor, Toolbar, Mounted, ElButton },
    data() {
        return {
            editor: null,
            html: '<p>hello</p>',
            toolbarConfig: {},
            editorConfig: {
                placeholder: '请输入内容...',
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
        }
    },
    props: {
        uploaderId : Number, 
        uploaderNickName: String,
        articleId:Number,
        brief:String,
        title:String,
        nickName:String
    },

    methods: {
        // 显示热门文章
        MoreRouter(i) {
            console.log(this.toArticleId)
            this.$router.push({
                path: "/passageDetail",
                query: {
                    id: this.articleId[i],
                }
            })
        },
        async onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },
    },
    mounted() {
        console.log(this.uploaderId)
        console.log(this.getDataFLag)
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