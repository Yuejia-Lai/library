export const data = JSON.parse("{\"key\":\"v-5a814a99\",\"path\":\"/posts/article10.html\",\"title\":\"文章 10\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-01-10T00:00:00.000Z\",\"category\":[\"CategoryA\",\"CategoryB\"],\"tag\":[\"tag A\",\"tag B\"]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.11,\"words\":33},\"copyright\":\"著作权归Yuejia-Lai所有\\n原文链接：https://laiyuejia.cn/posts/article10.html\",\"filePathRelative\":\"posts/article10.md\",\"localizedDate\":\"2022年1月10日\"}")

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
