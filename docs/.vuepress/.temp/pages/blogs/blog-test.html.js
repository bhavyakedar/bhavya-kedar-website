import comp from "/Users/bhavya.kedar/IdeaProjects/bhavya-kedar-blog-website/blog-website/docs/.vuepress/.temp/pages/blogs/blog-test.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/blog-test.html\",\"title\":\"Test Blog\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Sub Title\",\"slug\":\"sub-title\",\"link\":\"#sub-title\",\"children\":[]}],\"git\":{\"updatedTime\":1716694206000,\"contributors\":[{\"name\":\"Bhavya Kedar\",\"email\":\"bahvyakedar24x7@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"blogs/blog-test.md\"}")
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
