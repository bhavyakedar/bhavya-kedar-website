import comp from "/Users/bhavya.kedar/IdeaProjects/bhavya-kedar-blog-website/blog-website/docs/.vuepress/.temp/pages/blogs.html.vue"
const data = JSON.parse("{\"path\":\"/blogs.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":false},\"headers\":[{\"level\":2,\"title\":\"First Blog Title\",\"slug\":\"first-blog-title\",\"link\":\"#first-blog-title\",\"children\":[]},{\"level\":2,\"title\":\"Second Blog Title\",\"slug\":\"second-blog-title\",\"link\":\"#second-blog-title\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"blogs.md\"}")
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
