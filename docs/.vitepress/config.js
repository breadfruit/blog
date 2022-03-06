
module.exports = {
  lang: 'en-US',
  title: 'Study Of Toast',
  description: 'Just playing around',
  base:'/blog/',
  head: [
        [
            "meta",
            {
                name: "viewport",
                content:
                    "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
            },
        ],
        ["meta", { name: "keywords", content: "吐司" }],
        ["link", { rel: "icon", href: "/favicon.ico" }],
        [
            "link",
            { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css" },
        ],
        ["script", { src: "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js" }]
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
            text: 'JavaScript',
            children: [
                {text: '基础', link: '/JavaScript/'},
                {text: '进阶', link: '/JavaScript/advanced'}
            ]
        },
        {
            text: 'TypeScript',
            children: [
                {text: '基础', link: '/TypeScript/'},
                {text: '进阶', link: '/TypeScript/advanced'}
            ]
        }
    ]
}
