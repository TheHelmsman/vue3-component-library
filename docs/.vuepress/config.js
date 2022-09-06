import { defaultTheme } from '@vuepress/theme-default'

export default {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Component Library 🥂',
      description: 'Documentation site for the Vue component library plugin'
    },
  },
  theme: defaultTheme({
    // set config here
    navbar: [
      { text: 'Getting Started', link: '/guide' },
      { text: 'GitHub', link: 'https://github.com/TheHelmsman/vue3-component-library.git' },
    ],    
    // sidebar array
    // all pages will use the same sidebar
    sidebar: [
        // SidebarItem
        {
          text: 'Components',
          link: '/components/',
          children: [
            // SidebarItem
            {
              text: 'GitHub',
              link: 'https://github.com/TheHelmsman/vue3-component-library.git',
              children: [],
            },
            // string - page file path
            '/components/wf-input-text.md',
            '/components/sese-input-textarea.md',
          ],
        },
      ],
  }),
}
