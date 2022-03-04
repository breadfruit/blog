
module.exports = {
  lang: 'en-US',
  title: 'Study Of Toast',
  description: 'Just playing around',
  base:'/blog/',
  themeConfig: {
      //侧边栏
      sidebar: {
          "/": getSidebar()
      }
  }
};

function getSidebar() {
    return [
        {
            text: '/JavaScript',
            children: [
                {text: '基础', link: '/JavaScript/'},
                {text: '进阶', link: '/JavaScript/advanced'}
            ]
        },
        {
            text: '/TypeScript',
            children: [
                {text: '基础', link: '/TypeScript/'},
                {text: '进阶', link: '/TypeScript/advanced'}
            ]
        }
    ]
}
