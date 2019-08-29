<template>
  <el-form ref="form" :model="article" label-width="80px" @submit.native.prevent="handleEditSave">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: "",
        body: ""
      }
    };
  },
  methods: {
    handleEditSave(){
      this.$axios.put('/articles/'+this.$route.params.id).then(res =>{
        this.$message({
          message:'保存成功',
          type:'success'
        })
        this.$router.push('/articles/list')
      })
    },
    fetchOne(){
      this.$axios.get('/articles/'+this.$route.params.id).then(res =>{
        this.article = res.data.articleData
      })
    }

  },
  created() {
    this.fetchOne()
  },
};
</script>