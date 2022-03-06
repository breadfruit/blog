<template>
  <div id="gitalk-container"></div>
</template>

<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
  export default {
    name: "blog-comments",
    mounted() {
      //配置项进行配置
      const commentConfig = {
        // 是否开启
        enable: true,
        // clientID
        clientID: "41f1394961c96ca7c0cf",
        // clientSecret
        clientSecret: "e01fd1221f060619632dc680f87d3bbffc84b30c",
        // 评论项目名
        repo: 'git-comments',
        owner: 'breadfruit',
        admin: ['breadfruit'],
        githubID:'breadfruit',
        id: decodeURI(window.location.pathname),
        language:'zh-CN',
        distractionFreeMode: true
      };
      //new一个gitalk实例
      const gitalk = new Gitalk(commentConfig);
      //渲染页面
      gitalk.render("gitalk-container");
    },
  };
</script>
