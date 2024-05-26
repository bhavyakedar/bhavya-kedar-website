import comp from "/Users/bhavya.kedar/IdeaProjects/bhavya-kedar-blog-website/blog-website/docs/.vuepress/.temp/pages/contact.html.vue"
const data = JSON.parse("{\"path\":\"/contact.html\",\"title\":\"Contact\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Contact\",\"icon\":\"/images/bk-logo.jpeg\",\"sidebar\":false},\"headers\":[],\"git\":{\"updatedTime\":1716694206000,\"contributors\":[{\"name\":\"Bhavya Kedar\",\"email\":\"bahvyakedar24x7@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"contact.md\"}")
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
