import comp from "/Users/bhavya.kedar/IdeaProjects/bhavya-kedar-blog-website/blog-website/docs/.vuepress/.temp/pages/blogs/blog-test.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/blog-test.html\",\"title\":\"Blog 0 - How it got here?\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"\",\"slug\":\"\",\"link\":\"#\",\"children\":[{\"level\":3,\"title\":\"How this website is created?\",\"slug\":\"how-this-website-is-created\",\"link\":\"#how-this-website-is-created\",\"children\":[]},{\"level\":3,\"title\":\"How this website is deployed?\",\"slug\":\"how-this-website-is-deployed\",\"link\":\"#how-this-website-is-deployed\",\"children\":[]},{\"level\":3,\"title\":\"How this website is protected?\",\"slug\":\"how-this-website-is-protected\",\"link\":\"#how-this-website-is-protected\",\"children\":[]},{\"level\":3,\"title\":\"\",\"slug\":\"-1\",\"link\":\"#-1\",\"children\":[]}]}],\"git\":{\"updatedTime\":1716694206000,\"contributors\":[{\"name\":\"Bhavya Kedar\",\"email\":\"bahvyakedar24x7@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"blogs/blog-test.md\"}")
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
