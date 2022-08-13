export const data = JSON.parse("{\"key\":\"v-184f4da6\",\"path\":\"/intro.html\",\"title\":\"Intro Page\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"info\"},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":10},\"copyright\":\"著作权归Yuejia-Lai所有\\n原文链接：https://laiyuejia.cn/intro.html\",\"filePathRelative\":\"intro.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
