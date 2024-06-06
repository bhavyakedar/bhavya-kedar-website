export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/blogs.html", { loader: () => import(/* webpackChunkName: "blogs.html" */"/Users/bhavya.kedar/IdeaProjects/bhavya-kedar-blog-website/blog-website/docs/.vuepress/.temp/pages/blogs.html.js"), meta: {"title":""} }],
  ["/contact.html", { loader: () => import(/* webpackChunkName: "contact.html" */"/Users/bhavya.kedar/IdeaProjects/bhavya-kedar-blog-website/blog-website/docs/.vuepress/.temp/pages/contact.html.js"), meta: {"title":"Contact"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/bhavya.kedar/IdeaProjects/bhavya-kedar-blog-website/blog-website/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Bhavya Kedar"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/bhavya.kedar/IdeaProjects/bhavya-kedar-blog-website/blog-website/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blogs/blog-0-how-it-got-here.html", { loader: () => import(/* webpackChunkName: "blogs_blog-0-how-it-got-here.html" */"/Users/bhavya.kedar/IdeaProjects/bhavya-kedar-blog-website/blog-website/docs/.vuepress/.temp/pages/blogs/blog-0-how-it-got-here.html.js"), meta: {"title":"Blog 0 - How it got here?"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
