import comp from "/Users/bhavya.kedar/IdeaProjects/bhavya-kedar-blog-website/blog-website/docs/.vuepress/.temp/pages/contact/index.html.vue"
const data = JSON.parse("{\"path\":\"/contact/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Contact Info Here\",\"slug\":\"contact-info-here\",\"link\":\"#contact-info-here\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"contact/index.md\"}")
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
