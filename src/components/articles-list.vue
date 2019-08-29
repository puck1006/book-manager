<template>
  <div class="article-list">
    <el-table :data="articlesList" border>
      <el-table-column prop="title" label="文章标题" width="140"></el-table-column>
      <el-table-column prop="body" label="文章内容" width="300"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small" @click="handleRemove(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articlesList: []
    };
  },
  methods: {
    fetch() {
      this.$axios.get("/articles").then(res => {
        this.articlesList = res.data;
      });
    },
    handleRemove(id){
        this.$axios.delete('/articles/'+id).then(res =>{
            this.$message({
                message:'删除成功',
                type:'success'
            })
            this.fetch()
        })
    },
    handleEdit(id){
        this.$router.push('/articles/edit/'+id)
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss">
</style>