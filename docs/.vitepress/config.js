
module.exports = {
  lang: 'en-US',
  title: 'Study Of Toast',
  description: 'Just playing around',
  base:'/blog/',
  head: [
        // 设置 描述 和 关键词
        [
            "meta",
            { name: "keywords", content: "react react-admin ant 后台管理系统" },
        ],
        [
            "meta",
            {
                name: "description",
                content:
                    "此框架使用与二次开发，前端框架使用react，UI框架使用ant-design，全局数据状态管理使用redux，ajax使用库为axios。用于快速搭建中后台页面。",
            },
        ],
  ],
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
