const { hopeTheme } = require("vuepress-theme-hope");
const { searchPlugin } = require('@vuepress/plugin-search');
const { copyrightPlugin } = require("vuepress-plugin-copyright2");

module.exports = {
    lang: 'zh-CN',
    title: 'Yuejia-Lai的知识库',
    description: '整理记录作者的所学，包括但不限于读书笔记，技术框架，开发难点，刷题记录等',
    port: 5000,
    date: 2022-07-01,
    plugins: [
      searchPlugin({
        maxSuggestions: 10
      }),
    ],
    theme: hopeTheme({
      themeColor: {
        blue: "#228B22",
        red: "#FFC0CB",
        green: "#00FF7F",
        orange: "#FF7F50",
      },
      repo: "https://github.com/Yuejia-Lai/library.git",
      repoLabel: "GitHub",
      repoDisplay: true,
      fullscreen: true,
      logo: "./logo.png",
      iconAssets: "./iconfont.css",
      headerDepth: 1,
      displayFooter: true,
      footer: "版权所有，转载请注明出处！  <a href=https://beian.miit.gov.cn/#/Integrated/index target=_blank>渝ICP备2022006471</a>",
      copyright: false,
      author: "Yuejia-Lai",
      darkmode: "disable",
      plugins: {
        mdEnhance: {
          enableAll: true,
          tabs: true,
          footnote: true,
          mark: true,
          tasklist: true,
          // 启用图片标记
          imageMark: true,
          // 启用图片大小
          imageSize: true,
          tex: true,
          demo: true,
          
        },
        copyCode: {
          showInMobile: true,
          duration: 500,
        },
        copyright: {
          global: true,
          author: "Yuejia-Lai",
          triggerWords: 80,
          hostname: "laiyuejia.cn",
        },
        comment: {
          comment: false,
        }
      },
      
      navbar: [
        {
          text: "使用指北",
          link: "/guide/README.md",
          icon: "iconfont icon-feedback",
          activeMatch: "^/guide",
        },
        {
          text: "学习路线",
          icon: "iconfont icon-luxiandaohang",
          prefix: "/maps/",
          children: [
              {
                text: "Java后端学习路线",
                link: "Java.md",
              },
              {
                text: "C++后端学习路线",
                link: "C++.md",
              }
          ],
        },
        {
          text: "项目",
          icon: "iconfont icon-manage_fill",
          prefix: "/app/",
          children: [],
        },
        {
          text: "小知识",
          icon: "iconfont icon-creativefill",
          prefix: "/tips/",
          children: [],
        },
        {
          text: "关于我",
          icon: "iconfont icon-wangwang",
          link: "/me/about.md",
          activeMatch: "^/me",
        }
      ],
      sidebar: [
        {
          text: "计算机基础",
          icon: "iconfont icon-computer_fill",
          link: "/computer/",
          prefix: "/computer",
          collapsable: true,
          children: [
              {
                text: "CSAPP",
                icon: "iconfont icon-jisuanjikaifa",
                prefix: "/csapp/",
                collapsable: true,
                children: [
                  {
                    text: "第一章-计算机系统漫游",
                    icon: "iconfont icon-document_fill",
                    link: "chapter1.md"
                  },
                  {

                  }
                ]
              },
          ]
        },
        {
          text: "专业书籍阅读",
          icon: "iconfont icon-data-dictionary",
          link: "/book",
          prefix: "/computer",
          collapsable: true,
          children: [
              {
                text: "CSAPP",
                icon: "iconfont icon-jisuanjikaifa",
                prefix: "/csapp/",
                collapsable: true,
                children: [
                  {
                    text: "第一章-计算机系统漫游",
                    icon: "iconfont icon-document_fill",
                    link: "chapter1.md"
                  },
                  {

                  }
                ]
              },
          ]
        },
        {
          text: "Java后端",
          icon: "iconfont icon-java",
          prefix: "/java",
          collapsable: true,
          children: [
            {
              text: "Java基础《Java核心技术》",
              icon: "iconfont icon-data-dictionary",
              prefix: "/javacore/",
              children: [
                {
                  text: "第一章-Java程序设计概述",
                  icon: "iconfont icon-document_fill",
                  link: "chapter1.md",
                },
              ]
            }
          ]
        },
        {
          text: "开发工具",
          icon: "iconfont icon-gongju",
          prefix: "/tools",
          collapsable: true,
          children: [
            {
              text: "Git",
              icon: "iconfont icon-git",
              link: "/git.md",
            },
            {

            }
          ]
        },
        {
          text: "个人项目",
          icon: "iconfont icon-brand",
          prefix: "/tools",
          collapsable: true,
          children: [
            {
              
            },
            {

            }
          ]
        },
      ],
    }), 
  };