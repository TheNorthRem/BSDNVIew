<template>
    <!-- 文章标签选择器用对话框包裹 -->
   <el-dialog
    v-model="centerDialogVisible"
    title="Tags"
    width="30%"
    align-center
  >
    <span>
        <!-- 标签选择器 -->
        <el-select v-model="value" class="m-2" placeholder="请选择发布文章的分类标签" size="large">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
        </el-select>
    </span>
    <!-- 对话框的底部 -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelSelect">取 消</el-button>
        <el-button type="primary" @click="confirmSelect">
          确 认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ElSelect, ElDialog, ElButton,ElOption } from '@/../node_modules/element-plus';
export default {
    name: 'tagSelector',
    components: {
        ElSelect,
        ElDialog,
        ElButton,
        ElOption
    },
    data(){
        return{
            value: '',
            centerDialogVisible: true,
            options: [
            {
                value: '前端',
                label: '前端',
            },
            {
                value: '后端',
                label: '后端',
            },
            {
                value: '数据库',
                label: '数据库',
            },
            {
                value: '生活',
                label: '生活',
            },
            {
                value: '编程语言',
                label: '编程语言',
            },
            {
                value: '其他',
                label: '其他',
            },
            ]
        }
    },
    methods: {
        // 取消选择标签，关闭对话框
        cancelSelect(){
            this.centerDialogVisible = false
        },
        confirmSelect(){
            if(this.value!==''){
                // 选择了标签
                // 向父组件传递选择的标签 关闭对话框 跳转路由
                this.$emit('selectTag', this.value)
                this.centerDialogVisible = false
                this.$router.push({
                                    path: '/editorPassage',
                                    query: {
                                        name: 'value'
                                    }
                                    })
            }else{
                // 没有选择标签
                this.$message({
                    message: '请选择标签',
                    type: 'warning'
                })
            }
            
        }
    }
}
</script>

<style>

</style>