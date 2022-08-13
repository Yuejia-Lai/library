export const data = JSON.parse("{\"key\":\"v-03842690\",\"path\":\"/posts/article/article1.html\",\"title\":\"文章 1\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-01-01T00:00:00.000Z\",\"category\":[\"CategoryA\"],\"tag\":[\"tag A\",\"tag B\"]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.11,\"words\":32},\"copyright\":\"著作权归Yuejia-Lai所有\\n原文链接：https://laiyuejia.cn/posts/article/article1.html\",\"filePathRelative\":\"posts/article/article1.md\",\"localizedDate\":\"2022年1月1日\"}")

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
