<template>
  <el-form ref="form" :model="article" label-width="80px" @submit.native.prevent="submitArticle">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button @click='handleCancle'>取消</el-button>
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
    submitArticle() {
      this.$axios.post("/articles", this.article).then(res => {
        if (res.status === 200) {
          this.$message({
            message: "添加成功",
            type: "success"
          })
          this.$router.push('/articles/list')
        }

      })
    },
    handleCancle(){
        this.article.title=''
        this.article.body=''
    }
  }
};
</script>