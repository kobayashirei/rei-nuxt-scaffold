export const headerConfig = {
  navbar: [
    {
      path: '/',
      title: 'nav.home'
    },
    {
      path: '/blog',
      title: 'nav.blog'
    },
    {
      path: '/demo',
      title: 'nav.demo'
    },
    {
      path: '/about',
      title: 'nav.about'
    },
    {
      path: '/tailwind',
      title: 'nav.tailwind'
    }
  ]
}

export const aboutConfig = {
  title: '关于',
  // ...
  data: [
    {
      name: 'repository',
      title: '代码仓库',
      members: [
        {
          title: 'Github前端仓库地址',
          description: 'rei nuxt scaffold',
          url: 'https://github.com/ArishiRei/rei-nuxt-scaffold'
        }
      ]
    },
    {
      name: 'team',
      title: '团队',
      members: [
        {
          name: 'ArishiRei',
          role: '后端开发',
          avatar: '/img/avatar.jpg',
          uid: '1',
        }
      ]
    }
  ],
}

export const languageConfig = [
  {
    title: '简体中文',
    code: 'zh',
    name: 'china',
  },
  {
    title: 'English',
    code: 'en',
    name: 'english',
  },
  {
    title: '日本語',
    code: 'ja',
    name: 'japan',
  }
]

export const preferenceConfig = {

}

export const appearanceConfig = {
  theme: {
    default: 'auto',
    data: [
      {
        name: 'dark',
        value: 'dark',
        title: 'theme.dark',
      },
      {
        name: 'light',
        value: 'light',
        title: 'theme.light',
      },
      {
        name: 'auto',
        value: 'auto',
        title: 'theme.auto',
      }
    ]
  },
  colors: [
    {
      name: 'pink',
      title: '心爱粉',
      primary: '#f06e8e',
    },
    {
      name: 'blue',
      title: '智慧蓝',
      primary: '#4581e1'
    },
    {
      name: 'purple',
      title: '神秘紫',
      primary: '#b044b0',
    },
    {
      name: 'green',
      title: '自然绿',
      primary: '#46a12f',
    },
    {
      name: 'yellow',
      title: '活力黄',
      primary: '#f98d00',
    },
    {
      name: 'cyan',
      title: '神秘蓝',
      primary: '#199bb6',
    },
    {
      name: 'red',
      title: '活力红',
      primary: '#dd1818',
    },
    {
      name: 'custom',
      title: '自定义',
      primary: '',
    }
  ],
  background: {
    type: 'image', // 'image' or 'color'
    color: '',
    image: '/img/bg.jpg',
  },
  size: {}
}

export const initLockConfig = {
  lang: false,
}

export const siteConfig = {
  title: 'main.title',
  description: 'main.description',
  version: '0.1.0',
  subtitle: "My Website...", // A short description or tagline for your blog
  lang: "zh", // Language code, e.g. 'en', 'zh', 'ja', etc.
}

export const testConfig = {
  count: 1
}
