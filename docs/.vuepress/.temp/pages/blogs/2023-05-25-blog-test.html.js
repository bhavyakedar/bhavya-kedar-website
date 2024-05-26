import comp from "/Users/bhavya.kedar/IdeaProjects/bhavya-kedar-blog-website/blog-website/docs/.vuepress/.temp/pages/blogs/2023-05-25-blog-test.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/2023-05-25-blog-test.html\",\"title\":\"Test Blog\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Test Blog\",\"date\":\"2023-05-25T00:00:00.000Z\",\"tags\":[\"tag1\",\"tag2\"]},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"blogs/2023-05-25-blog-test.md\"}")
export { comp, data }

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
