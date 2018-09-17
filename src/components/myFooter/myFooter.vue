<template>
  <div class="my-footer">
    <el-footer>
      我是footer
    </el-footer>
  </div>
</template>

<style  lang="scss" scoped>
// .my-footer /deep/ .el-footer {
//   background-color: red;
// }
.my-footer {
  /deep/ {
    .el-footer {
      background-color: yellow!important;
    }
  }
}
</style>
