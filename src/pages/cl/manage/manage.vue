<template>
  <div>
    <div>我的显示是{{data}}</div>
    <div>
      <div>我这里显示文件夹地址</div>
      <div>
        <input type="file" value="点击选择文件" webkitdirectory directory @change="myInput($event)"></div>
   
    </div>

  </div>
</template>

<style src="./manage.scss" lang="scss" scoped>
</style>
