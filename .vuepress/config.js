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
        blue: "#FF7F50",
        red: "#99CCFF",
        green: "#00FF7F",
        orange: "#FFC0CB",
      },
      repo: "https://github.com/Yuejia-Lai/library",
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
          link: "/guide/",
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
                link: "Java",
              },
              {
                text: "C++后端学习路线",
                link: "C++",
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
          collapsable: true,
          children: [
              {
                text: "SQL",
                icon: "iconfont icon-database-full",
                collapsable: true,
                prefix: "/computer/SQL/",
                children: [
                  {
                    text: "数据库与MySQL环境搭建",
                    icon: "iconfont icon-database-full",
                    link: "chapter1"
                  },
                  {
                    text: "基本SELECT语句",
                    icon: "iconfont icon-database-full",
                    link: "chapter2"
                  },
                  {
                    text: "多表查询",
                    icon: "iconfont icon-database-full",
                    link: "chapter3"
                  },
                  {
                    text: "单行函数与聚合函数",
                    icon: "iconfont icon-database-full",
                    link: "chapter4"
                  },
                  {
                    text: "表操作与数据增删改",
                    icon: "iconfont icon-database-full",
                    link: "chapter6"
                  },
                  {
                    text: "数据类型",
                    icon: "iconfont icon-database-full",
                    link: "chapter7"
                  },
                  {
                    text: "约束",
                    icon: "iconfont icon-database-full",
                    link: "chapter8"
                  },
                  {
                    text: "视图、存储过程与函数",
                    icon: "iconfont icon-database-full",
                    link: "chapter9"
                  },
                  {
                    text: "变量、流程控制与游标、触发器",
                    icon: "iconfont icon-database-full",
                    link: "chapter10"
                  },
                  {
                    text: "MySQL 8 新特性",
                    icon: "iconfont icon-database-full",
                    link: "chapter11"
                  },
                ]
              },
              {

              },
          ]
        },
        {
          text: "专业书籍阅读",
          icon: "iconfont icon-data-dictionary",
          link: "/book",
          collapsable: true,
          children: [
              {
                text: "CSAPP",
                icon: "iconfont icon-jisuanjikaifa",
                link: "/computer/csapp/",
                prefix: "/computer/csapp/",
                collapsable: true,
                children: [
                  {
                    text: "第一章-计算机系统漫游",
                    icon: "iconfont icon-document_fill",
                    link: "chapter1"
                  },
                  {
                    text: "信息的表示和处理",
                    icon: "iconfont icon-document_fill",
                    link: "chapter2"
                  },
                  {
                    text: "程序的机器级表示",
                    icon: "iconfont icon-document_fill",
                    link: "chapter3"
                  },
                ]
              },
              {
                text: "C Primer Plus",
                icon: "iconfont icon-cyuyan",
                link: "/book",
                collapsable: true,
                prefix: "/computer/C_Primer_Plus/",
                children: [
                  {
                    text: "初识C语言",
                    icon: "iconfont icon-document_fill",
                    link: "chapter1"
                  },
                  {
                    text: "C语言概述",
                    icon: "iconfont icon-document_fill",
                    link: "chapter2"
                  },
                  
                ]
              },
              {
                text: "Java基础《Java核心技术》",
                icon: "iconfont icon-data-dictionary",
                prefix: "/java/javacore/",
                collapsable: true,
                children: [
                  {
                    text: "第一章-Java程序设计概述",
                    icon: "iconfont icon-document_fill",
                    link: "chapter1",
                  },
                ]
              },
              
          ]
        },
        {
          text: "Java后端",
          icon: "iconfont icon-java",
          collapsable: true,
          children: [
            {
              text: "MyBatis",
              icon: "iconfont icon-data",
              prefix: "/develop/MyBatis/",
              collapsable: true,
              children: [
                {
                  text: "MyBatis简介",
                  icon: "iconfont icon-data",
                  link: "chapter1",
                },
                {
                  text: "搭建MyBatis",
                  icon: "iconfont icon-data",
                  link: "chapter2",
                },
                {
                  text: "MyBatis的增删改查",
                  icon: "iconfont icon-data",
                  link: "chapter3",
                },
                {
                  text: "MyBatis获取参数值的两种方式",
                  icon: "iconfont icon-data",
                  link: "chapter4",
                },
                {
                  text: "MyBatis的各种查询功能",
                  icon: "iconfont icon-data",
                  link: "chapter5",
                },
                {
                  text: "自定义映射resultMap",
                  icon: "iconfont icon-data",
                  link: "chapter6",
                },
                {
                  text: "动态SQL",
                  icon: "iconfont icon-data",
                  link: "chapter7",
                },
                {
                  text: "MyBatis的缓存与逆向工程",
                  icon: "iconfont icon-data",
                  link: "chapter8",
                },
                {
                  text: "分页插件",
                  icon: "iconfont icon-data",
                  link: "chapter9",
                },
              ]
            },
            {
              text: "Spring",
              icon: "iconfont icon-bxl-spring-boot",
              prefix: "/develop/Spring/",
              collapsable: true,
              children: [
                {
                  text: "Spring简介",
                  icon: "iconfont icon-bxl-spring-boot",
                  link: "chapter1",
                },
                {
                  text: "IOC",
                  icon: "iconfont icon-bxl-spring-boot",
                  link: "chapter2",
                },
                {
                  text: "AOP",
                  icon: "iconfont icon-bxl-spring-boot",
                  link: "chapter3",
                },
                {
                  text: "声明式事务",
                  icon: "iconfont icon-bxl-spring-boot",
                  link: "chapter4",
                },
              ]
            },
            {
              text: "SpringMVC",
              icon: "iconfont icon-bxl-spring-boot",
              prefix: "/develop/SpringMVC/",
              collapsable: true,
              children: [
                {
                  text: "SpringMVC简介与入门案例",
                  icon: "iconfont icon-bxl-spring-boot",
                  link: "chapter1",
                },
                {
                  text: "@RequestMapping注解与请求参数获取",
                  icon: "iconfont icon-bxl-spring-boot",
                  link: "chapter2",
                },
              ]
            }
          ]
        },
        {
          text: "开发工具",
          icon: "iconfont icon-gongju",
          
          collapsable: true,
          children: [
            {
              text: "Git",
              icon: "iconfont icon-git",
              link: "/tools/Git",
            },
            {
              text: "Maven",
              icon: "iconfont icon-G-stack-fill",
              link: "/tools/maven",
            },
          ]
        },
        {
          text: "小知识",
          icon: "iconfont icon-creativefill",
          collapsable: true,
          prefix: "/tips/",
          children: [
            {
              text: "cmd使用",
              icon: "iconfont icon-zhongduan",
              link: "cmd",                     
            },
            {
              text: "markdown语法",
              icon: "iconfont icon-file-markdown-fill",
              link: "markdown",
              
            },
            {
              text: "常见开源协议",
              icon: "iconfont icon-kaiyuan",
              link: "开源协议",
            },
          ]
        },
        {
          text: "个人项目",
          icon: "iconfont icon-brand",
          prefix: "/projects",
          collapsable: true,
          children: [
            {
              
            },
          ]
        },
      ],
    }), 
  };