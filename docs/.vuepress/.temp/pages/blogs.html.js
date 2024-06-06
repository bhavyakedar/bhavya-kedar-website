import comp from "/Users/bhavya.kedar/IdeaProjects/bhavya-kedar-blog-website/blog-website/docs/.vuepress/.temp/pages/blogs.html.vue"
const data = JSON.parse("{\"path\":\"/blogs.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":false},\"headers\":[{\"level\":2,\"title\":\"Blog 0 - How it got here?\",\"slug\":\"blog-0-how-it-got-here\",\"link\":\"#blog-0-how-it-got-here\",\"children\":[]}],\"git\":{\"updatedTime\":1716694206000,\"contributors\":[{\"name\":\"Bhavya Kedar\",\"email\":\"bahvyakedar24x7@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"blogs.md\"}")
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
