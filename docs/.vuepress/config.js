import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Contact',
        link: '/contact'
      },
      {
        text: 'Blogs',
        link: '/blogs'
      }
    ],
    logo: '/images/bk-logo-light-bg.png',
    logoDark: '/images/bk-logo-dark-bg.png',
    sidebar: 'auto',
    colorMode: 'auto',
  }),
})

